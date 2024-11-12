    // <div class="container">
 const mainDiv= document.querySelector('.container');
//  console.log(mainDiv)
   const tasklist=document.getElementById('taskList');
   const taskinput=document.getElementById('taskInput');
//    console.log(mainDiv,taskinput,tasklist)
 function  addTask(){
    const taskText=taskinput.value.trim();
    if(taskText==!''){
        const li =document.createElement('li');
        li.textContent=taskText;
        tasklist.appendChild(li);
        tasklist.value='';

        li.addEventlistener('click',completeTask)

    }
 

 }
  function completeTask(event){
    const task=event.target
    task.classList.toggle('complete')
  }
  
