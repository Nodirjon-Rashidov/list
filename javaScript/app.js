
const siteHeader = document.querySelector('.header')
const showBtn = document.querySelector('.show-nav-btn')
const navOverlay = document.querySelector('.hidden-nav')


showBtn.addEventListener('click', ()=>{
    siteHeader.classList.toggle('shownav')
}) 

navOverlay.addEventListener('click', ()=> {
    siteHeader.classList.toggle('shownav')
})

document.addEventListener('keydown', (e)=> {
    if (e.key == 'Escape'){
        siteHeader.classList.remove('shownav')
    }
})
 
const inputText = document.querySelector('.input-text')
const todos = document.querySelector('.todos')
const todoForm = document.querySelector('.todo-form')

todoForm.addEventListener('submit' , (e) =>{
    e.preventDefault()
    const inputValue = inputText.value
    inputText.value = ' '
    toDoList(inputValue)

})

function toDoList(todo) {
//li
const li = document.createElement('li')
li.textContent = todo
li.classList.add('todo-item')

//check-btn
const checkBtn = document.createElement('button')
checkBtn.innerHTML = '<i class="fas fa-check"></i>'
checkBtn.classList.add('check-btn')
li.appendChild(checkBtn)

//trash-btn
const trashBtn = document.createElement('button')
trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
trashBtn.classList.add('trash-btn')
li.appendChild(trashBtn)

todos.appendChild(li)

}

document.addEventListener('click', (e) => {

    if(e.target.classList[0] == 'trash-btn'){
        const item = e.target.parentElement
        item.remove()
    }

    if(e.target.classList[0] == 'check-btn'){
        const item = e.target.parentElement
        item.classList.toggle('done')
    }
})




