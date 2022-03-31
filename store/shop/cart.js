export const getters = {
  totalQuantity: (state) => {
    return state.cartItems.reduce((sum, item) => {
      return sum + item.quantity
    }, 0)
  },
  totalPrice: (state) => {
    return state.cartItems.reduce((sum, item) => {
      return sum + item.quantity * item.price
    }, 0)
  },
  financedTotalPrice: (state) => {
    return state.cartItems.reduce((sum, item) => {
      return sum + item.quantity * item.price
    }, 0)
  },
}

export const mutations = {
  addItem(state, item) {
    const itemIndex = state.cartItems.findIndex((i) => i.id === item.id)
    if (itemIndex === -1) {
      state.cartItems.push({ ...item, quantity: 1 })
      return
    }
    state.cartItems[itemIndex].quantity++
  },
  removeItem(state, item) {
    const itemIndex = state.cartItems.findIndex((i) => i.id === item.id)
    if (itemIndex === -1) return
    state.cartItems.splice(itemIndex, 1)
  },
  subtractItem(state, item) {
    const itemIndex = state.cartItems.findIndex((i) => i.id === item.id)
    if (itemIndex === -1) return
    if (state.cartItems[itemIndex].quantity <= 1) {
      state.cartItems.splice(itemIndex, 1)
      return
    }
    state.cartItems[itemIndex].quantity--
  },
  removeAll(state) {
    state.cartItems = []
  },
  restore(state) {
    state.cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
  },
}

export const state = () => ({
  cartItems: [],
})
