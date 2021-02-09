class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){ 
            if(this.body.bodyA){
                var pointA = this.body.bodyA.psotion;
                var pointB = this.pointB;
                strokeWeight(1);
                stroke("black");
                line(pointA.x,pointA.y,pointB.x,pointB.y);
            } 
            pop();
    }   
}