$(document).ready(function(){
    //  Accessing the all three tabs i.e. All, Active & Completed
     const $all = $(".all");
     const $active = $(".active");
     const $completed = $(".completedSect");
    
    //  for adding current date for todo list
    const $today = $(".today");
    const date = new Date();
    const option = {
        day: "numeric",
        month: "long",
        year: "numeric"
    }

    $today.text(date.toLocaleDateString("en-US", option));
    
    //  for adding new items into the page and managing them for checked and unchecked form via a button
    let $btn = $(".btn");
    $btn.click(function(){
        let $taskInput = $("#newTaskInput");
        let taskName = $taskInput.val().trim();
    
        let $taskList = $("#taskList");
        let $li= $("<li>");
        $li.addClass("todo-item");
        $li.html('<input type="checkbox" onclick="toggleComplete(this)"><span>' + taskName + '</span>');
        $taskList.append($li);
      
        $taskInput.val("");
    });


    //  Managing items in the All-tab.
    $all.click(function(){

        let $todoItems = $(".todo-item");
        $todoItems.each(function(){

            $(this).css("display", "flex");

            $allTab.addClass('underline');
            $active.removeClass('underline');
            $completed.removeClass('underline');
        });
        
    });

    
    //  Managing items in the Active-tab
    $active.click(function(){

        let $completedItems = $(".todo-item.completed");
        let $activeItems = $(".todo-item:not(.completed)");
        $all.removeClass("underline");
        $active.addClass("underline");
        $completedItems.each(function(){

            $completed.removeClass("underline");
            $(this).css("display", "none");

        });

        $activeItems.each(function(){
            $(this).css("display", "flex");
        });
    });


    //  Managing items in the completed-tab
    $completed.click(function(){

        let $completedItems = $(".todo-item.completed");
        let $activeItems = $(".todo-item:not(.completed)");

        $all.removeClass("underline");
        $completed.addClass("underline");
        $completedItems.each(function(){

            $(this).css("display", "flex");

        });

        $activeItems.each(function(){
            $active.removeClass("underline");
            $(this).css("display", "none");
        });

    })


    //  showing and making the completed items
    let $inputItems = $(".item");

    $inputItems.each(function(){
        $(this).click(function(event){
            let $todoItem = $(event.target).parent();

            $todoItem.toggleClass("completed");
        });
    });


});

function toggleComplete(checkbox){
    let $todoItem = $(checkbox).parent();

    $todoItem.toggleClass('completed');
}