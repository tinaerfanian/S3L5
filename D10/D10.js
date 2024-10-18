/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS 

//___________________________________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let a = 10;
let b = 20;
let sum = a + b;
console.log(sum); 

// oppure:
 //var c = 10, d = 20;
 //let sum = a + b;
 //console.log(sum);

 //___________________________________________________________________________________________________________________________________________________________________________________


 /* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);
console.log(random); 
//OPPURE:

//let x = Math.round(Math.random() * 20);
//console.log(x); 



//___________________________________________________________________________________________________________________________________________________________________________



/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {};
me.name = "Tina";
me.surname = "Erfanian";
me.age = 29; 

console.log(me);

//OPPURE:
/*let me = {
  name: "Il Tuo Nome",
  surname: "Il Tuo Cognome",
  age: 25 // Inserisci la tua età
};

console.log(me);
*/

//_________________________________________________________________________________________________________________________________________________________________________


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;

console.log(me);

//_____________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["JavaScript", "css", "html"]; 

console.log(me);

//_______________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("C"); 

console.log(me);

//_______________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop(); 

console.log(me);

//_______________________________________________________________________________________________________________________________________________________________________________________

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  return Math.floor(Math.random() * 6) + 1; // Genera un numero casuale tra 1 e 6
}


console.log(dice());
//_______________________________________________________________________________________________________________________________________________________________________________________


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(num1, num2) {
  return Math.max(num1, num2); 
}

console.log(whoIsBigger(95, 29)); 

//OPPURE

/*
function whoIsBigger(num1, num2) {
  return num1 > num2 ? num1 : num2; // Ritorna il numero maggiore
}

console.log(whoIsBigger(95, 29)); 
*/

//_______________________________________________________________________________________________________________________________________________________________________________________


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(epicoders) {
  return epicoders.split(" "); 
}


console.log(splitMe("Mi piace Epicode, a te?")); 


//_______________________________________________________________________________________________________________________________________________________________________________________


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(str, unbooleano) {
  return unbooleano ? str.slice(1) : str.slice(0, -1);
}


console.log(deleteOne("EPICODE", true));  
console.log(deleteOne("epica", false)); 

//OPPURE:

/*
function deleteOne(str, unbooleano) {
  if (unbooleano) {
      return str.substring(1); 
  } else {
      return str.substring(0, str.length - 1); 
  }
}

console.log(deleteOne("EPICODE", true));  
console.log(deleteOne("Tina", false));

//o 


/*
function deleteOne(str, unbooleano) {
  if (unbooleano) {
      return str.substring(true); 
  } else {
      return str.substring(false, str.length - 1); 
  }
}

console.log(deleteOne("EPICODE", true));  
console.log(deleteOne("Tina", false));
*/




//_______________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.
  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(stringa) {
  // Converto la stringa in un array di charatteri
  return Array.from(stringa) 
  //aggiungo un filtro dei charatteri che non sono numeri
      .filter(char => isNaN(char) || char === ' ') 
      .join('');
}

console.log(onlyLetters("sono nata 1995 a Tehran!"));       

//_______________________________________________________________________________________________________________________________________________________________________________________


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(email) {

  const patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  return patternEmail.test(email);
}

console.log(isThisAnEmail("epicode@coders.com")); 
console.log(isThisAnEmail("epicode@.com"));       
console.log(isThisAnEmail("epi@coders"));      
console.log(isThisAnEmail("epicode@admin.co.us")); 

//_______________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 7
*/

function whatDayIsIt() {
  const oggi = new Date();
  const settimana = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  return settimana[oggi.getDay()];
}
console.log(whatDayIsIt()); 


//_______________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
let numero = 6;

const rollTheDices = function(num){
  let sum = 0;
  let array = [];

  for(i=0; i<=num; i++){
    risultato = dice(); 
    sum = sum + risultato;
    array[i]=risultato;
  }


  return {
    somma: sum,
     array2: array
  }

}

const ritorno = rollTheDices(numero)
console.log(ritorno);
//_______________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(date) {

  const giorniTrascorsi = new Date(date);
  const dataAdesso = new Date();
  const differenceInMilliseconds =  dataAdesso - giorniTrascorsi;
  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  
  return differenceInDays; 
}


const giorniPassati = howManyDays("1995-06-12");
console.log(`Giorni passati: ${giorniPassati}`); 





//_______________________________________________________________________________________________________________________________________________________________________________________


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday(birthDate) {
  const birth = new Date(birthDate);
  const toDay = new Date();
  
  return toDay.getDate() === birth.getDate() && toDay.getMonth() === birth.getMonth();
}


const mioCompleanno = "1995-06-12"; 
const isBirthday = isTodayMyBirthday(mioCompleanno);
console.log(`Oggi è il mio compleanno: ${isBirthday}`); 




//_______________________________________________________________________________________________________________________________________________________________________________________


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
      delete obj[prop];
  }
  
  return obj;
}

const movie = {
  Title: 'The Lord of the Rings: The Fellowship of the Ring',
  Year: '2001',
  imdbID: 'tt0120737',
  Type: 'movie',
  Poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg'
};

console.log(deleteProp(movie, 'Year')); 


//_______________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/



function newestMovie(movies) {

  return movies.reduce((latest, current) => {
      return (parseInt(current.Year) > parseInt(latest.Year)) ? current : latest;
  });
}


const latestMovie = newestMovie(movies);
console.log(latestMovie); 

//_______________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies() {
  return movies.length;
}


console.log(countMovies());

//_______________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears() {
  return movies.map(movie => movie.Year);
}


console.log(onlyTheYears());
//_______________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium() {
  return movies.filter(movie => {
    const year = parseInt(movie.Year);
    return year >= 1001 && year <= 2000; 
  });
}


console.log(onlyInLastMillennium())
//_______________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears() {
  return movies.reduce((sum, movie) => {
    return sum + parseInt(movie.Year); 
  }, 0); 
}


console.log(sumAllTheYears()); 

//_______________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(searchString) {
  return movies.filter(movie => 
    movie.Title.toLowerCase().includes(searchString.toLowerCase())
  );
}


console.log(searchByTitle('Lord')); 
console.log(searchByTitle('Avengers'));
//_______________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

// RIGUARDO DOPO



//_______________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
//*
const removeIndex = function(film, numero) {
  console.log(numero);
  if (numero >= 0 && numero < film.length) {
    const newFilm = [...film]; 
    newFilm.splice(numero, 1); 
    return newFilm; 
  } else {
    return null;
  }
}

let numerodapassare = 5;
const ris = removeIndex(movies, numerodapassare);
console.log(ris); 

//____________________________________________________________________________________________________________________________________

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selectContainer() {
  const container = document.getElementById("container");
  
  return container;
}


const continetoreMio = selectContainer();
console.log(continetoreMio);


//____________________________________________________________________________________________________________________________________


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function selectAllTableCells() {
  const tableCells = document.getElementsByTagName("td");
  

  return Array.from(tableCells);
}

const myTableCells = selectAllTableCells();
console.log(myTableCells); 

//____________________________________________________________________________________________________________________________________


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function printTableData() {

  const tdElements = document.querySelectorAll('td');
  tdElements.forEach(td => {
    console.log(td.textContent);
  });
}


//____________________________________________________________________________________________________________________________________

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function addRedBackgroundToLinks() {
  const links = document.getElementsByTagName("a");
  Array.from(links).forEach(link => {
      link.style.backgroundColor = "red";
  });
}


//____________________________________________________________________________________________________________________________________



/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addListItem() {
  
  const myList = document.getElementById("myList");
  const nuovoElemento = document.createElement("li");
  
  nuovoElemento.textContent = "Nuovo elemento"; 

  myList.appendChild(nuovoElemento);
}

//____________________________________________________________________________________________________________________________________


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function svuotaLista() {
  const lista = document.getElementById("myList");
  if (lista) {
      while (lista.firstChild) {
          lista.removeChild(lista.firstChild);
      }
  }
}


svuotaLista();

//____________________________________________________________________________________________________________________________________


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function aggiungiClasseATr() {
 
  const righe = document.getElementsByTagName("tr");
  for (let i = 0; i < righe.length; i++) {
      righe[i].classList.add("test");
  }
}

//____________________________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________________________


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

//____________________________________________________________________________________________________________________________________


function halfTree(height) {
  let result = '';
  for (let i = 1; i <= height; i++) {
     
      result += '*'.repeat(i);
      
      result += '\n';
  }
  return result;
}


console.log(halfTree(3));

//____________________________________________________________________________________________________________________________________


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****


*/

function tree(height) {
  let result = '';
  for (let i = 1; i <= height; i++) {
      result += ' '.repeat(height - i);
      result += '*'.repeat(2 * i - 1);
      result += '\n';
  }
  return result;
}


const height = 3; 
console.log(tree(height));

//____________________________________________________________________________________________________________________________________


/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */


function isItPrime(numero) {
  if (numero <= 1) {
      return false; 
  }
 
  for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
          return false; 
      }
  }
  return true;
}


console.log(isItPrime(2));

//____________________________________________________________________________________________________________________________________
