var bullet1,bullet2,bullet3,bullet4,bullet5, gameState;

var speed1, weight1, thickness1, wall1;
var speed2, weight2, thickness2, wall2;
var speed3, weight3, thickness3, wall3;
var speed4, weight4, thickness4, wall4;
var speed5, weight5, thickness5, wall5;


function setup() {
  createCanvas(1600,400);

    bullet1 = createSprite(50, 40, 100, 30);
    bullet1.shapeColor = (255,255,255);

    bullet2 = createSprite(50, 125, 100, 30);
    bullet2.shapeColor = (255,255,255);

    bullet3 = createSprite(50, 200, 100, 30);
    bullet3.shapeColor = (255,255,255);
    
    bullet4 = createSprite(50, 280, 100, 30);
    bullet4.shapeColor = (255,255,255);

    bullet5 = createSprite(50, 360, 100, 30);
    bullet5.shapeColor = (255,255,255);
  
    speed1 = random(223,321);
    weight1 = random(30,52);
    thickness1 = random(22,83);
    wall1 = createSprite(1200,40,thickness1,70);
    wall1.shapeColor = (80,80,80);
  
    speed2 = random(223,321);
    weight2 = random(30,52);
    thickness2 = random(22,83);
    wall2 = createSprite(1200,120,thickness2,70);
    wall2.shapeColor = (80,80,80);
  
    speed3 = random(223,321);
    weight3 = random(30,52);
    thickness3 = random(22,83);
    wall3 = createSprite(1200,200,thickness3,70);
    wall3.shapeColor = (80,80,80);
  
    speed4 = random(223,321);
    weight4 = random(30,52);
    thickness4 = random(22,83);
    wall4 = createSprite(1200,280,thickness4,70);
    wall4.shapeColor = (80,80,80);
  
    speed5 = random(223,321);
    weight5 = random(30,52);
    thickness5 = random(22,83);
    wall5 = createSprite(1200,360,thickness5,70);
    wall5.shapeColor = (80,80,80);

  
  gameState = "play";

}

function draw() {
  background(0,0,0);


  if(gameState === "play"){

    
    bullet1.velocityX = speed1;
  
    if(wall1.x - bullet1.x < (bullet1.width + wall1.width)/2){
  
      bullet1.velocityX = 0;
      bullet1.x = wall1.x;
  
      bullet1.depth = wall1.depth;
      bullet1.depth = bullet1.depth + 1;
  
      var deformation1 = 0.5 * weight1 * speed1 * speed1/(thickness1 * thickness1 * thickness1);
  
      if(deformation1 > 0 && deformation1 < 10){
        bullet1.shapeColor = "green";
        textSize(57);
        text("Approved!", 600,50);
      } else if (deformation1 >= 10){
        bullet1.shapeColor = "red";
        textSize(57);
        text("Rejected!", 600,50);
      }
  
      wall1.shapeColor = "white";
  
    
      }
  
      bullet2.velocityX = speed2;
  
    if(wall2.x - bullet2.x < (bullet2.width + wall2.width)/2){
        
      bullet2.velocityX = 0;
      bullet2.x = wall2.x;
  
      bullet2.depth = wall2.depth;
      bullet2.depth = bullet2.depth + 1;
  
      var deformation2 = 0.5 * weight2 * speed2 * speed2/(thickness2 * thickness2 * thickness2);
  
      if(deformation2 > 0 && deformation2 < 10){
        bullet2.shapeColor = "green";
        textSize(57);
        text("Approved!", 600,125);
      } else if (deformation2 >= 10){
        bullet2.shapeColor = "red";
        textSize(57);
        text("Rejected!", 600,125);
      }
      wall2.shapeColor = "white";
    
      }
  
      bullet3.velocityX = speed3;
  
    if(wall3.x - bullet3.x < (bullet3.width + wall3.width)/3){
        
      bullet3.velocityX = 0;
      bullet3.x = wall3.x;
  
      bullet3.depth = wall3.depth;
      bullet3.depth = bullet3.depth + 1;
  
      var deformation3 = 0.5 * weight3 * speed3 * speed3/(thickness3 * thickness3 * thickness3);
  
      if(deformation3 > 0 && deformation3 < 10){
        bullet3.shapeColor = "green";
        textSize(57);
        text("Approved!", 600,200);
      } else if (deformation3 >= 10){
        bullet3.shapeColor = "red";
        textSize(57);
        text("Rejected!", 600,200);
      }
      wall3.shapeColor = "white";
    
      }
  
      bullet4.velocityX = speed4;
  
    if(wall4.x - bullet4.x < (bullet4.width + wall4.width)/4){
        
      bullet4.velocityX = 0;
      bullet4.x = wall4.x;
  
      bullet4.depth = wall4.depth;
      bullet4.depth = bullet4.depth + 1;
  
      var deformation4 = 0.5 * weight4 * speed4 * speed4/(thickness4 * thickness4 * thickness4);
  
      if(deformation4 > 0 && deformation4 < 10){
        bullet4.shapeColor = "green";
        textSize(57);
        text("Approved!", 600,275);
      } else if (deformation4 >= 10){
        bullet4.shapeColor = "red";
        textSize(57);
        text("Rejected!", 600,275);
      }
      wall4.shapeColor = "white";
    
      }
  
      bullet5.velocityX = speed5;
  
    if(wall5.x - bullet5.x < (bullet5.width + wall5.width)/5){
        
      bullet5.velocityX = 0;
      bullet5.x = wall5.x;
  
      bullet5.depth = wall5.depth;
      bullet5.depth = bullet5.depth + 1;
     
      var deformation5 = 0.5 * weight5 * speed5 * speed5/(thickness5 * thickness5 * thickness5);
  
      if(deformation5 > 0 && deformation5 < 10){
        bullet5.shapeColor = "green";
        textSize(57);
        text("Approved!", 600,350);
      } else if (deformation5 >= 10){
        bullet5.shapeColor = "red";
        textSize(57);
        text("Rejected !", 600,350);
      }
      wall5.shapeColor = "white"; 
      
    
      }
  
    }
  
        

  drawSprites();
}

