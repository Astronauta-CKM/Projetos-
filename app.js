let titulo =document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio !';

function botãoConClicado(){
    console.log('B1 clicado');
}

function botãoAleClicado(){
    alert ('Eu amo JS!');
}

function botãoProClicado(){
    let cidade = prompt ('Em qual cidade você esta? :');
    alert (`Fui para ${cidade} e lembrei de você :)`);
}

function botãoSomClicado(){

    let numero1D = prompt ('Numero 1 para somar :');
    let numero2D = prompt ('Numero 2 para somar :');

    let numero1 = parseInt (numero1D);
    let numero2  = parseInt (numero2D);

    let soma = numero1 + numero2;
    alert (`Resultado : ${soma}`);
}