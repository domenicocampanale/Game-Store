


// Carica le credenziali memorizzate quando la pagina viene caricata
window.onload = function() {
    var storedCredentials = getStoredCredentials();
    if (storedCredentials.username && storedCredentials.email && storedCredentials.password) {
        document.getElementById("usernameInput").value = storedCredentials.username;
        document.getElementById("emailInput").value = storedCredentials.email;
        document.getElementById("passwordInput").value = storedCredentials.password;
    }
};


document.getElementById("registerButton").addEventListener("click", function() {
    // Verifica se tutti i campi sono stati compilati
    var username = document.getElementById("usernameInput").value;
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;

    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
        alert("Per favore, compila tutti i campi.");
        return; // Interrompi la funzione se un campo è vuoto
    }

    var storedCredentials = getStoredCredentials();

    if (storedCredentials.username === username && storedCredentials.email === email) {
        return alert("Account esistente");
    } else if (storedCredentials.username === username) {
        return alert("Username già esistente, per favore provare con un altro");
    } else if (storedCredentials.email === email) {
        return alert("Email già esistente, per favore provare con un'altra");
    } else {
        // Salva le credenziali se non esistono account con lo stesso username o email
        saveCredentials(username, email, password);
        alert("Registrazione completata!");
        window.location.href = "Login.html";
        // Reimposta i campi dopo la registrazione
        document.getElementById("usernameInput").value = "";
        document.getElementById("emailInput").value = "";
        document.getElementById("passwordInput").value = "";
    }
});



//Local storage
function saveCredentials(username, email, password) {
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
}

function getStoredCredentials() {
    return {
        username: localStorage.getItem("username"),
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password")
    };
}





