<template>
  <div>
    <!-- <input :class="[$style.form__field]" type="date" placeholder="Date" v-model="date">
    <div :class="[$style.form__categoryBlock]">
      <select v-show="!showNewCat" :class="[$style.form__field]" v-model="category">
        <option v-for="option in this.getPaymentCats" :key="option" :value="option" >{{ option }}</option>
      </select>
      <v-btn dark color="teal"  v-show="!showNewCat" @click="addNew">Add new category</v-btn>
      <v-btn dark color="teal" v-show="showNewCat" @click="addNew">Close</v-btn>
      <input v-show="showNewCat" type="text" placeholder="Add new" v-model="category" :class="[$style.form__field]">
    </div>
    <input :class="[$style.form__field]" type="number" placeholder="price" v-model.number="price"> -->
    <v-form>
      <v-container>
        <v-row>
          <v-col>
            <v-btn @click="save" to="/add/payment/Food?value=155">Food 155</v-btn>
            <v-btn @click="save" to="/add/payment/Grocery?value=15">Grocery 15</v-btn>
            <v-btn @click="save" to="/add/payment/Testotest?value=22455">Testotest 22455</v-btn>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col>
            <v-text-field
              v-show="!datePickerShown"
              v-model="date"
              label="Date"
            ></v-text-field>
            <v-date-picker @input="datePickerShown = !datePickerShown" v-show="datePickerShown" v-model="date"></v-date-picker>
          </v-col>
          <v-col v-show="!datePickerShown">
            <v-btn dark color="teal" @click="datePickerShown = !datePickerShown">Show calendar</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-select
              v-show="!showNewCat"
              v-model="category"
              :items='this.getPaymentCats'
              :counter="16"
              label="Category"
              required
            ></v-select>
            <v-text-field
              v-show="showNewCat"
              v-model="category"
              label="Add new category"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-btn dark color="teal"  v-show="!showNewCat" @click="addNew">Add new category</v-btn>
            <v-btn dark color="teal" v-show="showNewCat" @click="addNew">Close</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="price"
              label="Price"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-btn dark color="teal"  @click="save">Save</v-btn>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
      date: '',
      category: '',
      price: 0,
      showNewCat: false,
      datePickerShown: false
    }
  },
  methods: {
    ...mapMutations(['addPaymentListData']),
    save () {
      const { date, category, price } = this
      if (this.category === '') {
        console.log('Category is empty')
      } else if (this.price === 0 || isNaN(this.price)) {
        console.log('Value is not set')
      } else {
        this.addPaymentListData({ date, category, price })
      }
    },
    addNew () {
      this.showNewCat = !this.showNewCat
    },
    shortcut () {
      console.log(this.$route.params.category)
      console.log(+this.$route.query.value)
    }
  },
  computed: {
    ...mapGetters(['getPaymentCats'])
  },
  watch: {
    '$route.params': function () {
      this.date = new Date().toLocaleDateString()
      this.category = this.$route.params.category
      this.price = +this.$route.query.value
    }
  },
  mounted () {
    this.date = new Date().toLocaleDateString()
    this.category = this.$route.params.category
    this.price = +this.$route.query.value
    console.log(this.date)
  }

}
</script>

<style lang="scss" module>
  // .form {
  //   height: 180px;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-around;
  // }
  // .shortCuts {
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   margin-top: 15px;
  //   margin-bottom: 15px;
  // }
  // .form__field {
  //   height: 40px;
  //   border-radius: 16px;
  //   padding-left: 20px;
  //   padding-right: 20px;
  // }
  // .form__categoryBlock {
  //   display: flex;
  //   align-items: center;
  // }
  // .saveBtn {
  //   color: white;
  //   background: #22a698;
  // }
</style>
