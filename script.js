const task_title = document.querySelector("#task-title") ;
const task_description = document.querySelector("#task-description") ;
const task_date = document.querySelector("#task-date") ; 
const add_task_btn = document.querySelector(".btn") ; 
const task_list = document.querySelector("#task-list") ;

add_task_btn.addEventListener("click",function(event) {
    event.preventDefault();
    if(task_title.value == '' && task_description.value == '' && task_date.value == '') {
        alert("empty..") ;
    }
    else {
        const newRow = document.createElement('tr') ;
        
        const newTaskTitle = document.createElement('th') ;
        newTaskTitle.innerHTML = task_title.value ;
        newRow.appendChild(newTaskTitle);

        const newTaskDescription = document.createElement('th') ;
        newTaskDescription.innerHTML = task_description.value ; 
        newRow.appendChild(newTaskDescription);

        const newTaskDate = document.createElement('th') ; 
        newTaskDate.innerHTML = task_date.value ; 
        newRow.appendChild(newTaskDate);

        task_list.appendChild(newRow);  
    }
})