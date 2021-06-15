<template>
  <div v-if="showFlag" :class="[$style.modal]">
    {{ showFlag }}
    <div>
      <button @click="editItem">Edit</button>
      <button @click="deleteThisItem">Del</button>
    </div>
    <button @click="onClose">Close</button>
    <div v-if="editFlag">
    <input type="text" v-model="date">
    <input type="text" v-model="category">
    <input type="number" v-model.number="price">
    <button @click="save">Save</button>
  </div>

  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      showFlag: '',
      date: '',
      category: '',
      price: 0,
      index: 0,
      editFlag: false
    }
  },
  methods: {
    ...mapMutations(['editPaymentListData', 'deletePaymentItem']),
    editItem () {
      this.editFlag = !this.editFlag
    },
    onShow ({ name }) {
      this.showFlag = name
    },
    onEdit ({ paymentItem }) {
      // console.log(paymentItem)
      this.date = paymentItem.date
      this.category = paymentItem.category
      this.price = paymentItem.price
      this.index = paymentItem.index
    },
    onClose () {
      this.showFlag = ''
    },
    save () {
      const { index, date, category, price } = this
      if (this.category === '') {
        console.log('Category is empty')
      } else if (this.price === 0 || isNaN(this.price)) {
        console.log('Value is not set')
      } else {
        this.editPaymentListData({ index, date, category, price })
      }
      this.showFlag = ''
    },
    deleteThisItem () {
      const index = this.index
      this.deletePaymentItem(index)
      this.showFlag = ''
    }
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.onShow)
    this.$modal.EventBus.$on('edit', this.onEdit)
  },
  computed: {
    ...mapGetters(['getCroppedPaymentList'])
  }
}
</script>

<style lang="scss" module>
.modal {
  width: 200px;
  border: darkgray 1px solid;
  position: absolute;
  background: white;
  right: 0;
}

</style>
