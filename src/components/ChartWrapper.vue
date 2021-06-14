<template>
  <v-container>
    <Doughnutchart
      ref="skills_chart"
      :chart-data="chartData"
      :options="options">>
    </Doughnutchart>>
  </v-container>
</template>

<script>
import Doughnutchart from './Doughnutchart.vue'
import randomColor from 'randomcolor'

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
      options,
      chartData: {
        labels: ['skill1', 'ssss2', 'ssssss3'],
        datasets: [
          {
            backgroundColor: [randomColor(), randomColor(), randomColor()],
            data: [1, 2, 4]
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>
