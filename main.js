leftwristX = 0
rightwristX = 0
diffrence = 0
    function setup(){ 
    video = createCapture(VIDEO);
    video.size(400,400);
    
    canvas = createCanvas(400, 400);
    canvas.position(650, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    function modelLoaded(){
    console.log('Posenet is Initialized');
    }
    function gotPoses(results){
    if(results.length > 0 ){
    console.log(results);
    leftwristX = results[0].pose.leftwrist.x;
    rightwristX = results[0].pose.rightwrist.x;
    diffrence = floor(leftwristX - rightwristX)
    }
    }

    function draw(){
    background(	"#00FFFF");
    textSize(10);
    fill('#FFD700')
    text('Ibrahim',50,400)
    }