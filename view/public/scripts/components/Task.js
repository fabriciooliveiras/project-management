const Task = function(obj){
    this.type = obj.type;
    this.data = obj.content;
    this.labelColor = Util.generateNewColor();
    console.log(this.labelColor);
}
Task.prototype.render = function(){
    this.container = Util.nodefy(`<div id="${this.data.id}" class="task-container"></div>`);

    this.taskHeader = Util.nodefy(`<div class="task-header" style="border-left:4px solid ${this.labelColor};"><div class="task-header-toggle-btn" style="border-left:2px solid ${this.labelColor};"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="768" height="768" viewBox="0 0 768 768"><title></title><g id="icomoon-ignore"></g><path d="M531 274.5l45 45-192 192-192-192 45-45 147 147z"></path></svg></div><div class="task-header-text"><span>${(this.type === 'task') ? 'Project' : 'Task'}</span>${this.data.project}</div><div class="task-header-text"><span>Team</span>${this.data.team}</div><div class="task-header-text"><span>Amount</span>${this.data.amount}</div><div class="task-header-text"><span>Time</span>${this.data.time}</div></div>`);

    this.taskBodyContainer = Util.nodefy(`<div class="task-body-container"></div>`);

    this.taskInfoContainer = Util.nodefy(`<div class="task-info-container" style="border-left:4px solid ${this.labelColor};"><div class="task-info-text" style="border-left:2px solid ${this.labelColor};"><span>Level</span>${this.data.level}</div><div class="task-info-text"><span>Deliverable</span>${this.data.deliverable}</div><div class="task-info-text"><span>Scope</span>${this.data.scope}</div><div class="task-info-text"><span>Creator</span>${this.data.creator.img}</div></div>`);

    this.taskPipelineContainer = Util.nodefy(`<div class="task-pipeline-container" style="border-left:4px solid ${this.labelColor};"><div class="task-pipeline-column" style="border-left:2px solid ${this.labelColor};"><span>Pipeline</span></div><div class="task-pipeline-column"><span>Options</span></div><div class="task-pipeline-column"><span>Time</span></div><div class="task-pipeline-column"><span>Feedback</span></div><div class="task-pipeline-column"><span>Risk</span></div><div class="task-pipeline-column"><span>Total</span></div></div>`);

    for (let i = 0; i < this.data.pipeline.length; i++) {
        const subTask = this.data.pipeline[i];

        this.taskPipelineContainer.childNodes[0].appendChild(Util.nodefy(`<span>${subTask.name}</span>`));
        this.taskPipelineContainer.childNodes[1].appendChild(Util.nodefy(`<span>${subTask.options}</span>`));
        this.taskPipelineContainer.childNodes[2].appendChild(Util.nodefy(`<span>${subTask.time}</span>`));
        this.taskPipelineContainer.childNodes[3].appendChild(Util.nodefy(`<span>${subTask.feedback}</span>`));
        this.taskPipelineContainer.childNodes[4].appendChild(Util.nodefy(`<span>${subTask.risk}</span>`));
        this.taskPipelineContainer.childNodes[5].appendChild(Util.nodefy(`<span>${subTask.total}</span>`));
        
    }

    this.taskHeader.childNodes[0].onclick = ()=>{
        this.taskHeader.childNodes[0].classList.toggle('rotate');
        this.taskBodyContainer.classList.add('opened');
        this.taskBodyContainer.classList.toggle('closed');
    }

    this.container.appendChild(this.taskHeader);
    this.taskBodyContainer.appendChild(this.taskInfoContainer);
    this.taskBodyContainer.appendChild(this.taskPipelineContainer);
    this.container.appendChild(this.taskBodyContainer);
}