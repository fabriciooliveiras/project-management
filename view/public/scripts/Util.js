const Util = {
    nodefy:function(str){
        let temp = document.createElement('DIV');
        temp.innerHTML = str;
        return temp.childNodes[0];
    },
    hexCharacters:[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"],
    getCharacter: function(index) {
	    return this.hexCharacters[index];
    },
    generateNewColor: function() {
	    let hexColorRep = "#"

	    for (let index = 0; index < 6; index++){
		    const randomPosition = Math.floor ( Math.random() * this.hexCharacters.length );
    	    hexColorRep += this.getCharacter( randomPosition );
	    }
	
	    return hexColorRep;
    }
}

