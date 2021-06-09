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

import { mapActions } from 'vuex'

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
    ...mapActions(['fetchData']),
    showForm (payload) {
      this.formState = payload
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style lang="scss" module>
</style>
