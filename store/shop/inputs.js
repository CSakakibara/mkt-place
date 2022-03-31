export const mutations = {
  setSearchTerm(state, text) {
    state.searchTerm = text
  },
  changeToNextBanner(state, length) {
    const maxIndex = length - 1
    if (state.bannersIndex < maxIndex) {
      state.bannersIndex++
      return
    }
    state.bannersIndex = 0
  },
  changeBanner(state, position) {
    state.bannersIndex = position
  },
}

export const state = () => ({
  searchTerm: '',
  bannersIndex: 0,
})
