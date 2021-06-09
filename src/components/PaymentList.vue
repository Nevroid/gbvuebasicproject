<template>
  <div>
    <table :class="[$style.table]">
      <transition name="fade">
      <ModalMenu />
      </transition>
        <tr>
            <th :class="[$style.th]" v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
        <tr :class="[$style.tr]" v-for="item in getCroppedPaymentList" :key="item.index">
            <td>{{ item.index }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.price }} <button @click="showContextMenu(item)">edit</button></td>
        </tr>
    </table>
  </div>
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
    .table {
      background: lightblue;
      font-size: 18px;
      text-align: center;
    }
    .th {
      width: 100px;
      background: lightcoral;
    }
    .tr {
      border: 1px solid black;
    }
    :global(.fade-enter-active), :global(.fade-leave-active) {
      transition: opacity 1s;
    }
    :global(.fade-enter), :global(.fade-leave-to) {
      opacity: 0;
    }
    // :global(.fade-enter-to), :global(.fade-leave) {
    //   opacity: 100;
    // }
</style>
