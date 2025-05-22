$(document).ready(function(){
    $("#addTask").click(function(){
       var task= $('#task').val();
       if(task){
        $('#tasklist').append('<li>'+task+'</li>');
        $('#tasklist').val('');
       }
});
});