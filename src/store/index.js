import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentList: [],
    paymentCats: [],
    currentPage: 1,
    pages: 0
  },
  mutations: {
    setPaymentListData (state, payload) {
      state.paymentList = payload
      payload.forEach(element => {
        if (!state.paymentCats.includes(element.category)) {
          state.paymentCats.push(element.category)
        }
      })
      state.pages = (state.paymentList.length - (state.paymentList.length % 5)) / 5 + 1
    },
    addPaymentListData (state, payload) {
      if (!state.paymentCats.includes(payload.category)) {
        state.paymentCats.push(payload.category)
      }
      const indexList = state.paymentList.map(el => el.index)
      payload.index = indexList.length
      state.paymentList.push(payload)
      state.pages = (state.paymentList.length - (state.paymentList.length % 5)) / 5 + 1
    },
    countTotalPages (state) {
      state.pages = (state.paymentList.length - (state.paymentList.length % 5)) / 5 + 1
    },
    changePage (state, payload) {
      state.currentPage = payload
    }
  },
  getters: {
    getPaymentList: state => state.paymentList,
    getCroppedPaymentList: state => state.paymentList.slice([5 * (state.currentPage - 1)], [5 * state.currentPage]),
    getTotalPagesCount: state => state.pages,
    getPaymentCats: state => state.paymentCats
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            {
              index: 0,
              date: '01-01-2021',
              category: 'Health',
              spended: 100
            },
            {
              index: 1,
              date: '02-01-2021',
              category: 'Food',
              spended: 200
            },
            {
              index: 2,
              date: '03-01-2021',
              category: 'Education',
              spended: 300
            },
            {
              index: 3,
              date: '04-01-2021',
              category: 'Health',
              spended: 400
            },
            {
              index: 4,
              date: '05-01-2021',
              category: 'Food',
              spended: 500
            },
            {
              index: 5,
              date: '06-01-2021',
              category: 'Food',
              spended: 600
            },
            {
              index: 6,
              date: '07-01-2021',
              category: 'Education',
              spended: 700
            }
          ])
        }, 1000)
      })
        .then(res => {
          commit('setPaymentListData', res)
        })
    }
  }
})
