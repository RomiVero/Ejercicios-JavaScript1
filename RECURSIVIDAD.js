
/* RECURSIVIDAD */

var countArray = function (array) {
    var suma = 0;
   
    if (array.length === 0) {
      return 0;
    }
   
    if (array.length > 0) {
      for (let i = 0; i < array.length; i++) {
   
        if (Array.isArray(array[i])) {
         for (let j = 0; j < array[i].length; j++) {
   
           if (Array.isArray(array[i][j])) {
             for (let k = 0; k < array[i][j].length; k++) {
               suma = suma + array[i][j][k];
             }
           } else {
             suma = suma + array[i][j];
           }
         } 
        }
        else {
         suma = suma + array[i];
        }
      }
    }
   
    return suma;
   };

var countArray = function (array) {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            sum = sum + countArray(array[i]);


        } else {
            sum = sum + array[i];

        }
    } return sum;
}
var countArray = function (array) {
  // Tu código aca:
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
          sum += countArray(array[i]);
      } else {
          sum += array[i];
      }
  }
  return sum;
}
var countArray = function (array) {
  // Tu código aca:
  let newArr = array.flat(100);
  return newArr.reduce((p, n) => {
      return p + n;
  });
};

var countProps = function (obj) {
  // Tu código aca:
  let count = 0;
  for (let prop in obj) {
      count++; //sumo una propiedad
      if (typeof obj[prop] === 'object' && !Array.isArray(obj[prop])) { //no es un arreglo ni !objeto
          count += countProps(obj[prop]); //llamada recursiva
      }
  }
  return count;
};

function direcciones(laberinto, direccion = '') {    //defino parametro predeterminado 'direccion' en NULL 
    if (!laberinto) return direccion                 // si no hay laberinto, retornamos direccion, que puede ser NULL

    for (const prop in laberinto) {  // usamos el bucle 'for in' para recorrer propiedades de objetos, iterando cada una de las propiedades 
        // y sus valores. Dentro de este código la variable "prop" contiene la propiedad actual en cada uno 
        // de los pasos de la iteración.
        if (laberinto[prop] == 'destino') return direccion + prop   //si en esta prop encontró 'destino', devolverla junto con 'direccion'

        if (typeof laberinto[prop] == 'object') { //preguntamos si la propiedad contiene un objeto
            direccion += prop  //a 'direccion' le agregamos este objeto contenido en la prop
            return direcciones(laberinto[prop], direccion)  //y para este caso que llegamos a una propiedad que contiene otro objeto, usamos recursion
        }
    }
    return direccion  //retornamos el string con los movimientos (propiedades que fuimos guardando)
}

function secuenciaHenry(array, n) {
  // Tu código aca:
  if (n < 0) {
    return false;
  }

  if (n <= 2) {  //pregunto si es 0, 1 o 2
    if (typeof array[n] === 'string') {
      return array[n].length;
    } else {
      return array[n];
    }
  }else {
    return (secuenciaHenry(array, n-1) + secuenciaHenry(array, n-2) + secuenciaHenry(array, n-3) ) *2;
  }
 
}
function secuenciaHenry(array, n) {
  // Tu código aca:
  if (n < 0) {
    return false;
  }

  if (n <= 2) {
    if (typeof array[n] === 'string') {
      return array[n].length;
    } else {
      return array[n];
    }
  }else {
    return ( secuenciaHenry(array, n-1) + secuenciaHenry(array, n-2) + secuenciaHenry(array, n-3) ) *2;
  }
 
}


var allAnagrams = function (string, array, index) {
    if(string.length === 0) return [''];
      var result = {};
      string.split('').forEach(function(letter,i){
            var remainingLetters = string.slice(0,i) + string.slice(i+1);
   
             allAnagrams(remainingLetters).forEach(
                 function(anagram){
             result[letter+anagram] = true;
   });
   });
          return Object.keys(result);
          
   }
