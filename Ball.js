class Ball {
  constructor() {
    var options = {
      restitution: 0.3,
      friction: 0.5,
      density: 1.2,
    };
    this.body = Bodies.circle(70, 250, 25, options);
    this.radius = 50;
    this.image = loadImage("sprites/crumpled paper.png");

    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.radius, this.radius);
    pop();
  }
}
