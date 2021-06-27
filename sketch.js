const Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
 Bodies = Matter.Bodies;

var engine,world

var Particle;
var particles = [Particle];
var plinkos = [];
var divisionHeight=300;
var line;
var divisions=[];

var gameState="PLAY"

var score= 0;
var count= 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(35)
  text("score : "+score,20,30);
  Engine.update(engine);
  fill(255)
  
  text("500",5,550);
  text("500",80,550);
  text("500",160,550);
  text("500",240,550);
  text("100",320,550);
  text("100",400,550);
  text("100",480,550);
  text("200",560,550);
  text("200",640,550);
  text("200",720,550);

    if(gameState=="END"){
      background("black");
      fill("red");
      textSize(100);
      text("Game Over",200,400)

    }

    for(var k=0;k< plinkos.length;k++){
      plinkos[k].display();
    }

    if(Particle!=null){
      Particle.display();

    if(Particle.body.position.y>700)
    {
      if(Particle.body.position.x<300){
      score=score+500;
      Particle=null;
      if(count>=5)gameState="END";
    }
  
    else if(Particle.body.position.x <600 &&  Particle.body.position.x>301){

      score=score+100;
      Particle=null;
      if(count>=5){gameState="END";}

    }
    
    else if(Particle.body.position.x <900 &&  Particle.body.position.x>601){

      score=score+200;
      Particle=null;
      if(count>=5){gameState="END";}
    }
  }
  }
  for(var i=0; i< divisions.length;i++){
    divisions[i].display();
    }
}



function mousePressed(){
  if(gameState !="END"){
    count++;
    Particle=new particle(mouseX,50,10,10);
  }
  
}

function keyPressed(){
  if(gameState=="END"&&keyCode==LEFT_ARROW){
    gameState="PLAY";
    score=0;
    count=0;
  }
}