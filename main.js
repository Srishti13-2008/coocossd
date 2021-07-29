img="";
status="";
object=[];
function preload(){
    img= loadImage('dog_cat.jpg')
}
function setup(){
    canvas= createCanvas(640,420)
    canvas.center()
    object_detector= ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects"
}
function modelloaded(){
    console.log("modelloaded")
    status=true
    object_detector.detect(img,gotresults)
}
function gotresults(error,results){
if(error){
console.log(error)
}
else{
    console.log(results)
}
}
function draw(){
    image(img,0,0,650,420)
if(status!=""){
    for(i=0;i<object.length;i++){
        document.getElementById("status").innerHTML="status:Object detected";
        fill(255,0,0)
        percent=floor(object[i].confidence*100);
        text(object[i].label+""+percent+"%",object[i].x+15,object[i].y+15);
        noFill();
        stroke(255,0,0)
        rect(object[i].x, object[i].y, object[i].width, object[i].height)
    }
}
}