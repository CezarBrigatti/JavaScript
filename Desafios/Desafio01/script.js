function carregar (){
    var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //bom dia!
    img.src = 'imagens/Manha1.png'
    document.body.style.backgroundColor = '#b8b082'
} else if (hora >= 12 && hora <= 18 ) {
    //boa tarde
    img.src = 'imagens/Tarde2.png'
    document.body.style.backgroundColor ='#ee8261'
} else {
    //boa noite
    img.src = 'imagens/Noite3.png'
    document.body.style.backgroundColor ='#0b257a'
}
}