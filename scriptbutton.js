function login() {
    var isLogged = false;
    window.location.href = "EsempioLogin.html";
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










