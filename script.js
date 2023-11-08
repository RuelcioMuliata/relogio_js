function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'manhã.png'
        document.body.style.background = 'rgb(228, 175, 0)'
   
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = 'rgb(190, 86, 0)'
   
    } else {
        img.src = 'noite.png'
        document.body.style.background = 'rgb(68, 0, 0)'
    }
}

