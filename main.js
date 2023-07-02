let cam;
let delta = 0.01;

function setup() {
  createCanvas(100, 100, WEBGL);
  normalMaterial();
  cam = createCamera();
  cam.pan(-0.8);
}

function draw() {
  background(200);
  cam.pan(delta);
  if (frameCount % 160 === 0) {
    delta *= -1;
  }

  rotateX(frameCount * 0.01);
  translate(-100, 0, 0);
  box(20);
  translate(35, 0, 0);
  box(20);
  translate(35, 0, 0);
  box(20);
  translate(35, 0, 0);
  box(20);
  translate(35, 0, 0);
  box(20);
  translate(35, 0, 0);
  box(20);
  translate(35, 0, 0);
  box(20);
}

function takeSnapshot() {
    save('myFilterImage.png');
}