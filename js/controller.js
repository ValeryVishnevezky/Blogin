'use strict'

const menu = document.querySelector('.main-nav-list')
const btn = document.querySelector('.btn-toggle-menu')

function toggleMenu() {
    document.body.classList.toggle('menu-open');
    onSwitchIcon()
}

function onSwitchIcon() {

    if (document.body.classList.toggle('menu-open')) {
        btn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    } else {
        btn.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
}

btn.addEventListener('click', onSwitchIcon)