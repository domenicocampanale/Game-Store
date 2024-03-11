document.addEventListener("DOMContentLoaded", function() {
    // Verifica se l'utente è autenticato
    var isAuthenticated = checkAuthentication();

    if (isAuthenticated) {
        // Se l'utente è autenticato, nasconde il modulo di login
        hideLoginForm();
    }
});

function checkAuthentication() {
    // Verifica se l'utente è autenticato leggendo il flag dalla localStorage
    return localStorage.getItem("authenticated") === "true";
}

function hideLoginForm() {
    // Nasconde il modulo di login
    document.getElementById("loginForm").style.display = "none";
    // Nasconde il link per il login
    document.getElementById("loginLink").style.display = "none";
}

function showRegisterForm() {
    // Mostra il modulo di registrazione
    document.getElementById("registerForm").style.display = "block";
}

function registerUser() {
    // Codice per registrare un nuovo utente
}

// Aggiungi un listener per il click sul link di registrazione
document.getElementById("registerLink").addEventListener("click", function() {
    showRegisterForm();
});
