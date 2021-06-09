<template>
  <div :class="[$style.button]" @click="onClick">{{ msg }}</div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data () {
    return {
      btnState: false
    }
  },
  methods: {
    onClick () {
      this.btnState = !this.btnState
      this.$emit('clicked', this.btnState)
    }
  }
}
</script>

<style lang="scss" module>
.button {
  margin: 24px 0 24px 0;
  width: 200px;
  align-items: center;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  justify-content: center;
  height: 25px;
  font-size: 18px;
  color: white;
  background: #22a698;
}

</style>
