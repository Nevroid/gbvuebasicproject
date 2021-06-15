<script>
import { Doughnut } from 'vue-chartjs'

import { mapGetters, mapMutations } from 'vuex'

const options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    animateRotate: true
  }
}

export default {
  extends: Doughnut,
  data () {
    return {
      options,
      chartData: {
        labels: [],
        datasets: []
      }
    }
  },
  methods: {
    ...mapMutations(['gatherChartData']),
    update () {
      this.$data._chart.update()
    }
  },
  computed: {
    ...mapGetters(['getPaymentCats', 'getChartData'])
  },
  mounted () {
    this.gatherChartData()
    this.chartData.labels = this.getPaymentCats
    this.chartData.datasets = this.getChartData
    this.renderChart(this.chartData, this.options)
  }
}
</script>
