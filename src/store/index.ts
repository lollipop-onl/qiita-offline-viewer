import { DefineStoreModule } from '@lollipop-onl/vuex-typesafe-helper'

interface IState {
  /* オフラインかどうか */
  isOffline: boolean;
}

export const state = (): IState => ({
  isOffline: !navigator.onLine
})

export const mutations = {
  /** オフライン状態を切り替える */
  setOfflineStatus (state: IState, status: boolean): void {
    state.isOffline = status
  }
}

export const actions = {
  nuxtClientInit ({ commit }: Store) {
    window.addEventListener('online', () => {
      commit('setOfflineStatus', false)
    })

    window.addEventListener('offline', () => {
      commit('setOfflineStatus', true)
    })
  }
}

export type Store = DefineStoreModule<'', IState, never, typeof mutations, never>
