var forma = document.getElementById("forma"),
  salidaTortas = document.getElementById("salidaTortas"),
 tortas = document.getElementsByName("tortas"),
 totalSpan = document.getElementById("total");
forma.addEventListener("click", function () {
  var tortasSeleccionadas = [],
   precioTotal = new BigNumber(0); 
  for (var i = 0, total = tortas.length; i < total; i++) {
    var torta = tortas[i];
    if (torta.checked) {
      tortasSeleccionadas.push(torta.value);
      precioTotal = precioTotal.plus(new BigNumber(torta.getAttribute("data-precio")));
    }
  }
  salidaTortas.textContent = tortasSeleccionadas.join(", ");
  totalSpan.textContent = precioTotal.toFixed(2);
});

