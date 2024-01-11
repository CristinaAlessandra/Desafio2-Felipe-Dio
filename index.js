// A função calcula a pontuação de (vitórias - derrotas) e classifica o nível do herói conforme o resultado do saldo 

function calcularSaldo(vitorias, derrotas){
    const saldo = vitorias - derrotas;

    let nivel;

    switch(true){
        case saldo < 10:
            nivel = "Ferro";
            break;
        case saldo >= 11 && saldo <= 50:
            nivel = "Bronze";
            break;
        case saldo >= 51 && saldo <= 80:
            nivel = "Ouro";
            break;
        case saldo >= 81 && saldo <= 90:
            nivel = "Diamante";
            break;
        case saldo >= 91 && saldo <= 100:
            nivel = "Lendário";
            break;
        case saldo >= 101:
            nivel = "Imortal";
            break;
    }

    console.log(`O Herói tem saldo de ${saldo} e está no nível de ${nivel}`)
}

// Insira os valores: vitórias e derrotas
calcularSaldo(52,1)

