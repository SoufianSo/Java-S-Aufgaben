console.log("it works");
function intro2(paramName) {
  var Name = "SuperCoder:in";
  console.log("Hi " + Name + ". Mein Name ist " + paramName + ".");
}

// Funktion mit verschiedenen Argumenten aufrufen
intro2("Alice");
intro2("Bob");
intro2("Charlie");

function intro3(name) {
  const logo = "supercode:in";
  console.log("Hi" + logo + ". meine name ist " + name + ".");
}
intro3("soufian");
intro3("souilm");
intro3("x");
//----------------------------------------------------------------------
function erste(A1) {
  const zweite = "xxx";
  console.log("AAA" + zweite + "BBB" + A1);
}
erste("STEHT IN DER ERSTE KOMMENTAR");
erste("STEHT IM ZWEITEN KOMMENTAR");
erste("STEHT IM dritten KOMMENTAR");
//---------------------------------------------------------------
function multiply() {
  const result = document.body.querySelector(".result");
  const inputNumber = document.body.querySelector(".number");

  result.innerHTML = inputNumber.value *= 2;
}

multiply();
//--------------------------------------------------------
function birthdayDate() {
  const inputDate = document.body.querySelector(".date");
  const currentYear = new Date().getFullYear();
  const output = document.body.querySelector(".output");

  let age = 0;

  if (Number(inputDate.value) !== 0) {
    age = currentYear - inputDate.value;

    output.innerHTML = `Du bist ${age} Jahre alt`;
  }
}

birthdayDate();
