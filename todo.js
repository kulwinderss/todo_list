let count_task=0;

window.addEventListener('load', ()=>{
    const form= document.querySelector("#task-form");
    const input= document.querySelector("#task-input");
    const list= document.querySelector("#tasks");


    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const task = input.value;
        if (!task) {
            return;
        } 

 //counting no. of tasks
 const countertask = document.getElementById('no_of_tasks');
 count_task++;
 countertask.innerHTML = count_task;

        //..................task section..................
        const task_div = document.createElement("div");
        task_div.classList.add("task");
        list.appendChild(task_div);
       
        //completed check button.................................
        const completed_button= document.createElement("button");
        completed_button.classList.add("Completed");
        completed_button.innerHTML = "O";
        task_div.appendChild(completed_button);

         //completed button event listener
         completed_button.addEventListener('click', ()=>{
            
            task_input.style.textDecoration="line-through";
            task_input.setAttribute("readonly", "readonly");
           
    })

        //task text...............
        const task_content_div = document.createElement("div");
        task_content_div.classList.add("content");
        task_div.appendChild(task_content_div);
        

        const task_input= document.createElement("input");
        task_input.classList.add("text");
        task_input.type = "text";
        task_input.value= task;
        task_input.setAttribute("readonly", "readonly");
        task_content_div.appendChild(task_input);

        const task_actions_div= document.createElement("div");
        task_actions_div.classList.add("actions");
        task_div.appendChild(task_actions_div);

       

        //create edit button
        const edit_botton= document.createElement("button");
        edit_botton.classList.add("Edit");
        edit_botton.innerHTML = "Edit";

        //create delete button
        const delete_button= document.createElement("button");
        delete_button.classList.add("Delete");
        delete_button.innerHTML = "Delete";


        task_actions_div.appendChild(edit_botton);
        task_actions_div.appendChild(delete_button);
        
        
        //edit button event listener
        edit_botton.addEventListener('click', ()=>{
            
            if (edit_botton.innerText.toLowerCase() =="edit") {
                    task_input.removeAttribute("readonly");
                    task_input.focus();
                    edit_botton.innerText = "Save";
                    task_input.style.textDecoration="none"
            }else{
                task_input.setAttribute("readonly", "readonly");
                edit_botton.innerText ="Edit";
                
            }
        });

            //delete button event listener
        delete_button.addEventListener('click', ()=>{
            if (confirm("Are you sure you want to delete this task?")) {
                list.removeChild(task_div); 
                count_task--;
                countertask.innerHTML = count_task;
            }
        })
        
    

        input.value = "";

           //complete all the task button event listener
        complete_all_task.addEventListener('click', ()=>{
            task_input.style.textDecoration="line-through";
            task_input.setAttribute("readonly", "readonly");
         });


        
   
})
});
