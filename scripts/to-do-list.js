/* 

features:
we can use array to store the current values
and use unordered list for the GUI

Add -> create and append
Edit -> I need to get the current id or reference of that current data
Delete -> node.remove()
Clear -> node.remove()?? or just clear it using innerHtml

*/

const tasks = document.getElementsByClassName("task")
const deleteTasks = document.getElementsByClassName("task-delete")
const createTask = document.getElementById("add-task")
const taskContainer = document.querySelector(".tasks")

const changeTaskState = (task) => {
    if(!task.classList.contains("task-cross"))
        task.classList.add("task-cross")
    else
        task.classList.remove("task-cross")
}

const deleteTask = (task) => {
    task.parentNode.parentNode.remove()
}

const addTask = () => {
    // creating
    let newTaskContent = prompt("Please Add a new task: ");
    let listData = document.createElement("li")
    let paraData = document.createElement("p")
    let divData = document.createElement("div")
    let buttonEdit  = document.createElement("button")
    let buttonDelete  = document.createElement("button")
    
    listData.classList.add("task")
    paraData.setAttribute("data-state", "task-state")
    divData.classList.add("task-selections")
    buttonEdit.classList.add("task-edit")
    buttonDelete.classList.add("task-delete")
    buttonEdit.textContent = "Edit"
    buttonDelete.textContent = "Delete"

    divData.append(buttonEdit)
    divData.append(buttonDelete)
    paraData.textContent = newTaskContent
    listData.append(paraData)
    listData.append(divData)
    
    taskContainer.append(listData)

    buttonDelete.addEventListener("click", (e)=>{
        deleteTask(e.target)
    })
    paraData.addEventListener("click", (e)=>{
        changeTaskState(e.target)
    })
}


createTask.addEventListener("click", addTask)


const start = () => {
    Array.from(tasks).forEach((task) => {
        task.children[0].addEventListener("click", (e)=>{
            changeTaskState(e.target)
        })
    })
    
    Array.from(deleteTasks).forEach((task) => {
        task.addEventListener("click", (e) => {
            deleteTask(e.target)
        })
    })
}

start()