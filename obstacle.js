class Obstacle  {
    constructor(x,y,r){
      super(x,y,r);
      
      var options={ 
      isStatic:true
      }
      this.x=x
      this.y=y
      this.radius=r
      World.add(world, this.body);
    }
    
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      push();
      translate(this.body.position.x, this.body.position.y);
  
      pop();
      super.display();
  
      
     
  
     
    }
  }