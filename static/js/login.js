document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Salva login e horário atual (em milissegundos)
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loginTime", Date.now());

    // Redireciona para a página principal
    window.location.href = "index.html";
});
