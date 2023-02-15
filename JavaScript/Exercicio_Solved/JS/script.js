/*  

1) Ao executar o script a aplicação deve solicitar a entrada do nome da pessoa.
2) Na sequência a aplicação deve solicitar que seja informada a altura da pessoa em
centímetros.
3) Na sequência a aplicação deve solicitar que seja informado o peso da pessoa.
4) Após as estradas de dados, atente-se a conversão das informações para dados do tipo
float.
5) Converta a altura recebida em centímetros para metros. (basta dividir a altura por
100).
6) Internamente a aplicação deve executar o cálculo do índice de massa corporal através
da expressão: M = peso (quilos) ÷ altura²
7) Após identificar o índice de massa corporal o sistema deverá classificar em faixas
descritivas utilizando os critérios abaixo:
a) Se M estiver abaixo de 16 : Baixo peso muito grave
b) Se M estiver entre 16 e 16,99: Baixo peso grave
c) Se M estiver entre 17 e 18,49: Baixo peso
d) Se M estiver entre 18,50 e 24,99: Peso normal
e) Se M estiver entre 25 e 29,99: Sobrepeso
f) Se M estiver entre 30 e 34,99: Obesidade grau I
g) Se M estiver entre 35 e 39,99: Obesidade grau II
h) Se M for maior que 40: Obesidade grau III
8) Ao término o sistema deve fornecer a seguinte saída para o usuário: */

function calcular() {

    //converte as cadeias de caracteres para dados do tipo float
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value

    //abaixo é feito a conversão da altura de centímetros para metros
    altura /= 100

    //realiza o cálculo de img
    let IMC = peso / altura ** 2

    //testes condicionais para identificar a classificação do peso com base no imc
    let classificacao = ''

    if (IMC <= 16) {
        classificacao = 'Baixo peso - MUITO GRAVE '
    }

    else if (IMC >= 16 && IMC <= 16.99) {
        classificacao = 'Baixo peso - GRAVE '
    }

    else if (IMC >= 16 && IMC <= 16.99) {
        classificacao = 'Baixo peso - MUITO GRAVE '
    }

    else if (IMC >= 18.50 && IMC <= 24.99) {
        classificacao = 'Peso normal  '
    }

    else if (IMC >= 25 && IMC <= 29.99) {
        classificacao = 'Sobre peso '
    }

    else if (IMC >= 30 && IMC <= 34.99) {
        classificacao = 'Obesidade Grau I '
    }

    else if (IMC >= 35 && IMC <= 39.99) {
        classificacao = 'Obesidade Grau II '
    }

    else { // se não estiver enquadrado em nenhum critério acima, imc só pode ser (M >= 40)
        classificacao = 'Obesidade grau III'
    }

    // Limita a quantidade de números após a vírgula para 2
    function exitAlert(){
    alert (nome +', possui índice de massa corporal igual a ' + M.toFixed(2) + ', sendo classificado como: ' + classificacao)
    }
}
