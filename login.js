document.getElementById("entrar").addEventListener("click", function(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById('senha').value;
    var mensagem = document.getElementById('mensagem');
    var mensagem_entrar = document.getElementById('mensagem_entrar');
    var aceito = document.getElementById('aceito');
    var usuario = JSON.parse(localStorage.getItem("usuarioKVN"));

    
    if (email === "" || senha === ""){
        mensagem.innerHTML = "Por Obséquio, Você é burro?";
        mensagem.style.color = "red";
        return;
    }
    if( usuario === null){
        mensagem_entrar.innerHTML = "Você não tem conta Jamanta"
        mensagem_entrar.style.color = "red"
        return;
    }
    if( email !== usuario.email, senha!== usuario.senha){
        mensagem_entrar.innerHTML = "Você digitou ou a senha ou o email errado"
        mensagem_entrar.style.color = "red"
        return;
    }
    if (!aceito.checked){
        mensagem_entrar.innerHTML = "Aceite os termo, igual quando você aceitou que ele era apenas o melhor amigo dela"
        mensagem_entrar.style.color = "red"
        return;}
    mensagem_entrar.innerHTML = "Suma de minha vista!";
    mensagem_entrar.style.color = "green"
    localStorage.setItem("logadoKVN", "true");
    setTimeout(function(){
        window.location.href = "../Calculadora/calculator.html";
    }, 1200)
});
    document.getElementById('olho').addEventListener("click", function(){
var senha = document.getElementById('senha');
if(senha.type === "password"){
    senha.type = "text";
    this.innerHTML = "🙈"
    }else{
        senha.type = "password";
        this.innerHTML = "👁️";
}

});


