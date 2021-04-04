class Bin {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);

    this.image = loadImage("sprites/dustbingreen.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, 950, 200, 210, 160);
    pop();
  }
}
