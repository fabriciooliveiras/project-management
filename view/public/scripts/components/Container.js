const Container = function(obj){
    this.type = obj.type;
    this.id = obj.id;
    this.title = obj.title;
    this.content = obj.content;
}
Container.prototype.render = function(){

    this.container = Util.nodefy(`<div class="container-container"></div>`);
    this.headerContainer = Util.nodefy(`<div class="container-header-container"><span class="container-header-title"><span>${this.type}</span>${this.title}</span><span class="container-header-id"><span>id</span>${this.id}</span><span class="container-header-btn"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="640" height="640" viewBox="0 0 640 640"><title></title><g id="icomoon-ignore"></g><path d="M320.032 249.6c-38.88 0-70.432 31.52-70.432 70.4s31.552 70.4 70.432 70.4c38.88 0 70.368-31.52 70.368-70.4s-31.488-70.4-70.368-70.4zM96.032 249.6c-38.88 0-70.432 31.52-70.432 70.4s31.552 70.4 70.432 70.4c38.88 0 70.368-31.552 70.368-70.4s-31.488-70.4-70.368-70.4zM544.032 249.6c-38.88 0-70.432 31.52-70.432 70.4s31.552 70.4 70.432 70.4c38.88 0 70.368-31.52 70.368-70.4s-31.488-70.4-70.368-70.4z"></path></svg></span></div>`);
    this.bodyContainer = Util.nodefy('<div class="container-body-container"></div>');

    for (let i = 0; i < this.content.length; i++) {

        const content = this.content[i];
        this.bodyContainer.appendChild(content.container);
        
    }

    this.container.appendChild(this.headerContainer);
    this.container.appendChild(this.bodyContainer);
}