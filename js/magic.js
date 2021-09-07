//Mostra Senha

var verSenha = document.querySelector('#versenha');
var senha = {
    senhaA: document.querySelector('#senhaA'),
    senhaB: document.querySelector('#senhaB')
}

verSenha.addEventListener('change',(evento)=>{
    mostraSenha(evento.target);
})

function mostraSenha(input) {
   if(input.checked){
       senha.senhaA.type = 'text';
       senha.senhaB.type = 'text'; 
   }else{
       senha.senhaA.type = 'password';
       senha.senhaB.type = 'password';
   }    
}