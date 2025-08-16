class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }


  set dimensions(value) {
    if (typeof value === "number" && value > 1) {
      this.width = value;
      this.height = value;
    } else {
      console.log("Invalid dimensions");
    }
  }
}


const rect1 = new Rectangle(4, 5);
console.log("Area of rect1:", rect1.area);
rect1.dimensions = 10;
console.log("New area of rect1:", rect1.area);

const rect2 = new Rectangle(2, 3);
console.log("Area of rect2:", rect2.area);
rect2.dimensions = "abc"; 
