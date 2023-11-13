class artist{
    constructor(ctx, backCol){
        this.ctx = ctx;
        this.backColor = backCol;
        this.globalBrightness = 50; //lightness value for hsl
        this.moonHSLA = "hsla(209, 100%, 86%, .05)";
        this.moonColor = {ang: 209, sat: 100, bright: 86, op: .5};
        this.sunHSLA = "hsla(50, 100%, 90%, .1)";
        this.sunColor = {ang: 50, sat: 100, bright: 90, op: .5};
    }
    drawRock(x, y){
        let rockCol = 45;
        this.ctx.beginPath();
        this.ctx.fillStyle = "hsla("+ rockCol + ", 5%,"+this.globalBrightness+"%, 1)";
        this.ctx.strokeStyle = "hsla("+ rockCol + ", 5%,"+this.globalBrightness+"%, 1)";
        this.ctx.arc(x, y, 15, 0, 2*Math.PI, false);
        this.ctx.fill();
        this.ctx.stroke();
    }
    drawGrass(){

    }
}