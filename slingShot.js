class SlingShot{
    constructor(body1, body2){
        var options = {
            bodyA : body1,
            bodyB : body2,
            length : 100,
            stiffness: 0.05
        };
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot) ;
        console.log(this.slingShot);
        
    }
        display(){
            var pointA = this.slingShot.bodyA.position;
            var pointB = this.slingShot.bodyB.position;

        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }   
}