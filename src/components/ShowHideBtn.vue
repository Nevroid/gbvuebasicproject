<template>
  <v-btn
    @click="onClick"
    color='teal'
    dark
  >
  <slot></slot>
  <v-icon dark size='1.2em'>mdi-plus</v-icon>
  </v-btn>
</template>

<script>
export default {
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
// .button {
//   margin: 24px 0 24px 0;
//   width: 200px;
//   align-items: center;
//   border-radius: 8px;
//   padding: 8px;
//   display: flex;
//   justify-content: center;
//   height: 25px;
//   font-size: 18px;
//   color: white;
//   background: #22a698;
// }

</style>
