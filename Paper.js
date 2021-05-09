class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            density:1.5,
            friction:0.5 
        }
        this.paper = Bodies.circle(x,y,r,options);
        this.r = r;
        this.image = loadImage("paper.png");
        World.add(world,this.paper);
    }
    display(){
        var pos = this.paper.position;
        
        push();
        ellipseMode(RADIUS);
        translate(pos.x,pos.y);
        fill("purple");
        //imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }
}