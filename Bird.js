class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/hexagon.png");
  }

  display() {
    super.display();
  }
}
