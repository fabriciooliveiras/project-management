const data = [{
    id:0,
    name:'Key Art - Loading Screen',
    creator:{img:'',name:'Fabricio'},
    project:'Project Name',
    estimate:4,
    scope:'Character',
    team:'2D',
    amount:1,
    time:'19h',
    level:'Senior',
    deliverable:'Concept',
    notes:'Notes',
    createdAt:'19/04/2024',
    updateddAt:'19/04/2024',
},
{
    id:1,
    name:'Task name',
    creator:{img:'',name:'Valeria'},
    project:'Project Name',
    estimate:4,
    scope:'Environment',
    team:'3D',
    amount:1,
    time:'20h',
    level:'Senior',
    deliverable:'Concept',
    notes:'Notes',
    createdAt:'19/04/2024',
    updateddAt:'19/04/2024',
},
{
    id:2,
    name:'Task name',
    creator:{img:'',name:'Ricardo'},
    project:'Project Name',
    estimate:4,
    scope:'Environment',
    team:'3D',
    amount:1,
    time:'20h',
    level:'Senior',
    deliverable:'Concept',
    notes:'Notes',
    createdAt:'19/04/2024',
    updateddAt:'19/04/2024',
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

        const taskContainer = new Container({type:'task',id:task.data.id,title:task.data.name,content:[task]});
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

