function setup() {
   createCanvas(2400,800);
}

function draw() {
   background(255);
   noStroke();
   fill(250,80,100);
   circle(width/2,400,100);
   push();
   translate(width/2,400);
   rotate(radians(frameCount));
   noStroke();
   fill(100,200,200);
   circle(200,0,50);
   push();
   translate(200,0);
   rotate(radians(frameCount*2));
   fill(220,220,220);
   circle(80,0,20);
   pop();
   pop();
}