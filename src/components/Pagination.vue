<template>
  <div :class="[$style.pagination]">
    <span>--</span>
    <span @click="changePage(page)" :class="[$style.page]" v-for="page in pages" :key="page" :ref="page">{{ page }}</span>
    <span>--</span>
  </div>
</template>

<script>
export default {
  props: {
    pages: Number
  },
  methods: {
    changePage (page) {
      this.$emit('test', page)
    }
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
