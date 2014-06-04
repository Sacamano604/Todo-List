function addItem() {
    var value = document.getElementById('userInput').value,
        taskListContainer = document.getElementById('task-list');
    var html = '<article id="task-item" style="padding-bottom: 10px;">' + value + ' <button type="button" class="btn btn-danger" title="Delete tasks">Remove</button>' +
        '</article>';
    
    taskListContainer.insertAdjacentHTML('beforeend', html);
}

var deleteItem = function(event){
    var isDeleteBtnClicked = event.target.className === 'btn btn-danger';
    if(isDeleteBtnClicked){
        var taskElement = event.target.parentNode;
        document.getElementById('task-list').removeChild(taskElement);
    }
}
document.getElementById('task-list').addEventListener('click', deleteItem);
document.getElementById('add-task').addEventListener('click', addItem);
