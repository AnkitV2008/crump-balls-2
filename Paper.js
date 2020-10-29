class Paper{
    constructor(x, y, r) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.4,
            density:1.2
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        this.image = loadImage("paper.png");

        World.add(world,this.body)
      }
     
      display(){
     var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 70,70);     //   ellipse(0, 0, this.r, this.r);
        pop();
    }
}
/*display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}*/