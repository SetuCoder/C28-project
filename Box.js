class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/square.png");
  }

  display(){
    super.display();
  }
};
