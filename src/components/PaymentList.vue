<template>
  <div>
    <table :class="[$style.table]">
        <tr>
            <th :class="[$style.th]" v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
        <tr :class="[$style.tr]" v-for="item in getCroppedPaymentList" :key="item.index">
            <td>{{ item.index }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.spended }}</td>
        </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      headers: ['#', 'Date', 'Category', 'Spended']
    }
  },
  props: {
    items: Array
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
</style>
