const Util = {
    nodefy:function(str){
        let temp = document.createElement('DIV');
        temp.innerHTML = str;
        return temp.childNodes[0];
    }
}

