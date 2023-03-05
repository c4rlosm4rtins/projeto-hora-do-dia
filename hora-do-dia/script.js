function carregar(){
    const msg = document.getElementById('msg')
    const img = document.getElementById('imagem')
    const data = new Date()
    const hora = 9
    //const hora = data.getHours()
    const minuto = data.getMinutes()
    const bgcolor = document.querySelector('body')
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if(hora < 12){
        //BOM DIA!
        img.src = 'imagens/manha.jpg'
        bgcolor.style.background = '#FECA76'
        msg.innerHTML += ' Bom Dia!'
    } else if(hora > 12 && hora < 18){
        //BOA TARDE!
        img.src = 'imagens/tarde.jpg'
        bgcolor.style.background = '#FDAA42'
        msg.innerHTML += ' Boa Tarde!'
    } else{
        //BOA NOITE!
        img.src = 'imagens/noite.jpg'
        bgcolor.style.background = 'black'
        msg.innerHTML += ' Boa Noite!'
    }


}
