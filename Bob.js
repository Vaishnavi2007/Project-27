class Bob {
    constructor (x , y, radius){
        var options ={
            isStatic :false ,
            restitution :1,
            friction : 0.1,
            density : 1
        }
    this.body = Bodies.circle(x , y, radius , options);
    this.radius=radius;
    World.add(world , this.body);
    
    }
    display(){
        push();
        fill("silver");
        circle(this.body.position.x,this.body.position.y,2*this.radius );
        pop();
        
    }
    }