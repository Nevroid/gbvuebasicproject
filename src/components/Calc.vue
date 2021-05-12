<template>
  <div class="calc">
    <input v-model.number="operand1" />
    <input v-model.number="operand2" />
    = {{ result }}
    <div class="operations">
      <button class="button" v-for="op in operations" :key="op" @click="calculate(op)"> {{ op }} </button>
    </div>
    <div class="keyboardTrigger">
      <input type="checkbox" id="keyboard-trigger" v-model="checked">
      <label for="keyboard-trigger">Клавиатура</label>
    </div>
    <div class="selectOperand" v-if="checked">
      <div>
        <input type="radio" name="fildSelect" id="operand1" :value="true" v-model="picked">
        <label for="operand1">Операнд 1</label>
        <input type="radio" name="fildSelect" id="operand2" :value="false" v-model="picked">
        <label for="operand2">Операнд 2</label>
      </div>
      <div class="keyboard">
      <button class="button" v-for="key in keyboard" :key="key" @click="sendKey(key)"> {{ key }} </button>
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
    picked: true

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
        this.operand1 = this.applyKey(key, this.operand1)
      } else {
        this.operand2 = this.applyKey(key, this.operand2)
      }
    },
    applyKey (key, operand) {
      switch (key) {
        case '<--': {
          const stringOperand = operand.toString()
          operand = Number(stringOperand.substring(0, stringOperand.length - 1))
          return operand
        }
        default:
          operand = Number('' + operand + key)
          return operand
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
.operations {
  margin-top: 10px;
}
.button {
  font-size: 18px;
}
.keyboardTrigger {
  margin-top: 20px;
}
.selectOperand {
  margin-top: 20px;
}
.keyboard {
  margin-top: 20px;
}
</style>
