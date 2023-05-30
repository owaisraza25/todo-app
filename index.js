var Btn = document.getElementById("addbtn")
var textInput = document.getElementById("text-input")
var task = document.getElementById("task")
var container = document.getElementById("container-")




Btn.addEventListener("click", todoList)

function todoList() {

    var div = document.createElement("div")
    var ListTxt = document.createElement("input")
    var btn = document.createElement("button")
    var btn2 = document.createElement("button")
    // var box = document.createElement("div")


    if (textInput.value === "") {
        alert("please fill to do....")
    } else {
        ListTxt.disabled = true;
        btn.innerHTML = `<i class="fa solid fa-trash"></i>`
        btn2.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`
        btn.className = "dlt-btn"
        btn2.className = "Edit-btn"

        ListTxt.className = "textstyle"
        div.className = "todo_task"
        ListTxt.value = textInput.value
        div.appendChild(ListTxt)
        div.appendChild(btn2)
        div.appendChild(btn)
        container.appendChild(div)
        textInput.value = ""
        btn.addEventListener("click", deleteListItem)
        btn2.addEventListener("click", ()  => { ListTxt.contentEditable = true; } )
    }
}

function deleteListItem() {
    this.parentNode.remove()
}


function EditList(){
    ListTxt.contentEditable = true;

}


