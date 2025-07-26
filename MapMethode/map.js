//De .map() methode maakt een nieuwe array aan door een functie toe te passen op elk element van de originele array.
// 🔧 Je verandert elke waarde, en je krijgt een nieuwe array terug (de originele blijft ongewijzigd).

const students = ["batman,superman,spiderman,hulk"];

const studentsUpperCase = students.map(upperCase);
console.log(studentsUpperCase);


function upperCase(element){
    return element.toUpperCase();
}