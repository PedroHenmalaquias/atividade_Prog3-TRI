function inserir(elemento) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + elemento;
}
function limpar() {
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('resultado2').innerHTML = ``;
    document.getElementById('igual').focus();
}
function voltar() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}
function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML =  eval(resultado)
        document.getElementById('resultado2').innerHTML = `<p>${resultado}</p>`;
        
    }
    else {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}
document.addEventListener("keypress", (e) => {
    if (e.key == "1") inserir("1");
    else if(e.key == "2") inserir("2");
    else if(e.key == "3") inserir("3");
    else if(e.key == "4") inserir("4");
    else if(e.key == "5") inserir("5");
    else if(e.key == "6") inserir("6");
    else if(e.key == "7") inserir("7");
    else if(e.key == "8") inserir("8");
    else if(e.key == "9") inserir("9");
    else if(e.key == "0") inserir("0");
    else if(e.key == "/") inserir("/");
    else if(e.key == "*") inserir("*");
    else if(e.key == "-") inserir("-");
    else if(e.key == "+") inserir("+");
    else if(e.key == ".") inserir(".");
    else if(e.key == ",") inserir(".");
    else if(e.key == "Enter") calcular();
    else if(e.key == "Delete") voltar();
})