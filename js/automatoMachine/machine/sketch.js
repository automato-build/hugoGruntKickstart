// x position variable
var xpos = 200;
// y position variable
var ypos = 100;
// numPixels variable
var numPixels = 50;

// target x and y positions
var targetX;
var targetY;

// easing variable
var easing = 0.05;
var lineOfFire;
var bottle, wheel;
var bullets;
var eggs;
var bulletImage, particleImage;

var MARGIN = 40;
var assetFolder="js/automatoMachine/machine/";

function setup() {
  createCanvas(windowWidth, windowHeight);
  w= windowWidth;
  h= windowHeight;
  background(255);
  lineOfFire=windowHeight/2;

  wheel = createSprite(windowWidth/2+30, lineOfFire+30, 20.);
  bottle = createSprite(windowWidth/2, lineOfFire, 20.);

  wheel.immovable=true;
  bottle.immovable=true;

  bulletImage=loadImage(assetFolder+"ketchup.png");
  particleImage = loadImage(assetFolder+"egg.png");
  wheel.addImage(loadImage(assetFolder+"wheel.png"));
  bottle.addImage(loadImage(assetFolder+"bottle.png"));
  //bottle.mouseActive = true;
  //stroke(0, 102);

  bullets = new Group();
  eggs = new Group();

  for(var i = 0; i<30; i++) {
  var ang = random(360);
  var px = width/2 + 1000 * cos(radians(ang));
  var py = height/2+ 1000 * sin(radians(ang));
  createEggs(3, px, py);
  }
}

function draw() {
  background(255);
  // set the ellipse mode
  ellipseMode(CENTER);

    for(var i=0; i<allSprites.length; i++) {
  var s = allSprites[i];
  if(s.position.x<-MARGIN) s.position.x = width+MARGIN;
  if(s.position.x>width+MARGIN) s.position.x = -MARGIN;
  if(s.position.y<-MARGIN) s.position.y = height+MARGIN;
  if(s.position.y>height+MARGIN) s.position.y = -MARGIN;
  }

  eggs.collide(bullets, eggsHit);
  eggs.bounce(eggs);
  eggs.bounce(wheel);
  eggs.bounce(bottle);


  // calculate the new xpos value
  var dx = targetX - xpos;
  if(abs(dx) > 1) {
    xpos += dx * easing;
  }

  // calculate the new ypos value
  var dy = targetY - ypos;
  if(abs(dy) > 1) {
    ypos += dy * easing;
  }

  fill(100);  // Set fill to gray
  bottle.position.x=xpos;
  wheel.position.x=xpos;

  var angle=bottle.rotation;
  //console.log(angle);
    if(keyDown(UP_ARROW))
      bottle.rotation -= 4;
    if(keyDown(DOWN_ARROW))
     bottle.rotation += 4;
   if(keyDown(RIGHT_ARROW))
      targetX = xpos + numPixels;
    if(keyDown(LEFT_ARROW))
     targetX = xpos - numPixels;

   //console.log(angle);

   var i;
    if(keyDown(32))
    {
    i=i+1
    var bullet = createSprite(bottle.position.x+30, bottle.position.y+10);
    bullet.scale=random(0.5,0.9);
    bullet.addImage(bulletImage);
    bullet.setSpeed(10+bottle.getSpeed(), bottle.rotation);
    bullet.life = 60;
    bullets.add(bullet);

    } else {
      i=0;
    }

  //rect(xpos, lineOfFire, 25, 52);
  //ellipse(xpos, lineOfFire, 25, 25);   // Draw gray ellipse using CENT
  drawSprites();
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
  w=windowWidth;


}

function createEggs(type, x, y) {
  var a = createSprite(x, y);
  var img  = loadImage(assetFolder+"egg.png");
  var imgw  = loadImage(assetFolder+"egg.png");
  a.addImage(img);
  a.setSpeed(2.5-(type/2), random(360));
  a.rotationSpeed = .5;
  //a.debug = true;
  a.type = type;

  if(type == 2)
    a.scale = .6;
  if(type == 1)
    a.scale = .3;

  a.mass = 2+a.scale;
  a.setCollider("circle", 0, 0, 40);
  eggs.add(a);
  return a;
}

function eggsHit(eggs, bullet) {
var newType = eggs.type-1;

if(newType>0) {
    createEggs(newType, eggs.position.x, eggs.position.y);
    createEggs(newType, eggs.position.x, eggs.position.y);
  }

for(var i=0; i<10; i++) {
  var p = createSprite(bullet.position.x, bullet.position.y);
  p.addImage(bulletImage);
  p.setSpeed(random(3,5), random(360));
  p.friction = 0.95;
  p.life = 15;
  }

bullet.remove();
eggs.remove();
}

function keyPressed()
{
  //  if(keyCode == 'x')
  // {
  //   var bullet = createSprite(bottle.position.x+30, bottle.position.y-20);

  //   bullet.addImage(bulletImage);
  //   bullet.setSpeed(10+bottle.getSpeed(), bottle.rotation);
  //   bullet.life = 50;
  //   bullets.add(bullet);


  // }
  // if(keyCode == UP_ARROW)
  // {
  //   //rotate up
  //   bottle.rotation+=4;

  // }

  // if(keyCode ==DOWN_ARROW)
  // {
  //   //rotate down
  //   bottle.rotation-=4;

  // }

  // // RIGHT key
  // if(keyCode == RIGHT_ARROW)
  // {
  //   targetX = xpos + numPixels;
  // }

  // // LEFT key
  // if(keyCode == LEFT_ARROW)
  // {
  //   targetX = xpos - numPixels;
  // }
}
