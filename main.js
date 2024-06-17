function preload(){

}
function draw(){
    image(Video,0,0,500,500);
}

function setup(){
    Canvas = createCanvas(500,500);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.hide();
}
