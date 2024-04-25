const Page = function(obj){
    this.name = obj.name;
    this.icon = obj.icon;
    this.views = obj.views;
    this.currentView = Object.keys(this.views)[0];
}
Page.prototype.render = function(){
    
    this.container = Util.nodefy('<div class="page-container"></div>');
    this.menuContainer = Util.nodefy('<div class="page-view-container"></div>');
    this.bodyContainer = Util.nodefy('<div class="page-body-container"></div>');


    //CREATES ALL THE VIEWS BUTTONS
    for(const key in this.views){
        let tempItem = Util.nodefy(`<span id="${key}" class="page-view-icon" title="${this.views[key].title}">${this.views[key].icon}</span>`)
        
        tempItem.onclick = this.viewBtnClick.bind(this,key);
        
        if(key == this.currentView) tempItem.classList.add('page-view-icon-cliked');

        this.menuContainer.appendChild(tempItem);
    }

    //LOADS THE VIEW CONTENT
    this.bodyContainer.innerText = this.views[this.currentView].body;

    //DOM CREATION
    this.container.appendChild(this.menuContainer);
    this.container.appendChild(this.bodyContainer);
}

Page.prototype.viewBtnClick = function(view){

    //UPDATES CURRENT VIEW
    this.currentView = view;

    let viewBtns = document.getElementsByClassName('page-view-container')[0].childNodes;
    
    //ANIMATE THE VIEWS BUTTONS
    for (let i = 0; i < viewBtns.length; i++) {
        const btn = viewBtns[i];
        if(this.currentView === btn.getAttribute('id')){
            btn.classList.add('page-view-icon-cliked');
        }else{
            btn.classList.remove('page-view-icon-cliked');
        }
    }

    this.bodyContainer.innerHTML = '';
    // this.bodyContainer.appendChild(this.views[this.currentView].body);
    this.bodyContainer.innerHTML = this.views[this.currentView].body;

}