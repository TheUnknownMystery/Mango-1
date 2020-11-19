class ground {

  constructor(x, y, width, height) {

    //making tree a static object(non-movingObject)
    var options = {

      isStatic: true

    }

    this.body = Bodies.rectangle(x, y, width, height, options);

    //nameSpacing width and height

    this.width = width;

    this.height = height;

    World.add(world, this.body)

  }


  display() {

    var pos = this.body.position
    strokeWeight(3)
    noStroke();
    fill("brown")
    rect(pos.x, pos.y, this.width, this.height)

  }

}
