class Thunder{
    constructor(x,y,r){
        var options = {
            restitution:0.4
        }
        this.r = r;

        this.body = Bodies.circle(x,y,this.r,options);

        World.add(world,this.body)
    }
    display(){

        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y)
        rotate(angle)
        fill("Blue")
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop();
    }
}