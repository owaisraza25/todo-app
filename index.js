var Btn = document.getElementById("addbtn")
var textInput = document.getElementById("text-input")
var task = document.getElementById("task")
var container = document.getElementById("container-")




Btn.addEventListener("click", todoList)

function todoList(){
    var div = document.createElement("div")
    var p = document.createElement ("span")
    var btn = document.createElement("button")

    

    if(textInput.value === ""){
        alert("please fill to do....")
    }else{
     
        btn.innerText = "delete"
        btn.className = "dlt-btn" 
        p.className ="textstyle"
        div.className ="todo_task"
        p.innerText = textInput.value
        div.appendChild(p)
        div.appendChild(btn)
        container.appendChild (div)
        textInput.value = ""
        btn.addEventListener("click", deleteListItem)

    }
}


function deleteListItem() {
    this.parentNode.remove()
}
 