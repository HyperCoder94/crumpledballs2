class Paper {
        constructor(x,y){
            var options={
                isStatic:false,
                restitution:0.3,
                friction:0.5,
                density:0.9

            }
            this.image = loadImage("paper.png");
            this.body=Bodies.circle(x,y,20,options);
            this.r = 30;
            World.add(world,this.body);

        }
            display(){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
           imageMode(CENTER);
            image(this.image,0,0,this.r*2,this.r*2);
            pop();

            }



}