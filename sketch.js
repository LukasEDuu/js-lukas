function setup() {
    createCanvas(600, 400);
    background("black");
  }
  
  function draw() {
    stroke("blue");
    fill("purple");
    
    if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 35);
   }
  }