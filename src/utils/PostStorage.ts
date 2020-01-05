/**
 * @file Postをローカルに保存するユーティリティ
 */
import allSettled from 'promise.allsettled'
import Lockr from 'lockr'
import { IQiitaPost } from '@/types/qiita'

enum LocalStorageKey {
  SAVED_POSTS = 'K1'
}

class PostStorage {
  constructor (
    private prefix = ''
  ) {
    Lockr.prefix = 'qov__'
  }

  /**
   * 保存されたポストを参照する
   */
  public get savedPosts (): Record<string, IQiitaPost> {
    return Lockr.get(LocalStorageKey.SAVED_POSTS, {})
  }

  /**
   * Qiitaポストを保存する
   * @param post Qiitaポストオブジェクト
   */
  public async save (post: IQiitaPost): Promise<void> {
    const imageUrls = this.pickImageUrl(post.rendered_body)

    await allSettled(imageUrls.map((url) => {
      return this.saveImage(url)
    }))

    Lockr.set(LocalStorageKey.SAVED_POSTS, {
      ...this.savedPosts,
      [post.id]: post
    })
  }

  /**
   * Qiitaポストをストレージからリストアする
   * @param id QiitaポストID
   */
  public restore (id: string): IQiitaPost | void {
    return this.savedPosts[id]
  }

  /**
   * ストレージからQiitaポストを削除する
   * @param id QiitaポストID
   */
  public delete (id: string): void {
    const savedPosts = JSON.parse(JSON.stringify(this.savedPosts));

    delete savedPosts[id]
  }

  /**
   * 画像をストレージに保存する
   * @param url 画像URL
   */
  public async saveImage (url: string): Promise<string> {
    // TODO 画像を保存する術がわからないのでなにもしない
    await Promise.resolve()

    return url
  }

  /**
   * 画像をストレージからリストアする
   * @param url 画像URL
   */
  public restoreImage (url: string): string {
    // TODO 画像が保存されるようになれば実装する
    console.log('Load image:', url)

    return '%3Csvg%20width%3D%22450%22%20height%3D%22292%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20fill%3D%22%23D8D8D8%22%20d%3D%22M0%200h450v292H0z%22%2F%3E%3Ctext%20font-family%3D%22URWDIN-Medium%2C%20URW%20DIN%22%20font-size%3D%2220%22%20font-weight%3D%22400%22%20fill%3D%22%23888%22%3E%3Ctspan%20x%3D%22108%22%20y%3D%22206%22%3EImage%20could%20not%20be%20loaded%3C%2Ftspan%3E%3C%2Ftext%3E%3Ctext%20font-family%3D%22FiraCode-Retina%2C%20Fira%20Code%22%20font-size%3D%2264%22%20font-weight%3D%22400%22%20fill%3D%22%23888%22%3E%3Ctspan%20x%3D%22167%22%20y%3D%22141%22%3E%7B%20%7D%3C%2Ftspan%3E%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E'
  }

  /**
   * 画像をストレージから削除する
   * @param url 画像URL
   */
  public deleteImage (url: string): void {
    // TODO 画像が保存されるようになれば実装する
    console.log('Delete image from localStorage:', url);
  }

  /**
   * HTML中から画像URLを取り出す
   * @param html HTML
   */
  private pickImageUrl (html: string): string[] {
    const imgTags = html.match(/<img[^>]*>/g)

    if (!imgTags) {
      return []
    }

    const srcUrls = imgTags.map(tag => tag.replace(/^.*src="([^"]+)".*$/, '$1'))

    return srcUrls
  }
}

const postStorage = new PostStorage()

export { PostStorage, postStorage }
