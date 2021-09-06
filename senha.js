function mostraOcultarSenha(){
    var senha = document.getElementsByName("senha");
    if(senha.type=="password"){
        senha.type="text";
    }else{
        senha.type="password";
    }