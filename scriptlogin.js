


    



document.getElementById("loginButton").addEventListener("click", function() {
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;

    // Verifica se entrambi i campi sono stati compilati
    if (username.trim() === "" || password.trim() === "") {
        alert("Per favore, inserisci nome utente e password.");
        return; // Interrompi la funzione se un campo è vuoto
    }

    // Recupera le credenziali memorizzate (per esempio, dal localStorage)
    var storedCredentials = getStoredCredentials();

    // Simulazione della verifica delle credenziali
    if (username === storedCredentials.username && password === storedCredentials.password) {
        alert("Login riuscito!");
        window.location.href = "HomePage.html";
    } else {
        alert("Credenziali non valide. Riprova.");
    }
});



/*document.getElementById("loginButton").addEventListener("click", function() {
    var username = document.getElementById("loginUsernameInput").value;
    var password = document.getElementById("loginPasswordInput").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("Per favore, inserisci username e password.");
        return;
    }

    var storedCredentials = getStoredCredentials();

    var matchedCredential = storedCredentials.find(function(credential) {
        return credential.username === username && credential.password === password;
    });

    if (matchedCredential) {
        alert("Accesso riuscito!");
        // Effettua il reindirizzamento alla pagina di home dopo il login
        window.location.href = "HomePage.html";
    } else {
        alert("Credenziali non valide. Per favore, controlla di aver inserito correttamente username e password.");
    }
});

function getStoredCredentials() {
    var storedCredentialsJSON = localStorage.getItem("credentials");
    return storedCredentialsJSON ? JSON.parse(storedCredentialsJSON) : [];
}*/




function login() {
    var isLogged = false;
    window.location.href = "Registrazione.html";
}
window.onload = function() {
    var isLogged = sessionStorage.getItem("isLogged");
        if (isLogged === "true") {
        var loginUsername = sessionStorage.getItem('loginUsername');
            document.getElementById("accesso").innerText = loginUsername;
            document.getElementById("logOut").style.display = "inline";
        }
}
document.getElementById("logOut").addEventListener("click", function() {
    sessionStorage.clear();
    window.location.href = "HomePage.html";
});



