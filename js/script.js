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
if (document.URL == 'https://stanna.com.br/') {
    let cookiesContent = document.getElementById('cookies')

    function acceptCookies() {
        localStorage.lgpdStanna = 'yes'
        cookiesContent.classList.remove('show')
    }

    localStorage.lgpdStanna != 'yes'
        ? cookiesContent.classList.add('show')
        : cookiesContent.classList.remove('show')
}

//mobile menu
const mobileMenu = document.querySelector('.mobile-menu')
const navBar = document.querySelector('.navbar')
const buttonWhats = document.querySelector('.btn-whats')
const url = location.href

const mobileMenuActions = () => navBar.classList.toggle('active')

mobileMenu.addEventListener('click', () => mobileMenuActions())
