class Ground{
    constructor(x,y,width,height){
var options = 
{
    isStatic:true
}
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill(181,230,247);
        stroke(0,0,0);
        strokeWeight(1);
        rect(pos.x,pos.y,this.width,this.height)
    }
}