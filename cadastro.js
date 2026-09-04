document.getElementById('cadastrar').addEventListener("click", function(){

var nome = document.getElementById("nome").value;
var email = document.getElementById('email').value;
var senha = document.getElementById("senha").value;
var confirmarsenha = document.getElementById("confirmarsenha").value;
var mensagem = document.getElementById("mensagem_cadastro");
if(nome === ""){
    mensagem.innerHTML = "Digite seu nome fedor de louco";
    mensagem.style.color = "red";
    return;
}
if(email === ""){
    mensagem.innerHTML = "Digite seu email animal";
    mensagem.style.color = "red";
    return;
}
if(senha === ""){
    mensagem.innerHTML = "Digite sua senha coisa linda";
    mensagem.style.color = "red";
    return;
}
if(confirmarsenha === ""){
    mensagem.innerHTML = "Por isso ela nunca te amou";
    mensagem.style.color = "red";
    return;
}
if (senha !== confirmarsenha) {
    mensagem.innerHTML = "Desiste mano👎😪";
    mensagem.style.color = "red";
    return;
}

var usuario = {
    nome: nome,
    email: email,
    senha: senha
};
localStorage.setItem("usuarioKVN", JSON.stringify(usuario));
mensagem.innerHTML = "Conta criada com sucesso!"
mensagem.style.color = "green"

setTimeout(function(){
    window.location.href = "login.html";
}
,1500)
});
document.getElementById('olhos').addEventListener("click", function(){
var criesenha = document.getElementById('criesenha');
if(senha.type === "password"){
    senha.type = "text";
    this.innerHTML = "🙈"
    }else{
        senha.type = "password";
        this.innerHTML = "👁️";
}

});