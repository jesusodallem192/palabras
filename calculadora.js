// 1. VARIABLES

const numA    = document.getElementById("numA");
const numB    = document.getElementById("numB");
// const boton   = document.getElementById("boton-sumar");
const areaResultado = document.getElementById("resultado");
// 2. FUNCIONES

const suma = (a, b) => {
    return (a + b);
}
// 3. EVENTOS

boton.addEventListener ("click",() => {
    console.log('algo...');
    // 1. Necesito obtener los dos números a sumar

    const primerNumero = parseInt(numA.value);
    const segundoNumero = parseInt(numB.value);

    // 2. Necesito sumar esos dos números

    const res = suma(primerNumero, segundoNumero)
    // 3. Necesito expresarlos en la página web.

    areaResultado.innerHTML = res
})
