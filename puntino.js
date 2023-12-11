function sottrai() {
  console.log("sottrai");
}
function aggiungi() {
  console.log("aggiungi");
}
document.getElementById("button2").addEventListener("click", sottrai);
document.getElementById("button1").addEventListener("click", aggiungi);

document.getElementById("button2").addEventListener("click", function () {
  contatoreElement.textContent =
    +contatoreElement.textContent + input.textContent;
});
