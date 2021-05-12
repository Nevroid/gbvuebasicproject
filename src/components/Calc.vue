<template>
  <div class="calc">
    <input v-model.number="operand1" />
    <input v-model.number="operand2" />
    = {{ result }}
    <div>
      <button v-for="op in operations" :key="op" @click="calculate(op)"> {{ op }} </button>
    </div>
    <div>
      <input type="checkbox" id="keyboard-trigger" v-model="checked">
      <label for="keyboard-trigger">Клавиатура</label>
    </div>
    <div v-if="checked">
      <div>
        <input type="radio" name="fildSelect" id="operand1" value="1" v-model="picked">
        <label for="operand1">Операнд 1</label>
        <input type="radio" name="fildSelect" id="operand2" value="" v-model="picked">
        <label for="operand2">Операнд 2</label>
      </div>
      <div>
      <button v-for="key in keyboard" :key="key" @click="sendKey(key)"> {{ key }} </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    operand1: 0,
    operand2: 0,
    result: 0,
    operations: ['+', '-', '/', '*', '**', 'int'],
    keyboard: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '<--'],
    checked: false,
    picked: '1'

  }),
  methods: {
    calculate (operation) {
      switch (operation) {
        case '+':
          this.result = this.operand1 + this.operand2
          break
        case '-':
          this.result = this.operand1 - this.operand2
          break
        case '/':
          this.result = this.operand1 / this.operand2
          break
        case '*':
          this.result = this.operand1 * this.operand2
          break
        case '**':
          this.result = this.operand1 ** this.operand2
          break
        case 'int':
          this.result = (this.operand1 - (this.operand1 % this.operand2)) / this.operand2
          break
      }
    },
    sendKey (key) {
      if (this.picked) {
        switch (key) {
          case '<--': {
            const stringOperand = this.operand1.toString()
            this.operand1 = Number(stringOperand.substring(0, stringOperand.length - 1))
            break
          }
          default:
            this.operand1 = Number('' + this.operand1 + key)
            break
        }
      } else {
        switch (key) {
          case '<--': {
            const stringOperand = this.operand2.toString()
            this.operand2 = Number(stringOperand.substring(0, stringOperand.length - 1))
            break
          }
          default:
            this.operand2 = Number('' + this.operand2 + key)
            break
        }
      }
    }
  },
  name: 'Calc',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
