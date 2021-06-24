function preload(){

}

function setup(){
    createCanvas(650, 400);
    canvas.parent('canvas');
    video = createCapture(VIDEO);
    video.size(600, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded(){
    console.log('modelLoaded');
}

function draw(){
    image(video, 0, 0, 650, 400);
}