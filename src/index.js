document.addEventListener("DOMContentLoaded", () => {
const createTaskFormElement = document.getElementById('create-task-form');
createTaskFormElement.addEventListener('submit',  (event) => {
event.preventDefault()

 const newTaskDescriptionInputElement= document.getElementById('new-task-description')

 const liElement = document.createElement('li')
 liElement.textcontent = newTaskDesccriptionInput.value

  
  const delBtn = document.createElement('button');
  deleteButton.textcontent = "X"
  deletebutton.setAttribute('data-description' , newTaskDescriptionInputElement.value)
  deletteButton.addEventListener('click', (event) => {
    lieElement.remove()
    event.target.parentNode.remove()
    })