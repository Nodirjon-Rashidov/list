const inputTex  = document.querySelector('.input-text')
const todos = document.querySelector('.todos')
const todoform = document.querySelector('.todo-form')
    
todoform.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputValue = inputTex.value
    addTodolist(inputValue)
    inputTex.value = ''
})

function addTodolist(todo){
    const li = document.createElement('li')
    li.textContent = todo
    li.classList.add('todo-item')

    const checkBtn = document.createElement('button')
    checkBtn.innerHTML = '<i class="fas fa-check"></li>'
    checkBtn.classList.add('check-btn')
    li.appendChild(checkBtn)

    const trashBtn = document.createElement('button')
    trashBtn.innerHTML = '<i class="fas fa-trash"></li>'
    checkBtn.classList.add('trash-btn')
    li.appendChild(trashBtn)


    todos.appendChild(li)
} 

document.addEventListener('click',(e) => {
  if(e.target.classList [0] == 'trash-btn'){
    const item = e.target.parentElement
    item.remove()
  }
    if (e.target.classList [0] == 'check-btn'){
      const item = e.target.parentElement
      item.add('done')
  }
})

const siteHeader = document.querySelector('.site-header')
const shownavbtn =document.querySelector('.show-nav-btn')

shownavbtn.addEventListener('click' , () => {
    siteHeader.classList.toggle('shownav')
})



const changecolor = document.getElementById('change-color')
const modal = document.querySelector('.modal')
const overley = document.querySelector('.overley')
const closemodal = document.querySelector('.close-modal')

changecolor.addEventListener('click', ()=> {
  modal.classList.remove('hidden')
  overley.classList.remove('hidden')
})
closemodal.addEventListener('click', ()=> {
  modal.classList.add('hidden')
  overley.classList.add('hidden')
}) 

overley.addEventListener('click', ()=> {
  modal.classList.add('hidden')
  overley.classList.add('hidden')
})
document.addEventListener('keydown', (e) =>{
  if(e.code == 'Escape'){
    modal.classList.add('hidden')
  overley.classList.add('hidden')
  }
})