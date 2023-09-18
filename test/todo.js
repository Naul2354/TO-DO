// todo.js

// function addTask(tasks, task) {
//     tasks.push(task);
//   }
function addTask(tasks, task) {
    if (task.trim() !== '') {
      tasks.push(task);
    }
  }
  
  function deleteTask(tasks, index) {
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
    }
  }

  module.exports = { addTask, deleteTask };
  