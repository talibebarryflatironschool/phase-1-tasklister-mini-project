document.addEventListener("DOMContentLoaded", () => {
const createTaskFormElement = document.getElementById('create-task-form');
createTaskFormElement.addEventListener('submit',  (event) => {
event.preventDefault()

  const newTaskDescriptionInputElement= document.getElementById('new-task-description')
  console.log (newTaskDescriptionInputElement)

  const liElement = document.createElement('li')
 liElement.textContent = newTaskDescriptionInputElement.value
 const ulElement = document.getElementById('tasks')
 ulElement.appendChild(liElement)

  
   const deleteButton = document.createElement('button');
   deleteButton.textContent = "X"
   deleteButton.setAttribute('data-description' , newTaskDescriptionInputElement.value)
  
   deleteButton.addEventListener('click', (event) => {
   liElement.remove()
//   event.target.parentNode.remove()
})
})
})
  