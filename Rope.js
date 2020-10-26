class Rope {
    constructor(body1, body2, xOffset , yOffset){
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        var options ={
            bodyA : body1,
            bodyB: body2,
            stiffness: 1,
            length:300,
           pointA:{x: xOffset, y: yOffset } 
    
        }
    this.rope = Matter.Constraint.create(options)
    World.add(world, this.rope);
    }
    display(){
        var point1= this.rope.bodyA.position
        var point2 = this.rope.bodyB.position
        strokeWeight(8)
        var roofAttachPointX = point1.x + this.xOffset
        var roofAttachPointY = point1.y + this.yOffset
    line(roofAttachPointX, roofAttachPointY, point2.x, point2.y)
    
    }
    }

