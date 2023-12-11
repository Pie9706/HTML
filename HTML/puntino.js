function sottrai() {
  document.getElementById("contatore").innerHTML;
  document.getElementById("input").value;
  document.getElementById("contatore").innerHTML =
    document.getElementById("contatore").innerHTML +
    document.getElementById("input").value;
}
function aggiungi() {
  document.getElementById("contatore").innerHTML;
}
document.getElementById("button2").addEventListener("click", sottrai);
document.getElementById("button1").addEventListener("click", aggiungi);

document.getElementById("button2").addEventListener("click", function () {
  contatoreElement.textContent =
    +contatoreElement.textContent + input.textContent;
});
