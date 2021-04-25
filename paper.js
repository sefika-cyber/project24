class paper{
    constrictor(x,y,raius,options);{
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.bodies=Bodies.circle(x,y,radius,options);
        this.radius = this.radius;
        World.add(world, this.body);
    };
    display(){
       circle(this.position.x,this.position.y,this.radius,options); 
       circleMode(CENTER);
    }
}