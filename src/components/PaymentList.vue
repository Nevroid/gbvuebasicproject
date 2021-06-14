<template>
  <v-container>
    <transition name="fade">
    <ModalMenu />
    </transition>
    <v-row>
      <v-col v-for="header in headers" :key="header">{{ header }}</v-col>
    </v-row>
    <v-row v-for="item in getCroppedPaymentList" :key="item.index">
      <v-col>{{ item.index }}</v-col>
      <v-col>{{ item.date }}</v-col>
      <v-col>{{ item.category }}</v-col>
      <v-col>{{ item.price }} <button @click="showContextMenu(item)">edit</button></v-col>
    </v-row>
  <v-data-table
    :headers="headers"
    :items="getCroppedPaymentList"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalMenu from './modalWindows/ModalMenu'

export default {
  components: {
    ModalMenu
  },
  data () {
    return {
      headers: ['#', 'Date', 'Category', 'price']
    }
  },
  methods: {
    showContextMenu (item) {
      this.$modal.show(`Payment № ${item.index}`)
      this.$modal.edit(item)
    }
  },
  computed: {
    ...mapGetters(['getCroppedPaymentList'])
  }
}
</script>

<style lang="scss" module>
    // .table {
    //   background: lightblue;
    //   font-size: 18px;
    //   text-align: center;
    // }
    // .th {
    //   width: 100px;
    //   background: lightcoral;
    // }
    // .tr {
    //   border: 1px solid black;
    // }
    :global(.fade-enter-active), :global(.fade-leave-active) {
      transition: opacity 1s;
    }
    :global(.fade-enter), :global(.fade-leave-to) {
      opacity: 0;
    }
</style>
