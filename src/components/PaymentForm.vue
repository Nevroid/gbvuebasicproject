<template>
  <div :class="[$style.form]">
      <input :class="[$style.form__field]" type="date" placeholder="Date" v-model="date">
      <select :class="[$style.form__field]" v-model="category">
        <option value="Education" >Education</option>
        <option value="Food">Food</option>
        <option value="HealthCare">HealthCare</option>
      </select>
      <input :class="[$style.form__field]" type="number" placeholder="Spended" v-model.number="spended">
      <button :class="[$style.form__field, $style.saveBtn]" @click="save">Save</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      date: '',
      category: '',
      spended: 0
    }
  },
  methods: {
    ...mapMutations(['addPaymentListData']),
    save () {
      const { date, category, spended } = this
      this.addPaymentListData({ date, category, spended })
    }
  }
}
</script>

<style lang="scss" module>
  .form {
    position: absolute;
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
  .saveBtn {
    color: white;
    background: #22a698;
  }
</style>
