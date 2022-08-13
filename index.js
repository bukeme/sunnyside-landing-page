const hamburger = document.querySelector('.navbar__icon-hamburger')
const navLinksContainer = document.querySelector('.navbar__nav-links-container')


hamburger.addEventListener('click', function() {
    navLinksContainer.classList.toggle('show')
})