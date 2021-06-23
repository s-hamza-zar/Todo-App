

let id = 1;

function addTodo() {

  var userInput = document.getElementById('input')
  var text = userInput.value
  if (text === "") {
    alert("Input is Empty")
    return
  }
  var container = document.getElementById('todo-container')
  var div = document.createElement('div')
  div.setAttribute("class", "flex")
  container.appendChild(div)
  var p = document.createElement('p')
  var childDiv = document.createElement('div')
  div.setAttribute("id", "delteId-" + id)
  var removeId = document.getElementById("delteId-" + id)
  var removeBtn = document.createElement('button')
  var editBtn=document.createElement('button')
  var editIcon=document.createElement('i')
  var deleteIcon = document.createElement('i')
  deleteIcon.innerHTML = "delete"
  editIcon.innerHTML="edit"
  deleteIcon.setAttribute("class", "material-icons black")
  editIcon.setAttribute("class", "material-icons black")
  removeBtn.setAttribute("class", "btn-style ")
  editBtn.setAttribute("class", "btn-style ")
  childDiv.setAttribute("class", "inner-flex")
  removeBtn.addEventListener("click", function () { remove(removeId) })
  editBtn.addEventListener("click",edit)
  p.innerHTML = text
  var checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox")
  checkBox.setAttribute("class", "btn-style ")
  checkBox.addEventListener("click", strike)
  div.appendChild(p)
  childDiv.appendChild(removeBtn)
  childDiv.appendChild(editBtn)
  childDiv.appendChild(checkBox)
  div.appendChild(childDiv)
  removeBtn.appendChild(deleteIcon)
  editBtn.appendChild(editIcon)
  userInput.value = ""
  id++;

}

function strike() {
  var parentDiv= this.parentElement

  var pTag=parentDiv.parentElement.childNodes[0]

  var classExists = pTag.classList.contains("over-cut")

  if (classExists === true) {
    pTag.classList.remove("over-cut")

  } else { pTag.setAttribute("class", "over-cut") }
}

function remove(x) {

console.log(x)
x.remove()
}

function edit(){
  let parentDiv= this.parentElement
  let pTag=parentDiv.parentElement.childNodes[0]
  y=prompt("Enter String To Update")
  pTag.innerHTML=y;
}
