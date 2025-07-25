let num = 30;
let size;
let margin = 30;
let scaleFactor = 1.4;
let snowPallete = ["#001eff", "#4deeea", "#f000ff", "#ffe700", "#74ee15", "#FFFFFF"];
let band = 100;

function setup() {
  createCanvas(600, 600);
  size = (width - margin * 2) / num;
}

function draw() {
  background(0, 0, 80);
  noStroke();
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      let x = margin + size / 4 + i * size;
      let y = margin + size / 3 + j * size;

      let distFromCenter = dist(x, y, width / 2, height / 2);
      let scaledDist = pow(distFromCenter, scaleFactor);
      let index = floor(map(scaledDist, 0, band, 0, snowPallete.length));
      let colorIndex = index % snowPallete.length;

      fill(snowPallete[colorIndex]);
      ellipse(x, y, size, size);
      
      
    let offsetX = map(mouseY, 8, width, -size / 3, size / 3);
let offsetY = map(mouseX, 2.3, height, -size / 3, size / 3);
    


let wave = sin(frameCount * 0.1 + (i + j) * 0.3);
let dynamicSize = size * (0.5 + mouseX + mouseX * wave);

ellipse(x + offsetX, y + offsetY, dynamicSize, dynamicSize);
    }
   
  }
   
}











