const Task = function(obj){
    this.data = obj;
}
Task.prototype.render = function(){
    this.container = Util.nodefy(`<div id="${this.data.id}" class="task-container"></div>`);

    this.taskHeader = Util.nodefy(`<div class="task-header"><div class="task-header-text"><span>${(this.type === 'Task') ? 'Project' : 'Task'}</span>${this.data.project}</div><div class="task-header-text"><span>Team</span>${this.data.team}</div><div class="task-header-text"><span>Amount</span>${this.data.amount}</div><div class="task-header-text"><span>Time</span>${this.data.time}</div></div>`);

    this.taskBodyContainer = Util.nodefy(`<div class="task-body-container"></div>`);

    this.taskInfoContainer = Util.nodefy(`<div class="task-info-container"><div class="task-info-text"><span>Level</span>${this.data.level}</div><div class="task-info-text"><span>Deliverable</span>${this.data.deliverable}</div><div class="task-info-text"><span>Scope</span>${this.data.scope}</div><div class="task-info-text"><span>Creator</span>${this.data.creator.img}</div></div>`);



    this.container.appendChild(this.taskHeader);
    this.taskBodyContainer.appendChild(this.taskInfoContainer);
    this.container.appendChild(this.taskBodyContainer);
}