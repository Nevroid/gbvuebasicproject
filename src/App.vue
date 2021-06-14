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
          <v-col>Place chart here!</v-col>
          <!-- <router-view/> -->
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PaymentList from './components/PaymentList'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    PaymentList
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
