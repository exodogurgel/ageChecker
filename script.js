const btn = document.querySelector('#btn')
btn.addEventListener('click', function verificar() {
    const birthDateComplete = document.querySelector('#birthDate')
    const result = document.querySelector('#result')
    const birthDate = birthDateComplete.value
    const sex = document.getElementsByName('sex')
    const date = new Date()
    const years = date.getFullYear()
    const age = years - birthDate
    const img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (
        birthDate == 0 ||
        birthDate == 1 ||
        birthDate > years ||
        birthDate == ''
    ) {
        alert('Verifique os dados e tente novamente')
    }
    if (sex[0].checked) {
        if (age == 0) {
            result.innerHTML = 'Detectamos um rescem-nascido'
        } else if (age > 0 && age <= 5) {
            // 1 a 5 é um bb
            result.innerHTML = `Detectamos um bebê menino de ${age} anos.`
            img.setAttribute('src', './images/bbmenino.png')
        } else if (age < 12) {
            // 6 a 12 é uma criança
            result.innerHTML = `Detectamos um menino de ${age} anos.`
            img.setAttribute('src', './images/meninocrianca.png')
        } else if (age < 18) {
            // 13 a 18 é um jovem
            result.innerHTML = `Detectamos um jovem de ${age} anos.`
            img.setAttribute('src', './images/meninojovem.png')
        } else if (age < 40) {
            // 19 a 40 é adulto
            result.innerHTML = `Detectamos um homem adulto de ${age} anos.`
            img.setAttribute('src', './images/homematulto.png')
        } else if (age < 60) {
            // 41 a 60 é meia idade
            result.innerHTML = `Detectamos um homem de meia idade de ${age} anos.`
            img.setAttribute('src', './images/hmomemmeiaidade.png')
        } else if (age < 101) {
            // 61 > é idoso
            result.innerHTML = `Detectamos um idoso de ${age} anos.`
            img.setAttribute('src', './images/idoso.png')
        } else {
            result.innerHTML = ' Só é aceito apartir do ano 1922 até 2021'
        }
        result.append(img)
        result.style.textAlign = 'center'
        result.style.padding = '0 30px'
        img.style.marginTop = '10px'
    }
    if (sex[1].checked) {
        if (age == 0) {
            result.innerHTML = 'Detectamos uma rescem-nascida'
        } else if (age > 0 && age <= 5) {
            // 1 a 5 é um bb
            result.innerHTML = `Detectamos uma bebê menina de ${age} anos.`
            img.setAttribute('src', './images/bbmenina.png')
        } else if (age > 5 && age < 12) {
            // 6 a 12 é uma criança
            result.innerHTML = `Detectamos uma criança menina de ${age} anos.`
            img.setAttribute('src', './images/meninacrianca.png')
        } else if (age < 18) {
            // 13 a 18 é um jovem
            result.innerHTML = `Detectamos uma jovem de ${age} anos.`
            img.setAttribute('src', './images/meninajovem.png')
        } else if (age < 40) {
            // 19 a 40 é adulto
            result.innerHTML = `Detectamos uma mulher adulta de ${age} anos.`
            img.setAttribute('src', './images/mulheradulta.png')
        } else if (age < 60) {
            // 41 a 60 é meia idade
            result.innerHTML = `Detectamos uma mulher de meia idade de ${age} anos.`
            img.setAttribute('src', './images/mulhermeiaidade.png')
        } else if (age < 100) {
            // 61 > é idoso
            result.innerHTML = `Detectamos uma idosa de ${age} anos.`
            img.setAttribute('src', './images/idosa.png')
        } else {
            result.innerHTML = ' Só é aceito apartir do ano 1922 até 2021'
        }
        result.append(img)
        result.style.textAlign = 'center'
        result.style.padding = '0 30px'
        img.style.marginTop = '10px'
    }
})
