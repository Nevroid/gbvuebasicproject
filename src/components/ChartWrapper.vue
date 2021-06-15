<template>
  <v-container>
    <v-card v-if="chartFlag" width='300'>
      <Doughnutchart
        ref="skills_chart"
        :chart-data="chartData"
        :options="options">
      </Doughnutchart>
      <v-btn @click="showChart">Hide Chart</v-btn>
      <v-btn @click="test">Test</v-btn>
    </v-card>
    <v-btn @click="showChart" v-if="!chartFlag">Show Chart</v-btn>
  </v-container>
</template>

<script>
import Doughnutchart from './Doughnutchart.vue'
import { mapGetters, mapMutations } from 'vuex'

const options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    animateRotate: true
  }
}

export default {
  components: { Doughnutchart },
  data () {
    return {
      chartFlag: false,
      options,
      chartData: {
        labels: [],
        datasets: []
      }
    }
  },
  methods: {
    ...mapMutations(['gatherChartData']),
    showChart () {
      this.chartFlag = !this.chartFlag
    },
    test () {
      this.gatherChartData()
      console.log(this.chartData)
    }
  },
  computed: {
    ...mapGetters(['getPaymentCats', 'getChartData'])
  },
  mounted () {
    this.gatherChartData()
    this.chartData.labels = this.getPaymentCats
    this.chartData.datasets = this.getChartData
  }
}
</script>

<style>

</style>
