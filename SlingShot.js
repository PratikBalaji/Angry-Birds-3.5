class SlingShot{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.pointBObject=point;
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
    }

    display(){
        if (this.slingShot.bodyA){
            var pointA = this.slingShot.bodyA.position;
            strokeWeight(4);
            //line(pointA.x, pointA.y, this.pointBObject.x, this.pointBObject.y);
        }
        
        
    }
birdFly(){
    this.slingShot.bodyA=false;
}    
}
