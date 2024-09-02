function confirmInput() {
    var email = document.getElementById('loginName').value;
    var parts = email.split('@');
    var username = parts[0];
    alert("¡Hola " + username + "! Volviendo a la página de inicio.");
    window.location.href = 'index.html';
    return false;
}
