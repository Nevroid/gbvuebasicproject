<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <div id="app">
              <h1>My expenses</h1>
              <ShowHideBtn @clicked="showForm"> ADD EXPENCE </ShowHideBtn>
              <PaymentForm v-if="formState"/>
              <PaymentList />
              <Pagination />
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
