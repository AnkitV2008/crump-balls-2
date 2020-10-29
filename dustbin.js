class dustbin
{

    constructor(x,y)
{
this.x=x;
this.y=y;
this.dustbinWidth=200;
this.dustbinHeight=100;
this.wallThickness=20;
this.angle=0;
this.image = loadImage("dustbing.png");

this.bottomBody= Bodies.rectangle(this.x,this.y,this.dustbinHeight,this.wallThickness,{isStatic:true});
this.leftWallBody= Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
Matter.Body.setAngle(this.leftWallBody,this.angle)

this.rightWallBody= Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
Matter.Body.setAngle(this.rightWallBody,-1*this.angle)
World.add(world, this.bottomBody);
World.add(world, this.leftWallBody);
World.add(world, this.rightWallBody);

}
display()
{
var posBottom=this.bottomBody.position


    push()
    translate(posBottom.x, posBottom.y+18);
    rectMode(CENTER);
    angleMode(RADIANS)
    fill('black');
    imageMode(CENTER);
    image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);  
    pop();

    

}
}