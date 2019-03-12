var cx, cy;
var secondsRadius;
var minutesRadius;
var hoursRadius;
var clockDiameter;
let clockImg, button;
var greeting;

function setup() {
  createCanvas( 720, 720 );
  stroke( 255 );

  // Loading in the image
  clockImg = loadImage( 'Clock.png' );

  var radius = 400 / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.60;
  hoursRadius = radius * 0.50;
  clockDiameter = radius * 1.7;

  cx = width / 2;
  cy = 200;

  // Creating a text element
  fill( 255, 0, 0 );
  textAlign( CENTER );
  greeting = createElement( 'h2', 'Click the button to see what ethans up to!' );

  // Creating the button
  // givning it a text to display
  var button = createButton( 'What Is He Doing?' );
  // assigning a position
  button.position( 300, 460 );
  // giving it an event to call if the button is pressed.
  button.mousePressed( WhatsEthanDoing );
}

function draw() {
  background( 230 );
  // Draw the clock background
  noStroke();
  fill( 0 );
  ellipse( cx, cy, clockDiameter + 25, clockDiameter + 25 );

  // Bringing in the image and placeing it
  image( clockImg, cx - clockImg.width / 2, cy - clockImg.height / 2 );

  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  var s = map( second(), 0, 60, 0, TWO_PI ) - HALF_PI;
  var m = map( minute() + norm( second(), 0, 60 ), 0, 60, 0, TWO_PI ) - HALF_PI;
  var h = map( hour() + norm( minute(), 0, 60 ), 0, 24, 0, TWO_PI * 2 ) - HALF_PI;

  // Drawng the hands of the clock
  stroke( 0 );
  strokeWeight( 4 );
  line( cx, cy, cx + cos( s ) * secondsRadius, cy + sin( s ) * secondsRadius );
  strokeWeight( 8 );
  line( cx, cy, cx + cos( m ) * minutesRadius, cy + sin( m ) * minutesRadius );
  strokeWeight( 10 );
  line( cx, cy, cx + cos( h ) * hoursRadius, cy + sin( h ) * hoursRadius );

  // Drawing the minute ticks (little dots that surround the parimiter)
  strokeWeight( 3 );
  beginShape( POINTS );
  for ( var a = 0; a < 360; a += 6 ) {
    var angle = radians( a );
    var x = cx + cos( angle ) * secondsRadius;
    var y = cy + sin( angle ) * secondsRadius;
    vertex( x, y );
  }
  endShape();



}

/// Function to randomly quess what im up to
/// Creats a random value (between 0 t0 100),
///   and then checks those vauls up against some if checks and desplays a different text accordingly
function WhatsEthanDoing() {
  var randRoll = random( 0, 100 );

  if ( randRoll <= 5 ) {
    greeting.html( 'He may well be sleeping... ' );
  } else if ( randRoll > 5 && randRoll <= 45 ) {
    greeting.html( 'Drinking coffee!' );
  } else if ( randRoll > 45 && randRoll <= 100 ) {
    greeting.html( 'Writing Codeeee!' );
  } else {
    // Shouldn't ever reach here.. but who knows
    greeting.html( 'Nothing!' );

  }


}