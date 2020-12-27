class Rain{
    constructor(x,y){
        var options = {
            'friction' : 1.0,
            'density' : 1.0,
            'restitution': 0.3
        }
        this.body = Bodies.circle(x,y,60,options);
        this.x = x
        this.y = y
        World.add(world,this.body)
        number = Math.round(random(1,4))
        this.image = loadImage(`images/thunderbolt/${number}.png`)
    }
    display(){
        push()
        fill("Blue")
        imageMode(CENTER)
        image(this.image,this.x,this.y,60);
        pop()
    }
}