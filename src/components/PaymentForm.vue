<template>
  <div :class="[$style.form]">
      <input :class="[$style.form__field]" type="date" placeholder="Date" v-model="date">
      <div :class="[$style.form__categoryBlock]">
        <select v-show="!showNewCat" :class="[$style.form__field]" v-model="category">
          <option v-for="option in this.getPaymentCats" :key="option" :value="option" >{{ option }}</option>
        </select>
        <button v-show="!showNewCat" :class="[$style.form__field]" @click="addNew">Add new category</button>
        <button v-show="showNewCat" :class="[$style.form__field]" @click="addNew">Close</button>
        <input v-show="showNewCat" type="text" placeholder="Add new" v-model="category" :class="[$style.form__field]">
      </div>
      <input :class="[$style.form__field]" type="number" placeholder="Spended" v-model.number="spended">
      <button :class="[$style.form__field, $style.saveBtn]" @click="save">Save</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
      date: '',
      category: '',
      spended: 0,
      showNewCat: false
    }
  },
  methods: {
    ...mapMutations(['addPaymentListData']),
    save () {
      const { date, category, spended } = this
      this.addPaymentListData({ date, category, spended })
    },
    addNew () {
      this.showNewCat = !this.showNewCat
    }
  },
  computed: {
    ...mapGetters(['getPaymentCats'])
  }
}
</script>

<style lang="scss" module>
  .form {
    height: 180px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .form__field {
    height: 40px;
    border-radius: 16px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .form__categoryBlock {
    display: flex;
    align-items: center;
  }
  .saveBtn {
    color: white;
    background: #22a698;
  }
</style>
