<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <div id="app">
              <PaymentList />
            </div>
          </v-col>
          <v-col align-self='center'><ChartWrapper /></v-col>
          <!-- <router-view/> -->
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PaymentList from './components/PaymentList'
import { mapActions } from 'vuex'
import ChartWrapper from './components/ChartWrapper'
export default {
  name: 'App',
  components: {
    PaymentList,
    ChartWrapper
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions(['fetchData'])
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style lang="scss" module>
</style>
