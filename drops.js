class Drop{
    constructor(x,y){
        var options={
            isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
        }
        this.body=Bodies.circle(x,y,5,options);
        
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        var maxDrops=100;
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        fill(0,0,128);
        ellipse(0,0,17,30);
        for(var i=0;i<maxDrops;i++){
            drops.push(new createDrop(random(0,400),random(0,400)))
        }
        pop()
        
    }
}
