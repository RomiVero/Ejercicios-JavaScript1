/* SORT */

// Ejercicio 9
// Implementar la funcion 'primalityTest' que dado un valor numerico entero
// debe de retornar true or false dependiendo de si este es primo o no.
// Puede que este es un algoritmo que ya hayan implementado pero entenderan
// que es un algoritmo que segun la implementacion puede llegar a ser muy costoso
// para numeros demasiado grandes, asi que vamos a implementarlo mediante un metodo
// derivado de Trial Division como el que se muestra aca:
// https://en.wikipedia.org/wiki/Primality_test
// Si bien esta no es la mejor implementacion existente, con que uds puedan 
// informarse sobre algoritmos, leerlos de un pseudocodigo e implemnterlos alcanzara

function primalityTest(n) {
    if (n <= 3) return n > 1;
    
    if ((n % 2 === 0) || (n % 3 === 0)) return false;
    
    let count = 5;
    
    while (Math.pow(count, 2) <= n) {
      if (n % count === 0 || n % (count + 2) === 0) return false;
      
      count += 6;
    }
    
    return true;
  }

/* QUICK SORT DE MAYOR A MENOR */
  function quickSort(array) {
    if (array.length < 1) return [];
    let pivot = array[0];
    let izq = [];
    let der = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            izq.push(array[i]);
        } 
        else {
            der.push(array[i]);
        }
    }
    return [].concat(quickSort(der), pivot, quickSort(izq));

}

/* OTRA BUSQUEDA */

var specialSort = function (array, firstOrd, secondOrd) {

    // Tu código aca:
    if (firstOrd) return array.sort((a, b) => a[firstOrd] - b[firstOrd])
  
  
    if (secondOrd) return array.sort((a, b) => a[secondOrd] - b[secondOrd])
    // var resultadoSecondOrd= array.sort((a,b)=>a.review-b.review)
  
  }

  