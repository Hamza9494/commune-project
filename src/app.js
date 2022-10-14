const navToggle = document.querySelector('.nav-toggle')
const sidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.close-btn')
const header = document.querySelector('.header')

//show sidebar
navToggle.addEventListener('click', () => {
  sidebar.classList.add('show')
  header.classList.add('hide')
})

//hide sidebar
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show')
  header.classList.remove('hide')
})

//color #5534A5
