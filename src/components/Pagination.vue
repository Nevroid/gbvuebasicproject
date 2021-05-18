<template>
  <div :class="[$style.pagination]">
    <span>--</span>
    <span @click="changePage(page)" :class="[$style.page]" v-for="page in getTotalPagesCount" :key="page" :ref="page">{{ page }}</span>
    <span>--</span>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['changePage', 'countTotalPages'])
  },
  computed: {
    ...mapGetters(['getTotalPagesCount'])
  },
  mounted () {
    this.$store.commit('countTotalPages')
  }
}
</script>

<style lang="scss" module>
  .pagination {
    display: flex;
    margin: 16px;
    align-items: center;
  }
  .page {
    font-size: 18px;
    padding: 30px;
  }
</style>
