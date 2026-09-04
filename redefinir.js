var redefinir = document.getElementById("redefinir");
var email = document.getElementById("email");
var mensagem = document.getElementById("mensagem_redefinir");
var novaSenhaArea = document.getElementById("novaSenhaArea");
var novaSenha = document.getElementById("novaSenha");
var confirmarNovaSenha = document.getElementById("confirmarNovaSenha");
var salvarSenha = document.getElementById("salvarSenha");

redefinir.addEventListener("click", function(){
var usuario = JSON.parse(localStorage.getItem("usuarioKVN"));
if(email.value === ""){
mensagem.innerHTML = "Digite seu email, seu porra";
mensagem.style.color = "red";
return;
}
if(usuario === null){ 
mensagem.innerHTML = "Você não tem uma conta cadastrada";
mensagem.style.color = "red";
return;
}
if(email.value !== usuario.email){
mensagem.innerHTML = "Esse email não está cadastrado";
mensagem.style.color = "red";
return;
}
mensagem.innerHTML = "Email encontrado! Crie sua nova senha.";
mensagem.style.color = "green";
novaSenhaArea.style.display = "block"; }); 
salvarSenha.addEventListener("click", function(){
if(novaSenha.value === ""){
mensagem.innerHTML = "Digite sua nova senha";
mensagem.style.color = "red";
return;
} 
if(confirmarNovaSenha.value === ""){
mensagem.innerHTML = "Confirme sua nova senha";
mensagem.style.color = "red";
return; 
}
if(novaSenha.value !== confirmarNovaSenha.value){
mensagem.innerHTML = "As senhas não são iguais";
mensagem.style.color = "red";
return; 
}
var usuario = JSON.parse(localStorage.getItem("usuarioKVN"));
usuario.senha = novaSenha.value; localStorage.setItem("usuarioKVN", JSON.stringify(usuario));
mensagem.innerHTML = "Senha alterada com sucesso!"; mensagem.style.color = "green"; setTimeout(function(){ window.location.href = "login.html"; }, 1500); });