<template>
  <div id="app">
    <h1>My expenses</h1>
    <ShowHideBtn :msg="btnMsg" @clicked="showForm" />
    <PaymentForm @paymentFormDataEmit="addData" @recountPages="countPages" v-if="formState"/>
    <PaymentList :items="paymentListToShow" />
    <Pagination @test="cropPaymentList" :pages="pages"/>
  </div>
</template>

<script>
import PaymentList from './components/PaymentList'
import PaymentForm from './components/PaymentForm'
import ShowHideBtn from './components/ShowHideBtn'
import Pagination from './components/Pagination'

export default {
  name: 'App',
  components: {
    PaymentList,
    PaymentForm,
    ShowHideBtn,
    Pagination
  },
  data () {
    return {
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
      btnMsg: 'ADD EXPENCE',
      formState: false,
      paymentListToShow: [],
      page: 1,
      pages: 0
    }
  },
  methods: {
    cropPaymentList (page) {
      this.paymentListToShow = this.paymentList.slice([5 * (page - 1)], [5 * page])
      this.page = page
    },
    addData (payload) {
      const indexList = this.paymentList.map(el => el.index)
      payload.index = indexList.length
      this.paymentList.push(payload)
      this.pages = (this.paymentList.length - (this.paymentList.length % 5)) / 5 + 1
    },
    showForm (payload) {
      this.formState = payload
    }
  },
  computed: {
    countPages () {
      return (this.paymentList.length - (this.paymentList.length % 5)) / 5 + 1
    }
  },
  mounted () {
    this.paymentListToShow = this.paymentList.slice([5 * (this.page - 1)], [5 * this.page])
    this.pages = this.countPages
  }
}
</script>

<style lang="scss" module>
</style>
