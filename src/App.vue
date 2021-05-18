<template>
  <div id="app">
    <h1>My expenses</h1>
    <ShowHideBtn :msg="btnMsg" @clicked="showForm" />
    <PaymentForm v-if="formState"/>
    <PaymentList />
    <Pagination />
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
      btnMsg: 'ADD EXPENCE',
      formState: false
    }
  },
  methods: {
    showForm (payload) {
      this.formState = payload
    }
  }
}
</script>

<style lang="scss" module>
</style>
