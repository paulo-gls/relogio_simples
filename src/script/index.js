//TODO: Colocar o nome da pessoa na menssagem de saudação
function carregar() {
    const msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    // const hora = 23
    const minutos = data.getMinutes()
    const saudacao = document.getElementById('saudacao')
    msg.innerHTML = `Agora são ${hora}h:${minutos}m.`
    if (hora >= 0 && hora < 12) {
        saudacao.innerHTML = "Bom dia!"
        img.src = 'src/img/manha.png'
        document.body.style.background = ' #e0cea7'
    } else if (hora >= 12 && hora < 18) {
        saudacao.innerHTML = "Boa tarde!"
        img.src = 'src/img/tarde.png'
        document.body.style.background = '#e1927c'
    } else {
        saudacao.innerHTML = "Boa Noite!"
        img.src = 'src/img/noite.png'
        document.body.style.background = '#362b44'
    }
}



// trocar  a cor da noie