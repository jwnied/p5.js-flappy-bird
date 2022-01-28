function Bird(){
  this.y = height/2;
  this.x = 64;
  
  this.lift = -10;
  this.gravity = 0.6;
  this.drag = 0.9;
  
  this.vel = 0;
  
  this.size = 16;
  
  this.up = function(){
    this.vel+=this.lift;
  }
  
  this.update = function(){
    this.vel += this.gravity;
    this.vel *= this.drag;
    this.y += this.vel;
    if(this.y>height){
      this.y = height;
      this.vel = 0;
    }
    if(this.y<-this.size){
      this.y = 0;
      this.vel = 0;
    }
  }
  
  this.show = function(){
    fill(255,255,100);
    ellipse(this.x, this.y,this.size,this.size);
  }
}