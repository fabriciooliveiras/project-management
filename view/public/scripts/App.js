const App = function(){
    this.currentPage = 'Estimates';
    this.currentView = 'Tasks';
    this.pages = {};
}

App.prototype.registerPage = function(Page){
    this.pages[Page.name] = Page;
}

App.prototype.render = function(container){
    this.navContainer = Util.nodefy('<nav class="app-nav"><ul></ul></nav>');

    for(const key in this.pages){
        this.navContainer.appendChild(this.pages[key].menuIcon);
    }
    
    this.pagesContainer = Util.nodefy('<main class="app-body"></main>');


    container.appendChild(this.navContainer);
    this.pagesContainer.appendChild(this.pages[this.currentPage].container)
    container.appendChild(this.pagesContainer);
}

//INIT
const projectMenagement = new App();
projectMenagement.registerPage(Estimates);

//RENDER
projectMenagement.render(document.getElementById('app'));