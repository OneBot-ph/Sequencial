//Variaveis

let num1, num2, resultado1;

//Processamento
function Soma(){

    //Entrada
    num1 = parseInt(document.getElementById("numero1").value);
    num2 = parseInt(document.getElementById("numero2").value);
    //Processamento
    resultado1 = num1 + num2;
    //Saída
    document.getElementById("resultado1").innerHTML = "Resultado: " + resultado1;
}

//Conversão de Temperatura

let celsius, resultado2;

function ConversaoTemperatura()
{
    //entrada
    celsius = parseFloat(document.getElementById("celsius").value);
    //processamento
    resultado2 = (celsius * 9/5) + 32;
    //saída
    document.getElementById("resultado2").innerHTML = "fahrenheit: " + resultado2;
}

//Calculando o Volume

let resultado3, h, r;

function Volume()
{
    h = parseFloat(document.getElementById("altura").value);
    r = parseFloat(document.getElementById("raio").value);

    resultado3 = 3.14159 * r * h;

    document.getElementById("resultado3").innerHTML = "Volume: " + resultado3.toFixed(2);

}

// Volume de uma Caixa

let h2, cpm, lgr, resultado4;

function volumeRetangulo(){

    h2 = parseFloat(document.getElementById("h2").value);
    cpm = parseFloat(document.getElementById("comprimento").value);
    lgr = parseFloat(document.getElementById("largura").value);

    resultado4 = h2 * cpm * lgr;

    document.getElementById("Resultado4").innerHTML = "Volume: " + resultado4;

}