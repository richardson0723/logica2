function ranqueamento(vitorias, derrotas) {
    let saldoDeVitorias = vitorias - derrotas;
    let nivel;
    
    if (saldoDeVitorias < 10) {
        nivel = "ferro";
    } else if (saldoDeVitorias >= 11 && saldoDeVitorias <= 20) {
        nivel = "bronze";
    } else if (saldoDeVitorias >= 21 && saldoDeVitorias <= 50) {
        nivel = "prata";
    } else if (saldoDeVitorias >= 51 && saldoDeVitorias <= 80) {
        nivel = "ouro";
    } else if (saldoDeVitorias >= 81 && saldoDeVitorias <= 90) {
        nivel = "diamante";
    } else if (saldoDeVitorias >= 91 && saldoDeVitorias <= 100) {
        nivel = "lendario";
    } else if (saldoDeVitorias > 100) {
        nivel = "Imortal";
    }

    return "O heroi tem um saldo de " + saldoDeVitorias + " e está no nível " + nivel;
}

let vitorias = 199;
let derrotas = 100;
let resultado = ranqueamento(vitorias, derrotas);
console.log(resultado);
