class artist{
    constructor(ctx, backCol){
        this.ctx = ctx;
        this.backColor = backCol;
        this.globalBrightness = 50; //lightness value for hsl
    }
    drawRock(x, y){
        this.ctx.beginPath();
        this.ctx.fillStyle = "hsl(45, 0%,"+this.globalBrightness+"%)";
        this.ctx.strokeStyle = "hsl(45, 0%,"+this.globalBrightness+"%)";;
        this.ctx.arc(x, y, 15, 0, 2*Math.PI, false);
        this.ctx.fill();
        this.ctx.stroke();
    }
    drawGrass(){

    }
}