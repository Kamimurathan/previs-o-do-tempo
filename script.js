function cliqueiNoBotao() {

    const cidade = document.querySelector('.input-cidade').value

    buscarCidade(cidade)

}

const key = '69a16f3a31b045ae0ec8edfa940f0ac2'

async function buscarCidade(cidade) {

    const dados = await fetch(`
        https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric
        `).then(response => response.json())

        console.log(dados)
    colocaNaTela(dados)

}

function colocaNaTela(dados) {

    document.querySelector('.cidade').innerHTML = `Tempo em ${dados.name}`
    document.querySelector('.temp').innerHTML = `${Math.floor(dados.main.temp)}°C`
    document.querySelector('.icone').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector('.descricao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = `Umidade: ${dados.main.humidity}%`

}