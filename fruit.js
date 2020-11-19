class Mango {

    constructor(x, y, width, height) {

        var options = {

            isStatic: true,
            restitution: 0.2,
            friction: 0.02


        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.image= loadImage("mango.png")
        this.width =  width;
        this.height= height;

    }

    display(){

    var pos= this.body.position;

   image(this.image,pos.x,pos.y,this.width,this.height)

    }

}