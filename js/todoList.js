// Function to add item
function addItem() {
    var value = document.getElementById('userInput').value,
        taskListContainer = document.getElementById('task-list');
    var html = '<li id="task-item" style="padding-bottom: 10px;">' + value + ' <button type="button" class="btn btn-danger">Remove from List</button>' + ' <button type="button" class="btn btn-success">Mark Complete</button>' +
        '</li>';
    taskListContainer.insertAdjacentHTML('beforeend', html);
    document.getElementById('userInput').value = '';
}
//Function for deleting items
var deleteItem = function(event) {
    var isDeleteBtnClicked = event.target.className === 'btn btn-danger';
    if(isDeleteBtnClicked) {
        var taskElement = event.target.parentNode;
        document.getElementById('task-list').removeChild(taskElement);
    }
}
//Function for marking items as complete. Will apply a classname which has a css line-through text-decoration applied.
//No by design but when items are marked complete they go to the bottom of the list, must be with the classname change...
var completeItem = function(event) {
    var isCompleteBtnClicked = event.target.className === 'btn btn-success';
    if (isCompleteBtnClicked) {
        var taskElement = event.target.parentNode;
        taskElement.className = 'complete';
        document.getElementById('task-list').appendChild(taskElement);
    }
}
//event listeners for the specific functions to be called with click or enter key
document.getElementById('userInput').addEventListener('keypress', function(enter) {
    if (enter.keyCode === 13) {
        addItem();
        enter.preventDefault();
    }
});
document.getElementById('add-task').addEventListener('click', addItem);
document.getElementById('task-list').addEventListener('click', deleteItem);
document.getElementById('task-list').addEventListener('click', completeItem);



