<template>
  <!-- c-Calculadora -->
  <div class="c-Calculadora" id="Calculadora">
    <div class="c-Calculadora__content">
      <!-- Pantalla -->
      <div class="c-Calculadora__pantalla">
        <div class="c-Calculadora__pantalla__content">{{ display }}</div>
      </div>
      <!-- endof:Pantalla -->

      <!-- Numeros -->
      <div class="c-Calculadora__numeros">
        <div class="c-Calculadora__numero" v-on:click="save_number" data-value="1">1</div>
        <div class="c-Calculadora__numero" v-on:click="save_number" data-value="2">2</div>
        <div class="c-Calculadora__numero" v-on:click="save_number" data-value="3">3</div>
        <div class="c-Calculadora__numero" v-on:click="save_number" data-value="4">4</div>
        <div class="c-Calculadora__numero" v-on:click="save_number" data-value="5">5</div>
        <div class="c-Calculadora__numero" v-on:click="save_number" data-value="6">6</div>
        <div class="c-Calculadora__numero" v-on:click="save_number" data-value="7">7</div>
        <div class="c-Calculadora__numero" v-on:click="save_number" data-value="8">8</div>
        <div class="c-Calculadora__numero" v-on:click="save_number" data-value="9">9</div>
        <div class="c-Calculadora__numero" v-on:click="save_number" data-value="0">0</div>
      </div>
      <!-- endof:Numeros -->

      <!-- Operadores -->
      <div class="c-Calculadora__operadores">
        <button v-on:click="save_operator" v-bind:disabled="isOperationReady()" class="c-Calculadora__operador">+</button>
        <button v-on:click="save_operator" v-bind:disabled="isOperationReady()" class="c-Calculadora__operador">x</button>
        <button v-on:click="execute_operation" v-bind:disabled="!isValidOperation()" class="c-Calculadora__operador c-Calculadora__operador--igual">=</button>
      </div>
      <!-- endof:Operadores -->
      <span class="h-clearfix"></span>
    </div>

  </div>
  <!-- endof:c-Calculadora -->
</template>
<script>
export default {
  data: {
    display: 0,
    number_a: null,
    number_b: null,
    operator: null,
    result: 0
  },
  methods: {
    save_number: function(event){
      var number = event.currentTarget;
      var number_value = number.getAttribute('data-value');

      // Si aún no se ha seleccionado el operador, entonces lo guardamos como primer número
      if (this.operator === null) {
        this.number_a = (this.number_a === null) ? number_value : this.number_a + number_value;

        // Mostramos en pantalla
        this.display = this.number_a;

      } else {
        this.number_b = (this.number_b === null) ? number_value : this.number_b + number_value;

        // Mostramos en pantalla
        this.display = this.number_a + ' ' + this.operator + ' ' + this.number_b;
      }

    },
    save_operator: function(event) {

      if (this.number_a !== null) {
        var operator = event.currentTarget;
        var operator_value = operator.innerText;
        this.operator = operator_value;

        // Mostramos en pantalla
        this.display = this.number_a + ' ' + this.operator;
      }

    },
    execute_operation: function(){
      var number_a = parseInt(this.number_a),
          number_b = parseInt(this.number_b);

      switch (this.operator) {
        case '+':
          this.result = number_a + number_b;
          break;
        case 'x':
          this.result = number_a * number_b;
          break;
      }
      this.display = this.result;
      this.reset();
    },
    isValidOperation: function(){
      return this.number_a !== null && this.number_b !== null;
    },
    isOperationReady: function(){
      return this.number_a !== null && this.number_b !== null && this.operator !== null;
    },
    reset: function(){
      this.number_a = null;
      this.number_b = null;
      this.operator = null;
      this.result = 0;
    }
  }
}
</script>
