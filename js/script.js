const links = document.querySelectorAll('.header-menu a')

function activeLink(link) {
    const url = location.href
    const href = link.href
    if (url.includes(href)) {
        link.classList.add('ativo')
    }
}

links.forEach(activeLink)

//Animation
if (window.SimpleAnime) {
    new SimpleAnime()
}

//
let cookiesContent = document.getElementById('cookies')

function acceptCookies() {
    localStorage.lgpd = 'yes'
    cookiesContent.classList.remove('show')
}

if (localStorage.lgpd == 'yes') {
    cookiesContent.classList.remove('show')
} else {
    cookiesContent.classList.add('show')
}
