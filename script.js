const navMenu = document.getElementById('nav')
const hamMenu = document.getElementById('menu-open')
const body = document.querySelector('body')

const openMenu = () =>{
  hamMenu.style.display = 'none'
  navMenu.className = 'isOpen'
  body.style.backgroundColor = '#c5c5c5'
}

const closeMenu = () =>{
  hamMenu.style.display = 'block'
  navMenu.remove.className = 'isOpen'
  navMenu.className = 'isClosed'
  body.style.backgroundColor = '#fff'
}