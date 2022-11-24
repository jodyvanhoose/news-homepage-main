const navMenu = document.getElementById('nav')
const hamMenu = document.getElementById('menu-open')
const body = document.querySelector('body')
const xMenu = document.getElementById('menu-close')

// mobile open menu function
const openMenu = () =>{
  navMenu.className = 'isOpen'
  body.style.backgroundColor = '#c5c5c5'
  body.classList.add("stop-scrolling")
  xMenu.style.display = 'block'
}

// mobile close menu function
const closeMenu = () =>{
  navMenu.remove.className = 'isOpen'
  navMenu.className = 'isClosed'
  body.style.backgroundColor = '#fff'
  body.classList.remove("stop-scrolling")
  xMenu.style.display = 'none'
}