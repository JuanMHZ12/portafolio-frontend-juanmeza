const form = document.getElementById("imcForm");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  if (!peso || !altura || peso <= 0 || altura <= 0) {
    resultado.textContent = "Por favor, ingresa un peso y una altura válidos.";
    return;
  }

  const imc = peso / altura ** 2;
  let categoria = "";

  if (imc < 18.5) {
    categoria = "Bajo peso";
  } else if (imc < 25) {
    categoria = "Peso normal";
  } else if (imc < 30) {
    categoria = "Sobrepeso";
  } else {
    categoria = "Obesidad";
  }

  resultado.textContent = `Tu IMC es ${imc.toFixed(2)} - ${categoria}`;
});