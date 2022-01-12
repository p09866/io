var img = "";
var status = "";
function preload(){
img = loadImage("dog_cat.jpg")
}

function setup(){
canvas = createCanvas(640,420);
canvas.center();
obj_detected=ml5.objectDetector('cocossd',modelLoaded)
}

function draw(){
image(img,0,0,640,420);
fill("red");
text("dog",90,100);
noFill();
stroke("red");
rect(60,70,450,300);

fill("red");
text("cat",300,100);
noFill();
stroke("red");
rect(300,80,300,300);
}

function modelLoaded(){
    console.log("CocoSSD has been loaded successfully");
    status = true;
    obj_detected.detect(img, gotresults);
}

function gotresults(error, results){
     if(error){
         console.log(error);
     }else{
         console.log(results);
     }
}
