const list = [ 
    { 
        id: 1,
        name: 'create a post', 
        status: 'TODO', 
        priority: 'low'  
    }, 
    { 
        id: 2,
        name: 'test', 
        status: 'Done', 
        priority: 'high'  
    } 
    ] 

  
function changeStatus(task, changeTask){
    list[list.findIndex(item => item.name == task)].status = changeTask 
};


function addTask(name, id = list.length + 1, status = "TODO", priority = "low"){
  let taskObj = []
  taskObj.id = id
  taskObj.name = name
  taskObj.status = status
  taskObj.priority = priority
    list.push(taskObj)
}

function deleteTask(task){
    list.splice(list.findIndex(item => item.name == task), 1)
}

function showList(){
    
    let toDo = []
    let inProgress = []
    let done = []
    
    for(let i = 0; i < list.length; i ++){
      if (list[i].status === "TODO"){
        if(toDo.length === 0){
        toDo.push(list[i].name)
        }else{
        toDo.push("\n" + list[i].name)
        }}
      
      else if (list[i].status === "In Progress"){
        if(inProgress.length === 0){
        inProgress.push(list[i].name)
        }else{
        inProgress.push("\n" + list[i].name)
        }}
      
      else if (list[i].status === "Done"){
      	if(done.length === 0){
      	done.push(list[i].name)
      	}else{
        done.push("\n" + list[i].name)
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
 
function showBy(key){
  
}

changeStatus("create a post", "Done")
addTask('have a walk')
deleteTask('have a walk')
showList()
