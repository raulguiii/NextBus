document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Simula um login válido
    localStorage.setItem("isLoggedIn", "true");

    // Redireciona para a página principal
    window.location.href = "index.html";
});
