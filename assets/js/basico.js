// variables

let mensaje = "hola mundo..";

mensaje = "hola gente...";

mensaje = "hola que tal...";

const mensaje2 = "hola mundo 2 ...";

console.log("Variable let");
console.log(mensaje);

console.log("Variable 2");
console.log(mensaje2);

// tipos de variables

const var1 = 5;

const var5 = 5.5;

const var2 = 'hola que tal "Manchas" ';

const var3 = false;
const var4 = true;

const var6 = null;
const var7 = undefined;

// objetos

const carro = {
  marca: "Toyota",
  moverse: function () {
    console.log("el carro se mueve");
  },
};

const lista1 = [1, 2, 3, 4, 5];
const lista2 = ["jaime", "manchas", "milthon"];
const lista3 = [
  {
    nombre: "jaime",
  },
  {
    nombre: "manchas",
  },
  {
    nombre: "milthon",
  },
];

// funciones

const mostrar_alerta = function () {
  alert("Soy una alerta");
};

const mostrar_suma = () => {
  console.log(5 + 10);
};

// condicionales

if (false) {
  mostrar_alerta();
} else if (5 < 3) {
  mostrar_suma();
} else {
  console.log("resultado negativo");
}

// bucle

let contador = 0;

while (contador < 0) {
  console.log(contador);
  contador = contador + 1;
}

let contador_do = 0;

do {
  console.log(contador_do);
  contador_do = contador_do + 1;
} while (contador_do < 0);

for (let contador_for = 0; contador_for == 5; contador_for = contador_for + 1) {
  console.log(contador_for);
}
