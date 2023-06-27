/* INVERTIR LISTA */
function reverse(head, k) {
    let prev = null;
    let next = null;
    let current = head;
    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
/*  MERGE  */
var mergeLinkedLists = function(linkedListOne, linkedListTwo){
    // Tu código aca:
    if (!linkedListOne) {
      return linkedListTwo
  } else if (!linkedListTwo) {
      return linkedListOne;
  }
  
  let mergedHead = null;
  if (linkedListOne.data <= linkedListTwo.data) {
      mergedHead = linkedListOne;
      linkedListOne = linkedListOne.next;
  } else {
      mergedHead = linkedListTwo
      linkedListTwo = linkedListTwo.next;
  }
  
  let mergedTail = mergedHead;
  
  while (linkedListOne && linkedListTwo) {
      let temp = null;
      if (linkedListOne.data <= linkedListTwo.data) {
          temp = linkedListOne;
          linkedListOne = linkedListOne.next;
      } else {
          temp = linkedListTwo;
          linkedListTwo = linkedListTwo.next;
      }
  
      mergedTail.next = temp;
      mergedTail = temp;
  }
  
  if (linkedListOne) {
      mergedTail.next = linkedListOne;
  } else if (linkedListTwo) {
      mergedTail.next = linkedListTwo;
  }
  
  return mergedHead;
  
  }

/* REVERSE */
LinkedList.prototype.reverse = function () {

    let next = null;
    let prev = null;
    let current = this.head;
    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next
    }
    return prev;
}
/* INSERTAR COLA */
function insertNodeAtTail(head, data) {
    let newNode = new Node(data)
    if (!head) {
        head = newNode
        return head
    }
    let current = head
    while (current.next) {
        current = current.next
    }
    current.next = newNode
    return head
}

/* COUNT NODES */

function getCountRec(node) {
    // Base case
    if (node == null) {
        return 0;
    }
    return 1 + getCountRec(node.next);
}

function getCount() {
    return getCountRec(head);
}
// VALOR DE INDICE EN LISTA 

function GetNth(index) {
    var current = head;
    var count = 0;
    /*
     index of Node we are currently looking at
                     */
    while (current != null) {
        if (count == index)
            return current.data;
        count++;
        current = current.next;
    }
}

/* ordenada linked list */
OrderedLinkedList.prototype.add = function (val) {
    if (!this.head) {//nos aseguramos que la lista esté vacia 
        this.head = val;
        return
    }
    if (this.head.next == null) { //por si solo hay un elemento
        if (this.head.value < val.value) {
            val.next = this.head;
            this.head = val;
        } else {
            this.head.next = val;
        }
        return
    }
    let current = this.head;
    while (current.next) {
        if (this.head == current) {//en el caso en el que current sea igual al head
            if (current.value < val.value) {
                val.next = this.head;
                this.head = val;
                return
            }
        }
        if (current.next.value < val.value) {//esta es la comparacion que hace normalmente desde el segundo nodo de la lista hasta que termina
            val.next = current.next;
            current.next = val;
            return
        }
        current = current.next;//avanzamos al siguiente nodo
    }
    current.next = val;//esto solo lo hace cuando current llega al final y no encuentra ninguno menor que el valor ingresado
}

var orderLinkedList = function (linkedList) {
    var array = [];
    var current = linkedList.head;
    var newList = new LinkedList();
  
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    array.sort(function(a, b) {
      return a - b;
    });
  
    for (let i = 0; i < array.length; i++) {
      newList.add(array[i]);
    }
  
    return newList;
  }
/* FUNCION PRINT */
OrderedLinkedList.prototype.print = function () {
    let print = 'head'
    let pointer = this.head
    while (pointer) {
        print += ' --> ' + pointer.value
        pointer = pointer.next;
    }
    print += ' --> null'
    return print
}


LinkedList.prototype.size = function(){
    if (!this.head) return 0;
  
    let current =  this.head;
    let counter = 1;
  
    while (current.next) {
      counter ++
      current = current.next;
    }
    return counter;
  } 
LinkedList.prototype.size = function () {
    // Tu código aca:
    var current = this.head;
    var counter = 1;
    if (current === null) {
      return 0;
    } 
  
    while (current.next !== null) {
        counter++;
        current = current.next;
    }
    
  
    return counter;
  }


  LinkedList.prototype.removeFromPos = function (pos) {
    // Tu código aca:
     let current = this.head;
     var valorRemovido = null;
     var valorAnterior = null;
     var valorSiguiente = null;
     
     if (pos < 0 || this.head === null || pos > this.size()) {
       return false;
     }
  
     if (pos !== 0) {
      
      for (let i = 0; i < pos; i++) {
        valorAnterior = current;
        current = current.next;
        valorRemovido = current.value;
        valorSiguiente= current.next;
      }
      valorAnterior.next = valorSiguiente;
      return valorRemovido;
     } else { 
        valorRemovido = current.value;
        valorSiguiente = current.next;
        this.head = valorSiguiente;
        return valorRemovido;
      }
  }


  LinkedList.prototype.changeNotNumbers = function () {
    // Tu código aca:
    let count = 0;
    let current = this.head;
    while (current) {
        if (isNaN(Number(current.value))) { //pregunto si es un []
            count++;
            current.value = 'Kiricocho';
        }
        current = current.next;
    }
    return count;

}



PENDIENTES
OrderedLinkedList.prototype.add = function (val) {

}

OrderedLinkedList.prototype.removeHigher = function () {

}
LinkedList.prototype.switchPos = function(pos1, pos2){
    
  }

