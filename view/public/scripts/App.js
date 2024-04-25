const App = function(){
    this.currentPage = 'Estimates';
    this.currentView = 'Tasks';
    this.pages = {};
}

App.prototype.registerPage = function(Page){
    this.pages[Page.name] = Page;
}

App.prototype.render = function(container){
    this.navContainer = Util.nodefy('<nav class="app-nav"><div class="app-nav-toggle-btn app-nav-padding"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title></title><g id="icomoon-ignore"></g><path d="M512 0v208l-80-80-96 96-48-48 96-96-80-80zM224 336l-96 96 80 80h-208v-208l80 80 96-96z"></path></svg></div><div class="app-nav-user-container app-nav-padding"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="448" height="448" viewBox="0 0 448 448"><title></title><g id="icomoon-ignore"></g><path d="M224 0c123.75 0 224 100.25 224 224 0 123-99.75 224-224 224-124 0-224-100.75-224-224 0-123.75 100.25-224 224-224zM378.75 337.75c23.25-32 37.25-71.25 37.25-113.75 0-105.75-86.25-192-192-192s-192 86.25-192 192c0 42.5 14 81.75 37.25 113.75 9-44.75 30.75-81.75 76.5-81.75 20.25 19.75 47.75 32 78.25 32s58-12.25 78.25-32c45.75 0 67.5 37 76.5 81.75zM320 176c0-53-43-96-96-96s-96 43-96 96 43 96 96 96 96-43 96-96z"></path></svg><span class="app-nav-text">Fabricio Oliveira</span></div><ul class="app-nav-menu-container"></ul><div class="app-nav-suport-container app-nav-padding"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="768" height="768" viewBox="0 0 768 768"><title></title><g id="icomoon-ignore"></g><path  d="M384 192q52.5 0 90 37.5t37.5 90q0 40.5-48 83.25t-48 77.25h-63q0-34.5 15-59.25t33-36 33-27.75 15-37.5q0-25.5-19.5-44.25t-45-18.75-45 18.75-19.5 44.25h-63q0-52.5 37.5-90t90-37.5zM384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM352.5 576v-64.5h63v64.5h-63z"></path></svg><span class="app-nav-text">Suport</span></div></nav>');

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

    this.suportBtn = this.navContainer.childNodes[3];
    this.suportBtn.onclick = ()=>{
        console.log('suport-btn');
    }

    for(const key in this.pages){
        this.pages[key].menuIcon.classList.add('app-nav-padding');
        this.navContainer.childNodes[2].appendChild(this.pages[key].menuIcon);
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