class Panel {
    constructor(){
        this.scale = 0.1;
        // this.draw();
    }

    draw(){
        // console.log(oX, oY);
        context.fillStyle = 'rgba(255,0,0,0.8)';
        // 변환 초기화
        context.resetTransform();
        // context.setTransform(oX-150, oY-150, 300, 300);

        context.fillRect(oX-150, oY-150, 300, 300);
        context.fillStyle = '#fff';
        // context.fillText();
        if(selectedBox){
            context.fillText(selectedBox.index, oX,oY);
        }
    }
}