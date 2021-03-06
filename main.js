
song=""
leftwristx=0
leftwristy=0
rightwristx=0
rightwristy=0

function preload(){
song=loadSound("The Score - Unstoppable.mp3")
}

function setup(){
    canvas=createCanvas(500,500)
                 canvas.center()
      video=createCapture(VIDEO)
                    video.hide()
             video.size(500,500)      
posenet=ml5.poseNet(video, modelloaded)       
posenet.on("pose",gotposes)      
} 

function gotposes(results){
    if (results.length>0) {
        console.log(results)
    leftwristx=results[0].pose.leftWrist.x
    leftwristy=results[0].pose.leftWrist.y
    rigthwristy=results[0].pose.rightWrist.y
    rightwristx=results[0].pose.rightWrist.x
    
    }
}

function modelloaded(){
console.log("loaded")
}




function draw(){
        image(video,0,0,500,500)
   
}

function play(){
    song.play()
song.setVolume(1)
song.rate(1)
}
function stop(){
    song.stop()
}