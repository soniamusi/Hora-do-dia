function carregar(){

var msg = window.document.getElementById('msg')
var imagem = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 22
msg.innerHTML = `Agora são ${hora} horas...`
if(hora >= 0 && hora < 12){
    //bom dia
    imagem.src = 'morning.png'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 13 && hora <= 18) {
    //boa tarde 
    imagem.src = 'afternoon.png'
    document.body.style.background = '#b9846f'
} else {
    //boa noite
    imagem.src = 'night.png'
    document.body.style.background = '#515154'
}
}
