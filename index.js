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
    } else  {
        
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
        btn2.addEventListener("click",  editListItem)
    } 
}

function deleteListItem() {
    this.parentNode.remove()
}


function editListItem() {
    var listItem = this.parentNode;
    var listTxt = listItem.querySelector(".textstyle");
    
    listTxt.disabled = false; // Enable the input field for editing
    listTxt.focus(); // Set focus to the input field for easy editing
    
    // Add an event listener to the input field to detect the Enter key press and save the edited value
    listTxt.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        listTxt.disabled = true; // Disable the input field after editing
        // listTxt.removeEventListener("keyup", editListItem); // Remove the keyup event listener
      }
    });
  }

