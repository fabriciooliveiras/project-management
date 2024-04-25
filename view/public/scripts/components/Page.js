const Page = function(obj){
    this.name = obj.name;
    this.icon = obj.icon;
    this.views = obj.views;
    this.currentView = 0;
}
Page.prototype.render = function(){
    
    this.container = Util.nodefy('<div class="page-container"></div>');
    this.menuContainer = Util.nodefy('<div class="page-menu-container"></div>');
    this.bodyContainer = Util.nodefy('<div class="page-body-container"></div>');

    for(let i=0;i<this.views.length;i++){
        let tempItem = Util.nodefy(`<span class="page-menu-icon" title="${this.views[i].title}">${this.views[i].icon}</span>`)
        this.menuContainer.appendChild(tempItem);
    }

    this.bodyContainer.innerText = this.views[0].body;

    this.container.appendChild(this.menuContainer);
    this.container.appendChild(this.bodyContainer);
}