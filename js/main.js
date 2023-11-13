var seed = "globby";
var randy = new AphidRandom(seed);
var map = [];
var arty = new artist(mappy.getContext("2d"));
var mapDims = [mappy.width, mappy.height];
var weather = "";

function initMap(){
    let rockCount = randy.rangeInt(1, 50);
    for(let r = 0; r < rockCount; r++){
        let x = randy.rangeInt(0, mapDims[0]);
        let y = randy.rangeInt(0, mapDims[1]);
        map.push(new item("rock", x, y, arty));
    }
}

function calcWeather(){
    
}

function calcLighting(){
    let dat = new Date();
    let hour = dat.getHours();
    let minute = dat.getMinutes();
    let brightness = 0;
    //Highest brightness at noon
    if(hour <= 12){
        brightness = Math.round((hour/12)*50);
    }
    if(hour > 12){
        brightness = Math.round(((23-hour) / 12)*50);
    }
    console.log(hour);
    console.log(23-hour);
    console.log(brightness);
    arty.globalBrightness = brightness;
}

function render(){
    arty.ctx.clearRect(0, 0, mapDims[0], mapDims[1]);
    for(let r = 0; r < map.length; r++){
        map[r].draw();
    }
}