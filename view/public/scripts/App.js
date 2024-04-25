const App = function(){
    this.currentPage = 'Estimates';
    this.currentView = 'Tasks';
    this.pages = {};
}

App.prototype.registerPage = function(Page){
    this.pages[Page.name] = Page;
}

App.prototype.render = function(container){

    this.navContainer = Util.nodefy('<nav class="app-nav"><div class="app-nav-toggle-btn app-nav-padding"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title></title><g id="icomoon-ignore"></g><path d="M512 0v208l-80-80-96 96-48-48 96-96-80-80zM224 336l-96 96 80 80h-208v-208l80 80 96-96z"></path></svg></div><div class="app-nav-user-container app-nav-padding"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="448" height="448" viewBox="0 0 448 448"><title></title><g id="icomoon-ignore"></g><path d="M224 0c123.75 0 224 100.25 224 224 0 123-99.75 224-224 224-124 0-224-100.75-224-224 0-123.75 100.25-224 224-224zM378.75 337.75c23.25-32 37.25-71.25 37.25-113.75 0-105.75-86.25-192-192-192s-192 86.25-192 192c0 42.5 14 81.75 37.25 113.75 9-44.75 30.75-81.75 76.5-81.75 20.25 19.75 47.75 32 78.25 32s58-12.25 78.25-32c45.75 0 67.5 37 76.5 81.75zM320 176c0-53-43-96-96-96s-96 43-96 96 43 96 96 96 96-43 96-96z"></path></svg><span class="app-nav-text">Fabricio Oliveira</span></div><ul class="app-nav-menu-container"></ul></nav>');

    this.toggleBtn = this.navContainer.childNodes[0];
    this.toggleBtn.onclick = ()=>{

        let paddingList = document.querySelectorAll('.app-nav-padding');
        for(let i=0;i<paddingList.length;i++){
            paddingList[i].classList.toggle('app-nav-padding-none');
        }
        
        let textList = document.querySelectorAll('.app-nav-text');
        for(let i=0;i<textList.length;i++){
            textList[i].classList.toggle('app-nav-text-none');
        }
    }

    for(const key in this.pages){
        let menuIcon = Util.nodefy(`<li id="${key}" class="app-nav-icon-container  app-nav-padding"><span class="app-nav-icon">${this.pages[key].icon}</span><span class="app-nav-text">${this.pages[key].name}</span></li>`);
        
        if(key === this.currentPage) menuIcon.classList.add('nav-bar-btn-clicked');

        menuIcon.onclick = this.navBtnClick.bind(this,this.pages[key],menuIcon);

        this.navContainer.childNodes[2].appendChild(menuIcon);
    }
    
    this.pagesContainer = Util.nodefy('<main class="app-body"></main>');


    container.appendChild(this.navContainer);
    this.pagesContainer.appendChild(this.pages[this.currentPage].container)
    container.appendChild(this.pagesContainer);
}

App.prototype.navBtnClick = function(Page,menuIcon){
    this.currentPage = Page.name;

    for(const key in this.pages){
        if(key === this.currentPage){

            document.getElementById(key).classList.add('nav-bar-btn-clicked');
            this.pagesContainer.innerHTML = '';
            this.pagesContainer.appendChild(this.pages[key].container);

        }else{
            document.getElementById(key).classList.remove('nav-bar-btn-clicked');
        }
    }
}

//INIT
const projectMenagement = new App();
projectMenagement.registerPage(Estimates);
projectMenagement.registerPage(Suport);

//RENDER
projectMenagement.render(document.getElementById('app'));