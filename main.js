function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status: Detecting baby";
    }
    
    img = "";
    status = "";
    objects = [];
    function preload(){
    }
    
    function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Baby";
    
    }
    
    
    function draw(){
     image(video,0,0,380,380);
    if(status!= ""){
        r = random(255);
        g = random(255);
        b = random(255);
    objectDetector.detect(video,gotResult); 
    for(i=0; i < objects.length;i++){
    document.getElementById("status").innerHTML="status:object detected";
    document.getElementById("number_of_objects").innerHTML = "number of objects detected are:" + object.length;
    fill(r,g,b);
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%" , objects[i].x,objects[i].y);
    noFill();
    stroke(r,g,b);
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    
    }
    
    }
    /*image(img ,0 ,0 ,640,420);
    fill("#0000FF");
    text("dog" ,45,75);
    noFill();
    stroke("#0000FF");
    rect(30,60,450,350);
    
    fill("#0000FF");
    text("cat",320,120);
    noFill();
    stroke("#0000FF");
    rect(300,90,270,320);*/
    }
    
    function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(video,gotResult);
    
    }
    
    function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
    }