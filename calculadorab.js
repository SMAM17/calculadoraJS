const escribirCero = () => {
    //crear una variable en javascrip y almaceno el elemento html llamado resultado
    let resultado = document.getElementById("salida");
    resultado.value += 0;
    return resultado;
  };
  function escribirUno() {
    //crear una variable en javascrip y almaceno el elemento html llamado resultado
    let resultado = document.getElementById("salida");
    resultado.value += 1;
    return resultado;
  }
  function escribirDos() {
    let resultado = document.getElementById("salida");
    resultado.value += 2;
    return resultado;
  }
  function escribirTres() {
    let resultado = document.getElementById("salida");
    resultado.value += 3;
    return resultado;
  }
  function escribirCuatro() {
    let resultado = document.getElementById("salida");
    resultado.value += 4;
    return resultado;
  }
  function escribirCinco() {
    let resultado = document.getElementById("salida");
    resultado.value += 5;
    return resultado;
  }
  function escribirSeis() {
    let resultado = document.getElementById("salida");
    resultado.value += 6;
    return resultado;
  }
  function escribirSiete() {
    let resultado = document.getElementById("salida");
    resultado.value += 7;
    return resultado;
  }
  function escribirOcho() {
    let resultado = document.getElementById("salida");
    resultado.value += 8;
    return resultado;
  }
  function escribirNueve() {
    let resultado = document.getElementById("salida");
    resultado.value += 9;
    return resultado;
  }
  
  function suma() {
    let resultado = document.getElementById("salida");
    resultado.value += "+";
    return resultado;
  }
  function resta() {
    let resultado = document.getElementById("salida");
    resultado.value += "-";
    return resultado;
  }
  
  function borrar() {
    let resultado = document.getElementById("salida");
    resultado.value = "";
    return resultado;
  }
  function resultado() {
    let resultado = document.getElementById("salida");
    resultado.value = eval(resultado.value);
    return resultado;
  }
  function multiplicar() {
    let resultado = document.getElementById("salida");
    resultado.value += "*";
    return resultado;
  }
  function dividir() {
    let resultado = document.getElementById("salida");
    resultado.value += "/";
  }
  function potencia() {
    let resultado = document.getElementById("salida");
    resultado.value = Math.pow(resultado.value, 2);
  }
  function raiz() {
    let resultado = document.getElementById("salida");
    resultado.value = Math.sqrt(resultado.value);
  }
  function raizCubica() {
    let resultado = document.getElementById("salida");
    resultado.value = Math.cbrt(resultado.value);
  }
  function PI() {
    let resultado = document.getElementById("salida");
    resultado.value += Math.PI;
  }
  function porcentaje() {
    let resultado = document.getElementById("salida");
    resultado.value = Math.floor(resultado.value * 10) / 100;
  }