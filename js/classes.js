class item{
    constructor(nam, x, y, art){
        this.name = nam;
        this.x = x;
        this.y = y;
        this.art = art;
    }
    draw(){
        this.art.drawRock(this.x, this.y);
    }
}