const Container = function(obj){
    this.name = obj.name;
    this.content = obj.container;
}
Container.prototype.render = function(){
    this.container = Util.nodefy('<div class="container-container"></div>');
    this.header = Util.nodefy('<div class="container-header-container"></div>');
    this.body = Util.nodefy('<div class="container-body-container"></div>');

    this.body.appendChild(this.content);

    this.container.appendChild(this.header);
    this.container.appendChild(this.body);
}