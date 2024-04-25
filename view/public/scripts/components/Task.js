const Task = function(obj){
    this.id = obj.id;
    this.name = obj.name;
}
Task.prototype.render = function(){
    this.container = Util.nodefy(`<div id="${this.id}" class="task-container"></div>`);
    this.taskName = Util.nodefy(`<div class="task-name">${this.id}</div>`);

    this.container.appendChild(this.taskName);
}