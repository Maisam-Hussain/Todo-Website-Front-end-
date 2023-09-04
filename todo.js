 //  Accessing the all three tabs i.e. All, Active & Completed
    const all = document.querySelector(".all");
    const active = document.querySelector(".active");
    const completed = document.querySelector(".completedSect");


    //  for adding current date for todo list
    let today = document.querySelector(".today");

    let date = new Date();
    const option = {
      day: "numeric",
      month: "long",
      year: "numeric"
    }

    today.textContent = date.toLocaleDateString("en-US", option);


    //  for adding new items into the page and managing them for checked and unchecked form via a button
    let btn = document.querySelector(".btn");

    btn.addEventListener("click", function(){

    let taskInput = document.getElementById("newTaskInput");
    let taskName = taskInput.value.trim();

    let taskList = document.getElementById("taskList");
    let li= document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = '<input type="checkbox" onclick="toggleComplete(this)"><span>' + taskName + '</span>';
    taskList.appendChild(li);
  
    taskInput.value = "";

    });

    function toggleComplete(checkbox) {

      var todoItem = checkbox.parentElement;
      todoItem.classList.toggle('completed');

    }    


    //  Managing items in the All-tab.

    let allTab = all.addEventListener("click", function(){

      let todoItems = document.querySelectorAll(".todo-item");

      todoItems.forEach(function(item){

        item.style.display = 'flex';
        all.classList.add("underline");
        active.classList.remove("underline");
        completed.classList.remove("underline");

      });

    });


    //  Managing items in the Active-tab.

    let activeTab = active.addEventListener("click", function(){

      let completedItems = document.querySelectorAll(".todo-item.completed");
      let activeItems = document.querySelectorAll(".todo-item:not(.completed)");
      all.classList.remove("underline");
      active.classList.add("underline");

      completedItems.forEach(function(item){

        completed.classList.remove("underline");
        item.style.display = 'none';

      });

      activeItems.forEach(function(item){

        item.style.display = 'flex';

      });

    });


    //  Managing items in the Completed-tab

    let completedTab = completed.addEventListener("click", function(){

      let completedItems = document.querySelectorAll(".todo-item.completed");
      let activeItems = document.querySelectorAll(".todo-item:not(.completed)");
      all.classList.remove("underline");
      completed.classList.add("underline");

      completedItems.forEach(function(item){

        item.style.display = 'flex';

      });

      activeItems.forEach(function(item){

        active.classList.remove("underline");
        item.style.display = 'none';

      });

    });


      let inputItems = document.querySelectorAll(".item");

      inputItems.forEach(function(InputItem){
        InputItem.addEventListener("click", function(event){

          var todoItem =event.target.parentElement;
          todoItem.classList.toggle('completed');
          
        });
      });