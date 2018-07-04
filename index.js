// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescription = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title) {
  taskTitles.push(title);
  taskComplete.push(false);
};

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`

//
function newTask(title, description){
  const task = {
    title: title,
    description: description,
    complete: false,


    markCompleted: function () {
      this.complete = true;
    },

    logState: function () {
      console.log(`${this.title} has${this.complete ? ' ' : ' not ' } been completed`);
    }
  };
  return task;
}



// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "😨"); // task 1
const tasks = [task1, task2]

//
task1.logState();
task1.markCompleted();
task1.logState();

console.log(tasks);
