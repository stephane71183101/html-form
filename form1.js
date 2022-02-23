 // ----------------- Erste Version in Bearbeitung vor der neuen Version
  
 /*
  let firstName = document.getElementById("firstName").value;
  if(!firstName) {
    alert("Das Vorname-Feld ausfüllen, bitte.");
    return false;
  }

  let lastName = document.getElementById("lastName").value;
  if(!lastName) {
    alert("Das Nachname-Feld ausfüllen, bitte.");
    return false;
  }
  

  //Daten ins Session Storage speichern

  sessionStorage.setItem("firstName", document.getElementById("firstName").value);
  sessionStorage.setItem("lastName", document.getElementById("lastName").value);
  sessionStorage.setItem("age", document.getElementById("age").value);
  sessionStorage.setItem("adress", document.getElementById("adress").value);
  */
 
   // ----------------- Neue Version (mit Ruslan und Chris)

  function myFunction() {
    if (!validateRequiredList(["firstName", "lastName", "age", "adress"])) return false;
}

function validateRequiredList(inputIDs) {
  for (let i = 0; i < inputIDs.length; i++) {
    let inputID = inputIDs[i];

    if (!validateRequired(inputID)) return false;
    sessionStorage.setItem(inputID, document.getElementById(inputID).value);
  }
  return true;
}

function validateRequired(inputID) {
  let value = document.getElementById(inputID).value;
  if(!value) {
    alert(`Bitte fülle da Feld "${inputID}" aus.`);
    return false;
  }
  return true;
}