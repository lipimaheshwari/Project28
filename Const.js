class Const{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            elasticity:3,
            stiffness: 0.005,
            length: 0.95
        }
        this.pointB = pointB;
        this.c = Constraint.create(options);
        World.add(world, this.c);
    }

    fly(){
        this.c.bodyA = null
    }
    attach(body){
        this.c.bodyA = body;
    }

    display(){
        if(this.c.bodyA){
        var pointA = this.c.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}