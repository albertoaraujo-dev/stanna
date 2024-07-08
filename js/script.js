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
