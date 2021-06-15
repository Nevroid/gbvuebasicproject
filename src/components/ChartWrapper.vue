<template>
  <v-container>
    <v-card v-if="chartFlag" width='300'>
      <Doughnutchart
        ref="skills_chart">
      </Doughnutchart>
      <v-btn @click="showChart">Hide Chart</v-btn>
    </v-card>
    <v-btn @click="showChart" v-if="!chartFlag">Show Chart</v-btn>
  </v-container>
</template>

<script>
import Doughnutchart from './Doughnutchart.vue'

export default {
  components: { Doughnutchart },
  data () {
    return {
      chartFlag: false
    }
  },
  methods: {
    showChart () {
      this.chartFlag = !this.chartFlag
    }
  }
}
</script>

<style>

</style>
