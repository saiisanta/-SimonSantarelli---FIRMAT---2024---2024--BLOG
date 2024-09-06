function confirmInput() {
    var email = document.getElementById('loginName').value;
    var parts = email.split('@');
    var username = parts[0];
    alert("¡Hola " + username + "! Volviendo a la página de inicio.");
    window.location.href = 'index.html';
    return false;
}

const btnAbrirModal=document.querySelector("#btn-abrir")
const btnCerrarModal=document.querySelector("#btn-cerrar")
const modal = document.querySelector("#modal")

btnAbrirModal.addEventListener("click",()=>{
    modal.showModal();
})
btnCerrarModal.addEventListener("click",()=>{
    modal.close();
})

const navclickItems = document.querySelectorAll(".navClick");
const navbarNav = document.querySelector("#navbarNav");

navclickItems.forEach((item) => {
  item.addEventListener("click", () => {
    navbarNav.classList.remove("show");
  });
});