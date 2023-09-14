/* Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

Consigli:

- Ricordiamoci di inizializzare la variabile di contatore prima dell’inizio del ciclo while

- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all’interno ciclo while 

*/

//1.creiamo la lista della spesa
const listaSpesa = ['detersivi','salumi','carne','formaggi','latte',
'pasta', 'verdura','erba', 'vaso', 'pianta'];

//2. creiamo la variabile del messaggio di stampa degli elemnti della lista 
let stampaList = document.getElementById('stampa') 

//a. creiamo la variabile oggettoSpesa per assegnare successivamente gli elemnti all'intento della nostra array 
let oggettoSpesa ;
//b. creiamo la nostravariabile contatore 
let contOggettoList = 0
//3. la condizione è se il nostro contatore è minore della listaSpesa allora
while(contOggettoList < listaSpesa.length){
//a. assegnamo l'elemento dell'array a oggettoSpesa
  oggettoSpesa = listaSpesa[contOggettoList]
//b. Stampiamo in html gli elementi tramite templete literal
  stampaList.innerHTML += `<li>${oggettoSpesa}</li>`;
//c. Incrementiamo il contatore
  contOggettoList++; 
}
//fine condizione

  




