function calcularPreco() {
 
 
  var inConsumo = document.getElementById("inconsumo");
  var outValor = document.getElementById("outValor")


  var quilo = 40;
  var consumo = Number(inconsumo.value);


  var valor = (quilo / 1000) * consumo;

  outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2)
  
}

var Calcular = document.getElementById("Calcular");

Calcular.addEventListener("click", calcularPreco);