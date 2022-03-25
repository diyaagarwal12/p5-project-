function preload(){

}

function setup(){
    canvas= createCanvas(570,420);
    canvas.position(380,190);
    video= createCapture(VIDEO);
    video.hide();
  

}

function draw(){
    image(video,110,80,340,255);


    fill(0,128,0);
      stroke(0,128,0);
      circle(80,65,40);

      fill(0,128,0);
      stroke(0,128,0);
      circle(475,65,40);

      fill(0,128,0);
      stroke(0,128,0);
      circle(475,355,40);

      fill(0,128,0);
      stroke(0,128,0);
      circle(80,355,40);

      fill(0,128,0);
      stroke(0,128,0);
      rect(110, 60, 340, 5);

      fill(0,128,0);
      stroke(0,128,0);
      rect(110, 350, 340, 5);

      fill(200,128,0);
      stroke(0,128,0);
      circle(80,65,20);

      fill(200,128,0);
      stroke(0,128,0);
      circle(475,355,20);

      fill(200,128,0);
      stroke(0,128,0);
      circle(475,65,20);

      fill(200,128,0);
      stroke(0,128,0);
      circle(80,355,20);
      
    
  
}

function take_snapshot(){
    save('student_name.png');
}

