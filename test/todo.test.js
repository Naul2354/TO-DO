// todo.test.js

const { addTask, deleteTask } = require('./todo');

describe('addTask function', () => {
  it('should add a task to the tasks array', () => {
    const tasks = [];
    addTask(tasks, 'Task 1');
    expect(tasks).toContain('Task 1');
  });

  it('should not add a task if the task is empty', () => {
    const tasks = [];
    addTask(tasks, '');
    expect(tasks).toHaveLength(0);
  });
});

describe('deleteTask function', () => {
  it('should delete a task from the tasks array by index', () => {
    const tasks = ['Task 1', 'Task 2', 'Task 3'];
    deleteTask(tasks, 1); // Delete the task at index 1
    expect(tasks).not.toContain('Task 2');
  });

  it('should not delete a task if the index is out of bounds', () => {
    const tasks = ['Task 1', 'Task 2', 'Task 3'];
    deleteTask(tasks, 5); // Try to delete a task at an out-of-bounds index
    expect(tasks).toHaveLength(3);
  });

  it('should not delete a task if the index is negative', () => {
    const tasks = ['Task 1', 'Task 2', 'Task 3'];
    deleteTask(tasks, -1); // Try to delete a task with a negative index
    expect(tasks).toHaveLength(3);
  });
});
