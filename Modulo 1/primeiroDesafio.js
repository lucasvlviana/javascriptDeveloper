/* 
    Faça um programa para calcular o valor de uma viagem

    Você terá 3 variáveis. Sendo elas:
    1 - Preço do combustível;
    2 - Gasto médio de combustível do carro por KM;
    3 - Distância em KM da viagem;

*/

const precoCombustivel = 4.80;
const kmPorLitro = 13;
const distanciaEmKm = 610;

const listrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = listrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));