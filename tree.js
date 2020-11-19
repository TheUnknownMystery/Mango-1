
//creating object tree using class....

class tree {
        //constructing object with aruguments {x,y,width,height}

        constructor(x, y, width, height) {

                //making tree a static object(non-movingObject)
                var options = {

                        isStatic: true
                }

                this.body = Bodies.rectangle(x, y, width, height, options);


                //nameSpacing width and height
                this.width = width;

                this.height = height;

                this.image = loadImage("tree.png")
                World.add(world, this.body)

        }

        //how to display object
        display() {

                //nameSpacing position
                var pos = this.body.position

                image(this.image, pos.x, pos.y, this.width, this.height);


        }

}