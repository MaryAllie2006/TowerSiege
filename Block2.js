class Block2{
    constructor(x,y,height,width,angle){
        var options ={
          isStatic: false,
          restitution: 0.1,
          frictions: 0.01,
          density:0.02
        }
      
        this.body=Bodies.rectangle(x,y,height,width,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        fill("pink");
        rect(pos.x, pos.y,this.height,this.width);
    }
  }