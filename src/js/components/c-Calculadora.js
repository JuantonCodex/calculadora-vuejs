export default {
  el: '#Calculadora',
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
};

