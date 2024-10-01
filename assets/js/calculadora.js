const resultado = document.getElementById("resultado");
let total = 0;

let operacion = "";

const poner_valor = function (numero) {
  if (total == 0) {
    total = Number(numero);
  } else {
    if (operacion == "+") {
      total = total + Number(numero);
    }

    if (operacion == "-") {
      total = total - Number(numero);
    }

    if (operacion == "*") {
      total = total * Number(numero);
    }

    if (operacion == "/") {
      total = total / Number(numero);
    }
  }
  resultado.innerText = resultado.innerText + String(numero);
};

const poner_simbolo = function (simbolo) {
  const ultimo_caracter = resultado.innerText[resultado.innerText.length - 1];
  if (["+", "-", "*", "/"].includes(ultimo_caracter)) {
    const valor_actual = resultado.innerText.slice(
      0,
      resultado.innerText.length - 1
    );
    resultado.innerText = valor_actual + simbolo;
  } else {
    resultado.innerText = resultado.innerText + simbolo;
  }
  operacion = simbolo;
};

const limpiar = function () {
  resultado.innerText = "0";
  total = 0;
};

const ejecutar = function () {
  resultado.innerText = total;
};
