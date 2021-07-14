
var spaceImg;
var internationalSpaceStation, internationalSpaceStationImg;
var spacecraft, spacecraftImg, spacecraftImg2, spacecraftImg3, spacecraftImg4;
var hasDocked;

function preload(){
  spaceImg = loadImage("Images/spacebg.jpg");
  internationalSpaceStationImg = loadImage("Images/iss.png");
  spacecraftImg = loadImage("Images/spacecraft1.png");
  spacecraftImg2 = loadImage("Images/spacecraft2.png");
  spacecraftImg3 = loadImage("Images/spacecraft3.png");
  spacecraftImg4 = loadImage("Images/spacecraft4.png");
}

function setup(){
  createCanvas(displayWidth, displayHeight);

  internationalSpaceStation = createSprite(displayWidth/2, 400);
  internationalSpaceStation.addImage(internationalSpaceStationImg);
  internationalSpaceStation.scale = 1.5;

  spacecraft = createSprite(800, 800);
  spacecraft.addImage(spacecraftImg);
  spacecraft.scale = 0.4;

  hasDocked = false;
}

function draw(){
  background(spaceImg);

  if (!hasDocked){
    if (keyDown(LEFT_ARROW)){
      spacecraft.addImage(spacecraftImg4);
      spacecraft.x = spacecraft.x - 1;
    }
    if (keyDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraftImg3);
      spacecraft.x = spacecraft.x + 1;
    }
    if (keyDown(UP_ARROW)){
      spacecraft.addImage(spacecraftImg);
      spacecraft.y = spacecraft.y - 1;
    }
    if (keyDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraftImg);
      //spacecraft.y = spacecraft.y + 1;
    }

    fill("white");
    textSize(40);
    text("Note:- Please check the console window to complete this docking mission.", 20, displayHeight-20);
  }

  internationalSpaceStation.depth=spacecraft.depth;
  internationalSpaceStation.depth=internationalSpaceStation.depth+1;

  if (spacecraft.x === 572 && spacecraft.y === 584){
    spacecraft.addImage(spacecraftImg2);
    spacecraft.x=570;
    spacecraft.y=534;
  }

  if (spacecraft.x === 570 && spacecraft.y === 534){
    hasDocked = true;
    fill("white");
    textSize(40);
    text("Docking Successfull!", 870, 400);
  }

  console.log("Hello, welcome to console window, To complete this [DOCKING AND UNDOCKING MISSION]. You have to move the spacecraft by using arrow keys and when the (x position of the spacecraft is equal to 572 && y psition is equal to 584). Then the game will end. THANK YOU!")
  console.log("spacecraft.x = ",spacecraft.x);
  console.log("spacecraft.y = ",spacecraft.y);
  
  drawSprites();

}

