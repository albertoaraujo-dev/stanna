//animation
const links = document.querySelectorAll('.header-menu a')

function activeLink(link) {
    const url = location.href
    const href = link.href
    if (url.includes(href)) {
        link.classList.add('active')
    }
}

links.forEach(activeLink)

if (window.SimpleAnime) {
    new SimpleAnime()
}

//cookies
function acceptCookies() {
    localStorage.lgpdStanna = 'yes'
    cookiesContent.classList.remove('show')
}

let cookiesContent = document.getElementById('cookies')

localStorage.lgpdStanna != 'yes'
    ? cookiesContent.classList.add('show')
    : cookiesContent.classList.remove('show')

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
