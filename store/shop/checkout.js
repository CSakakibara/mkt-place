export const state = () => ({
  success: false,
})

export const mutations = {
  openSuccess(state) {
    state.success = true
  },
  closeSuccess(state) {
    state.success = false
  },
}
