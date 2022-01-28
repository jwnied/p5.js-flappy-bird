function Pipe(){
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 20;
  this.speed = 5;
  
  this.highlight = false;
  
  this.hits = function(bird){
    if(bird.y-bird.size/2<this.top || bird.y+bird.size/2>height-this.bottom){
      if(bird.x > this.x && bird.x < this.x+ this.w){
        return true;
      }
    }
    return false;
  }
  
  this.offscreen = function(){
    return this.x < -this.w;
  }
  
  this.update = function(){
    this.x-=this.speed;
  }
  
  this.show = function(){
    if(this.highlight){
      fill(255,0,0);
    }else{
      fill(155,255,0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x,height-this.bottom, this.w, this.bottom);
  }
}