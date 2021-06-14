<template>
  <div>
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
