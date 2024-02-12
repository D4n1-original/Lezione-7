// IF / ELSE

// if (condizione) {
//     console.log(" codice da eseguire se la condizione è soddisfatta");
// } else {
//     console.log("codice da eseguire se la condizione non è soddisfatta");
// }

//ES.1 

let num = 15

if (num > 10) {
    console.log("il numero è maggiore di 10");
} else {
    console.log("il numero è minore di 10");
}

// ES. 2 -> Else if

let compito = {nome: "Mario", voto: 9}
if (compito.voto >= 8) {
    console.log( compito.nome + " ha passato l'esame. Voto: Ottimo");
} else if (compito.voto >= 7){
    console.log( compito.nome + " ha passato l'esame. Voto: Buono");
} else if (compito.voto >= 6){
    console.log( compito.nome + " ha passato l'esame. Voto: Sufficiente");
} else {
    console.log( compito.nome + " non ha passato l'esame. Voto: Insufficiente");
}

// ES. 3 -> condizioni logiche 

let user = { nome: "Mario", eta: 10, policy: true, haWifi:false, haDatiMobili:true, login:false}
if (user.eta >= 18 && user.policy) {  //AND
    console.log("Accesso Consentito");
} else {
    console.log("Accesso Negato");
}

if (user.haWifi || user.haDatiMobili) { //OR
    console.log(user.nome + " ha accesso a internet");
}

if (!user.login) { //NOT
    console.log(user.nome +" non è loggato, mostra form di registrazione");
} else {
    console.log(user.nome + " è loggato, mostra la dashboard");
}

//ES. 4 -> Operatore ternario

let sconto = false
let prezzo = sconto ? 79 : 99
console.log(prezzo);

// ---------------------------------------------

// CICLO FOR

for (let i = 0; i <= 5; i++) {
    console.log(i)
}

let frutta = ["mango","mela", "pera", "pesca", "arancia","mango"]
console.log(frutta.length);
console.log(frutta[0])
for (let i= 0; i < frutta.length; i++) {
     console.log(frutta[i]);
 }

 let numArray = [10, 20, 30, 40, 50]
 console.table (numArray)
 console.log(numArray.length);
 let sommaArray = 0

 for (let i = 0; i < numArray.length; i++) {
    sommaArray += numArray[i]
 }
 console.log("la somma è " + sommaArray);

// Break

let fruttoCercato = "mango"
let trovato = false

for (let i=0 ; i < frutta.length ; i++) {
    if (frutta[i] === fruttoCercato) {
        i++
        console.log(fruttoCercato + " è stato trovato alla posizione " +i);
        trovato=true
        break // esce dal loop
    }
}
if (!trovato) {
    console.log(fruttoCercato + " non trovato");
}

// Continue

for (let i = 1 ; i < 10 ; i++) {
    if (i === 5) {
        continue
    }
    console.log (i)
    
}

let counter = 1
while (counter <= 10) {
    console.log(counter);
    counter++
}