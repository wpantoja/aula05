/*Crie uma função podeSubir() que receba dois parâmetros: 
altura da pessoa e se está acompanhada.

Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode subir ou não, baseado nas seguintes condições:
1) A pessoa deve medir mais de 1.40m e menos de 2 metros.
2) Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
3) Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada.
*/

function podeSubir(altura, estaAcompanhada) {
    let podeSubir = false; 

    if (altura >= 1.4 && altura <= 2) {
        podeSubir = true;
    }
    if (altura < 1.4 && estaAcompanhada == true) {
        podeSubir = true;
    }
    if (altura<1.2) {
        podeSubir=false;
    }
    return podeSubir;
}
console.log(podeSubir(1.5,false));