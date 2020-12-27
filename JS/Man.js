class Man{
    constructor(x,y,w,h){
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w 
        this.height = h
        this.x = x
        this.y = y
        number = Math.round(random(1,8))
        this.image = loadImage(`images/wf/walking_${number}.png`)
        
        World.add(world,this.body);
    }
    display(){
        push()
        fill("Red")
        stroke("Yellow")
        strokeWeight(6)
        imageMode(CENTER)
        image(this.image,this.x,this.y,this.width,this.height)
        pop()
    }
}