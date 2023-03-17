let form = document.querySelector("form")
const input = document.querySelector(".todo_input")
let parent_ul = document.querySelector(".parent_ul")
let index = 0
let parent = []
function handlerenderTodo(arr){
  parent_ul.innerHTML = null
  for(let i =0; i<arr.length; i++){
    let li=document.createElement("li")
    li.className = "d-flex w-75 mx-auto p-3 mt-2 align-items-center justify-content-between border-bottom"
    let h4 = document.createElement("h4")
    h4.textContent = arr[i].name
    let button =document.createElement("button")
    button.className = "btn btn-danger delete_todo"
    button.dataset.id =arr[i].id
    button.textContent = "Delete"
    li.appendChild(h4)
    li.appendChild(button)
    parent_ul.appendChild(li)
  }
}
function handleSub(event){
  event.preventDefault()
  console.log(input.value)
  if(input.value.length >1){
    index++
    let todo ={
      name:input.value,
      id:index
    }
    parent.push(todo)
    handlerenderTodo(parent)
    input.value = null
  }
}
form.addEventListener("submit", handleSub)
window.addEventListener("click",function(event){
  if(event.target.matches(".delete_todo")){
    let data_id = event.target.dataset.id
    for(let i = 0; i<parent.length; i++){
      if(data_id-0 === parent[i].id){
        parent.splice(i, 1)
        handlerenderTodo(parent)
      }
    }
  }else{
    console.log(false)
  }
})