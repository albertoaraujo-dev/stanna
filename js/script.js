const links = document.querySelectorAll('.header-menu a')

function activeLink(link) {
    const url = location.href
    const href = link.href
    if (url.includes(href)) {
        link.classList.add('active')
    }
}

links.forEach(activeLink)

//animation
if (window.SimpleAnime) {
    new SimpleAnime()
}

//cookies
if (document.URL.includes('index')) {
    let cookiesContent = document.getElementById('cookies')

    function acceptCookies() {
        localStorage.lgpdStanna = 'yes'
        cookiesContent.classList.remove('show')
    }

    if (localStorage.lgpdStanna == 'yes') {
        cookiesContent.classList.remove('show')
    } else {
        cookiesContent.classList.add('show')
    }
}

//mobile menu
const mobileMenu = document.querySelector('.mobile-menu')
const navBar = document.querySelector('.navbar')
const buttonWhats = document.querySelector('.btn-whats')
const url = location.href

function mobileMenuActions() {
    if (document.URL == 'https://www.stanna.com.br/') {
        buttonWhats.classList.toggle('hide')
    }
    navBar.classList.toggle('active')
}

mobileMenu.addEventListener('click', () => mobileMenuActions())
