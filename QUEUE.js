 Queue

function Queue() {
    this.array = [];
  }
  Queue.prototype.enqueue = function enqueue(items) {return this.array.push(items)};
  Queue.prototype.dequeue = function dequeue() { return this.array.shift()};
  Queue.prototype.size = function size() { return this.array.length};
  Queue.prototype.empty = function empty(){return this.array.length == 0;};

  var controlAcces = function (queue, event) {
    // Tu código aca:
  
    var array = [...queue.array];
    var newArray = [];
    var numTicketsArray = [];
  
  
    array.forEach(persona => {
      if (persona.age >= 18) {
        if (persona.ticket.event === event ) {
          var include = numTicketsArray.includes(persona.ticket.number);
          if (!include) {
            newArray.push(persona.fullname);
            numTicketsArray.push(persona.ticket.number);
          }
        }
      }
   });
  
   return newArray
  };


  
var cardGame = function(playerOneCards, playerTwoCards){
  // Tu código aca:
  // Vida del castillo del jugador 1
  var castleOne = 100

  // Vida del castillo del jugador 2
  var castleTwo = 100

  // Carta de ataque del jugador 1
  var attackCardOne = null

  // Carta de ataque del jugador 2
  var attackCardTwo = null

  //Carta de defensa del jugador 1
  var defenseCardOne = null

  //Carta de defensa del jugador 2
  var defenseCardTwo = null

  while(playerTwoCards.size() > 0){
    // Guardo la carta de ATAQUE del jugador 1, la saco de la QUEUE con la funcion dequeue() y se almacena en attackCardOne (se encuentra en el archivo DS.js)
    attackCardOne = playerOneCards.dequeue()

    // Guardo la carta de DEFENSA del jugador 1, la saco de la QUEUE con la funcion dequeue() y se almacena en defenseCardOne 
    defenseCardOne = playerOneCards.dequeue()

    // Guardo la carta de ATAQUE del jugador 2, la saco de la QUEUE con la funcion dequeue() y se almacena en attackCardTwo
    attackCardTwo = playerTwoCards.dequeue()

    // Guardo la carta de DEFENSA del jugador 2, la saco de la QUEUE con la funcion dequeue() y se almacena en defenseCardTwo 
    defenseCardTwo = playerTwoCards.dequeue()

    // Ataque al castillo del Jugador 2. Si el ATAQUE de la carta del jugador 1 menos la DEFENSA del jugador 2 
    // es mayor a cero, entonces hizo daño y lo resto de la vida del jugador 2
    if((attackCardOne.attack - defenseCardTwo.defense) > 0)
      castleTwo -= attackCardOne.attack - defenseCardTwo.defense
    
    // Ataque al castillo del Jugador 1. Si el ATAQUE de la carta del jugador 2 menos la DEFENSA del jugador 1
    // es mayor a cero, entonces hizo daño y lo resto de la vida del jugador 2
    if((attackCardTwo.attack - defenseCardOne.defense) > 0)
      castleOne -= attackCardTwo.attack - defenseCardOne.defense
  }
  
  // Si las vidas de los castillos del jugador 1 y del jugador 2 son iguales es un empate.
  if(castleOne === castleTwo )
    return 'TIE'

  // Si la vida del castillo del jugador 1 es menor a cero gana el Jugador 2!
  if(castleOne <= 0)
    return 'PLAYER TWO'
  
  // Si la vida del castillo del jugador 2 es menor a cero gana el Jugador 1!
  if(castleTwo <= 0)
    return 'PLAYER ONE'

  // Si se acaban las cartas y ninguno de las vidas de los castillos es menor a cero entonces
  // Comparo la vida de los castillos... el que tenga mas vida gana!
  if (castleTwo > castleOne)
    return 'PLAYER TWO'
  else
    return 'PLAYER ONE'
}

var mergeQueues = function (queueOne, queueTwo) {
  // Tu código aca:
  let queue = new Queue();
  while (queueOne.size()||queueTwo.size()){
      let firstElement = queueOne.dequeue();
      let secondElement = queueTwo.dequeue();
      if (firstElement)queue.enqueue (firstElement);
      if (secondElement)queue.enqueue (secondElement);
  }
  return queue;
}
  