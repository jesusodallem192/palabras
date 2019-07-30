// 1. VARIABLES
var palabraA = document.getElementById("palabraA");
var palabraB = document.getElementById("palabraB");
var palabraC = document.getElementById("palabraC");
var palabraD = document.getElementById("palabraD");
var botonazo = document.getElementById("boton-frase");
var frase = document.getElementById("resultado-frase");

function armarFrase(a, b, c, d){
    return ( a + " " + b + " " + c + " " + d)
}

botonazo.addEventListener("click",() => {
    console.log('concatenando...');
    // 1. Obtener todas las palabras
    var pA = palabraA.value;
    var pB = palabraB.value;
    var pC = palabraC.value;
    var pD = palabraD.value;
    // 2. Juntar las palabras
    var fraseFinal = armarFrase(pA,pB,pC,pD);
    // 3. Expresar las palabras en el HTML
    frase.innerHTML = fraseFinal;
})