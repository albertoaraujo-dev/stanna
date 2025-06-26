const form = document.querySelector('form')

function formSubmitted(res) {
    console.log(res)
    if (res.ok) {
        form.reset()
        form.innerHTML =
            '<p class="success"><span>Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em 24 horas.</p>'
    } else {
        form.innerHTML =
            '<p class="error"><span>Erro ao enviar</span>, você pode enviar diretamente para o nosso email em: contato@stanna.com.br</p>'
    }
}

function formSubmit(event) {
    event.preventDefault()
    const button = document.querySelector('form button')
    button.disabled = true
    button.innerText = 'Enviando...'

    const data = new FormData(form)
    console.log(data.get('name'))

    fetch('./enviar.php', {
        method: 'POST',
        body: data,
    }).then(formSubmitted)
}

form.addEventListener('submit', formSubmit)
