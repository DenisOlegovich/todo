const list = {
    "create a task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
   }
function changeStatus(task, changetask){
    list[task] = changetask
}

function addTask(task){
    list[task] = "To Do"
}

function deleteTask(task){
    delete list[task]
}

function showList(){
    
    let toDo = []
    let inProgress = []
    let done = []
    
    for(let key in list){
      if (list[key] === "To Do"){
        if(toDo.lenght === 0){
        toDo.push(key)
        }else{
        toDo.push("\n" + key)
        }}
      
      else if (list[key] === "In Progress"){
        if(inProgress.length === 0){
        inProgress.push(key)
        }else{
        inProgress.push("\n" + key)
        }}
      
      else if (list[key] === "Done"){
      	if(done.length === 0){
      	done.push(key)
      	}else{
        done.push("\n" + key)
      }}
    }
 console.log(
`Todo:
${toDo.length > 0 ? toDo:"-"}
In Progress: 
${(inProgress.length > 0 ? inProgress:"-")}
Done:
${done.length > 0 ? done:"-"}`) 
 }
 
changeStatus("write a post", "Done")
addTask('have a walk')
deleteTask('have a walk')
showList()
