class Panel {
    constructor(){
        this.draw();
    }

    draw(){
        console.log(oX, oY);
        context.fillStyle = 'rgba(255,0,0,0.8)';
        context.fillRect(oX-150, oY-150, 300, 300);
        context.fillStyle = '#fff';
        // context.fillText();
        if(selectedBox){
            context.fillText(selectedBox.index, oX,oY);
        }
    }
}