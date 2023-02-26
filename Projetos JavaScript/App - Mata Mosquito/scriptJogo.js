var altura = 0
var largura = 0
var lifes = 1
var time = 15

var timeRespawnMosquito = 1500

var nivel = window.location.search
nivel.replace('?', '')

if(nivel === 'normal') {
    timeRespawnMosquito = 1500
    
} else if(nivel === 'dificil'){
    timeRespawnMosquito = 1000

}else if(nivel === 'chucknorris'){
    timeRespawnMosquito = 750
}

function ajustSizeGame(){

altura = window.innerHeight
largura = window.innerWidth

console.log(altura, largura)
}

ajustSizeGame()

var timer = setInterval(function(){

    time -= 1
    if(time < 0){
        clearInterval(timer)
        clearInterval(respawnMosquito)
        window.location.href = 'winner.html'
    } else{
    document.getElementById('timer').innerHTML = time
}
    
}, 1000)

function randomPosition(){

    //remover o mosquito anterior (caso exista)
    if ( document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()

    if (lifes > 3){
        window.location.href = 'game_over.html'
    } else{
    document.getElementById('v' + lifes).src="imagens/coracao_vazio.png"

    lifes++
    }
}
var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

//criar o elemento html
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'
mosquito.className = randomSize() +' '+ randomSide()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function (){
    this.remove()
}

document.body.appendChild(mosquito)

}

function randomSize() {
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
            return 'mosquito'

        case 1:
            return 'mosquito1'
        case 2:
            return 'mosquito2'
    }
}

function randomSide(){
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0:
            return 'sideA'

        case 1:
            return 'sideB'
    }
}