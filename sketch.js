function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(0);
  let hr = hour();
  let min = minute();
  let sec = second();

  fill(255);
  noStroke();
  text(hr + ':' + min + ':' + sec, 190, 300);

}
