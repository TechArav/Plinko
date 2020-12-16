class Ball{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:true         
        }
         this.x=x
         this.y=y
        this.body=Bodies.circle(x,y,this.r,options)
        this.color=color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);

        for(var j=40; j<=width; j=j+50)
      { ball.push( new Ball(j,75))}
      for(var j=15; j<=width-10; j=j+50)
      { ball.push( new Ball(j,175))}
     
      display(){

        push();
        translate(this.body.position.x, this.body.position.y);
    
        pop();
      }
