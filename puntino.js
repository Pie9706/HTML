contatoreElement = document.getElementById("contatore");
incrementaButton = document.getElementById("button1");
decrementaButton = document.getElementById("button2");

incrementaButton.addEventListener("click", function () {
  contatoreElement.textContent = +contatoreElement.textContent + 1;
});

decrementaButton.addEventListener("click", function () {
  if (contatoreElement.textContent > 0) {
    contatoreElement.textContent = +contatoreElement.textContent - 1;
  } else {
    alert("il valore non può essere inferiore a 0");
  }
});
