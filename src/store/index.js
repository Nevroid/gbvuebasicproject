// import randomColor from 'randomcolor'
import randomColor from 'randomcolor'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentList: [],
    paymentCats: [],
    chartData: [],
    currentPage: 1
  },
  mutations: {
    setPaymentListData (state, payload) {
      state.paymentList = payload
      payload.forEach(element => {
        if (!state.paymentCats.includes(element.category)) {
          state.paymentCats.push(element.category)
        }
      })
    },
    addPaymentListData (state, payload) {
      if (!state.paymentCats.includes(payload.category)) {
        state.paymentCats.push(payload.category)
      }
      const indexList = state.paymentList.map(el => el.index)
      payload.index = indexList.length
      state.paymentList.push(payload)
    },
    editPaymentListData (state, payload) {
      state.paymentList[payload.index] = payload
    },
    deletePaymentItem (state, payload) {
      state.paymentList.splice(payload, 1)
    },
    gatherChartData (state, payload) {
      state.chartData = [{ backgroundColor: [], data: [] }]
      state.paymentCats.forEach(cat => {
        let totalCatCost = 0
        const thisCatItems = state.paymentList.filter(item => item.category === cat)
        thisCatItems.forEach(item => {
          totalCatCost = totalCatCost + item.price
        })
        state.chartData.forEach(item => {
          item.backgroundColor.push(randomColor())
          item.data.push(totalCatCost)
        })
      })
      console.log(state.chartData)
    }
  },
  getters: {
    getPaymentList: state => state.paymentList,
    getPaymentCats: state => state.paymentCats,
    getChartData: state => state.chartData
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
              price: 100
            },
            {
              index: 1,
              date: '02-01-2021',
              category: 'Food',
              price: 200
            },
            {
              index: 2,
              date: '03-01-2021',
              category: 'Education',
              price: 300
            },
            {
              index: 3,
              date: '04-01-2021',
              category: 'Health',
              price: 400
            },
            {
              index: 4,
              date: '05-01-2021',
              category: 'Food',
              price: 500
            },
            {
              index: 5,
              date: '06-01-2021',
              category: 'Food',
              price: 600
            },
            {
              index: 6,
              date: '07-01-2021',
              category: 'Education',
              price: 700
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
