
matrizAtividade = [];
linhas = 4;
colunas = 5;
let n = 1

for (let i=0; i < linhas; i++) {
    matrizAtividade[i] = [];
    for (let j=0; j < linhas; j++) {
        matrizAtividade[i][j] = (i+2)*n
            n++
    }
    n = 1
}

console.log(matrizAtividade)
