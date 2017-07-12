var Calculadora = {
  init: function(){
    var myApp = this;

    // Creamos nuestro objeto Vue principal
    var calculadora = new Vue({
      el: '#Calculadora',
      data: {
        numero_a: 0,
        numero_b: 0,
        resultado: 0
      },
      methods: {
        sumar: function(){
          this.resultado = parseInt(this.numero_a) + parseInt(this.numero_b);
        }
      }
    });

  }
}

Calculadora.init();
