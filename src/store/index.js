import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentList: [
      {
        index: 0,
        date: '10.10.2000',
        category: 'test cat 1',
        spended: 100
      },
      {
        index: 1,
        date: '11.10.2000',
        category: 'test cat 1',
        spended: 200
      },
      {
        index: 2,
        date: '12.10.2000',
        category: 'test cat 1',
        spended: 300
      },
      {
        index: 3,
        date: '14.10.2000',
        category: 'test cat 1',
        spended: 400
      },
      {
        index: 4,
        date: '15.10.2000',
        category: 'test cat 1',
        spended: 500
      },
      {
        index: 5,
        date: '15.10.2000',
        category: 'test cat 1',
        spended: 600
      },
      {
        index: 6,
        date: '15.10.2000',
        category: 'test cat 1',
        spended: 700
      }
    ],
    currentPage: 1,
    pages: 0
  },
  mutations: {
    addPaymentListData (state, payload) {
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
    getTotalPagesCount: state => state.pages
  },
  actions: {}
})
