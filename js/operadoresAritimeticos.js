var subTotal = (13+1)*5;
var frete = 0.5 * (13+1);
var total = subTotal + frete;


var subResultado = document.getElementById('subTotal');
subResultado.textContent = 'Valor subtotal: R$ ' + subTotal;

var freteResultado = document.getElementById('frete');
freteResultado.textContent = 'Valor do Frete: R$ ' + frete;

var totalResultado = document.getElementById('total');
totalResultado.textContent = 'Total: R$ ' + total;

/*var nome = document.getElementById('nome');
nome.textContent = 'nome: ' + nome;*/

function escreveNome(nome){
    document.write('Meu nome é ' + nome);
}

/*function helloworld(){
    document.write('olá mundo!');
}*/
