const data = [{
    id:0,
    name:'task-0'
},
{
    id:1,
    name:'task-1'
},
{
    id:2,
    name:'task-2'
}
];


const TasksView = function(data){
    this.tasks = data;
}

TasksView.prototype.render= function(){
    this.container = Util.nodefy('<div class="view-container"></div>');

    for (let i = 0; i < this.tasks.length; i++) {

        const task = new Task(this.tasks[i]);
        task.render();

        const taskContainer = new Container(task);
        taskContainer.render();

        this.container.appendChild(taskContainer.container);
    }

    //HORIZONTAL SCROLL INSIDE THE CONTAINER
    this.container.addEventListener("wheel", (event) => {
        this.container.scrollBy({
            left: event.deltaY < 0 ? -70 : 70,
        });
        event.preventDefault();
    });

}
const taskView = new TasksView(data);
taskView.render();

