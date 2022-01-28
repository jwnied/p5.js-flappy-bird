var bird;
var pipes = [];
var score = 0;

function setup() {
  createCanvas(400, 400);
  bird = new Bird();
  pipes.push(new Pipe());
  textSize(28);
  
}

function draw() {
  background(55,55,155);
  text("tap or click to avoid the pipes.",20,height-10);
  text('SCORE:'+score,20,45);
  bird.update();
  bird.show();
  
  if(frameCount % 50 == 0){
    pipes.push(new Pipe());
  }
  if((frameCount+40) % 50 == 0){
    score +=1;
  }
  
  for(var i=pipes.length-1;i>=0;i--){
    pipes[i].update();
    pipes[i].show();
    
    if(pipes[i].hits(bird)){
      pipes[i].highlight = true;
      score = 0;
    }
    
    if(pipes[i].offscreen())
      pipes.splice(i,1);
  }
}
function mousePressed(){
  bird.up();
}