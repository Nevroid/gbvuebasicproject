<template>
  <v-container>
    <div class="text-h5 text-md-h4 my-5">My expenses</div>

    <v-dialog
      v-model='formState'
      max-width='500'
    >
    <template
      v-slot:activator='{ on }'><ShowHideBtn v-on='on' @clicked="showForm"> ADD EXPENCE </ShowHideBtn>
    </template>
    <v-card>
      <PaymentForm v-if="formState"/>
    </v-card>
    </v-dialog>
        <transition name="fade">
    <ModalMenu />
    </transition>
    <!-- <v-row>
      <v-col v-for="header in headers" :key="header">{{ header }}</v-col>
    </v-row>
    <v-row v-for="item in getPaymentList" :key="item.index">
      <v-col>{{ item.index }}</v-col>
      <v-col>{{ item.date }}</v-col>
      <v-col>{{ item.category }}</v-col>
      <v-col>{{ item.price }} <button @click="showContextMenu(item)">edit</button></v-col>
    </v-row> -->
  <v-data-table
    :headers="headers"
    :items="getPaymentList"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalMenu from './modalWindows/ModalMenu'
import ShowHideBtn from './ShowHideBtn'
import PaymentForm from './PaymentForm'

export default {
  components: {
    ModalMenu,
    ShowHideBtn,
    PaymentForm
  },
  data () {
    return {
      headers: [
        {
          text: '№',
          align: 'start',
          sortable: false,
          value: 'index'
        },
        { text: 'Date', value: 'date' },
        { text: 'Category', value: 'category' },
        { text: 'Price', value: 'price' }
      ],
      formState: false
      // headers: ['#', 'Date', 'Category', 'price']
    }
  },
  methods: {
    showContextMenu (item) {
      this.$modal.show(`Payment № ${item.index}`)
      this.$modal.edit(item)
    },
    showForm () {
      this.formState = !this.formState
    }
  },
  computed: {
    ...mapGetters(['getPaymentList'])
  }
}
</script>

<style lang="scss" module>
  :global(.fade-enter-active), :global(.fade-leave-active) {
    transition: opacity 1s;
  }
  :global(.fade-enter), :global(.fade-leave-to) {
    opacity: 0;
  }
</style>
