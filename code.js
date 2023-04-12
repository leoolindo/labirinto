var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var player=createSprite(20,20,20,20);
player.shapeColor="darkblue";

var chegada=createSprite(380,380,30,30);
chegada.shapeColor="lightgreen";

var parede1=createSprite(65,0,20,170);
parede1.shapeColor="gray";

var parede2=createSprite(0,130,150,20);
parede2.shapeColor="gray";

var parede3=createSprite(120,150,20,60);
parede3.shapeColor="gray";

var parede4=createSprite(55,220,150,20);
parede4.shapeColor="gray";

var parede5=createSprite(65,150,20,50);
parede5.shapeColor="gray";

var parede6=createSprite(120,80,20,100);
parede6.shapeColor="gray";

var parede7=createSprite(210,0,20,200);
parede7.shapeColor="gray";

var parede8=createSprite(170,100,100,20);
parede8.shapeColor="gray";

var parede9=createSprite(210,160,20,140);
parede9.shapeColor="gray";

var parede10=createSprite(240,220,80,20);
parede10.shapeColor="gray";

var parede11=createSprite(330,250,20,80);
parede11.shapeColor="gray";

var parede12=createSprite(335,350,30,20);
parede12.shapeColor="gray";

var parede13=createSprite(350,370,20,60);
parede13.shapeColor="gray";

var parede14=createSprite(360,280,80,20);
parede14.shapeColor="gray";

var parede15=createSprite(240,280,80,20);
parede15.shapeColor="gray";

var parede16=createSprite(270,370,20,60);
parede16.shapeColor="gray";

var parede17=createSprite(240,350,80,20);
parede17.shapeColor="gray";

var parede18=createSprite(210,320,20,60);
parede18.shapeColor="gray";

var parede19=createSprite(120,310,20,80);
parede19.shapeColor="gray";

var parede20=createSprite(55,280,150,20);
parede20.shapeColor="gray";

var parede21=createSprite(80,340,80,20);
parede21.shapeColor="gray";

var parede22=createSprite(330,140,20,140);
parede22.shapeColor="gray";

var parede22=createSprite(270,140,20,140);
parede22.shapeColor="gray";

function draw() {
  drawSprites();
  createEdgeSprites();
  
  background("black");
 drawSprites();
 if(player.isTouching(edges))
 {
   player.x=20;
   player.y=20;
 }
 
  if(player.isTouching(chegada))
 {
   background("lightgreen");
   textSize(40);
textFont("Times New Roman");
textAlign(CENTER, CENTER);
stroke("BLACK");
strokeWeight(5);
text("PARABÉNS!", 0, 0, 400, 400);
 }

 if(player.isTouching(parede1))
 {
   player.x=20;
   player.y=20;
 }
 
 if(player.isTouching(parede2))
 {
   player.x=20;
   player.y=20;
 }
 
 if(player.isTouching(parede3))
 {
   player.x=20;
   player.y=20;
 }
 
 if(player.isTouching(parede4))
 {
   player.x=20;
   player.y=20;
 }
 
 if(player.isTouching(parede5))
 {
   player.x=20;
   player.y=20;
 }
 
 if(player.isTouching(parede6))
 {
   player.x=20;
   player.y=20;
 }
 
 if(player.isTouching(parede7))
 {
   player.x=20;
   player.y=20;
 }
 
 if(player.isTouching(parede8))
 {
   player.x=20;
   player.y=20;
 }
 
  if(player.isTouching(parede9))
 {
   player.x=20;
   player.y=20;
 }
  if(player.isTouching(parede10))
 {
   player.x=20;
   player.y=20;
 }
  if(player.isTouching(parede11))
 {
   player.x=20;
   player.y=20;
 }
  if(player.isTouching(parede12))
 {
   player.x=20;
   player.y=20;
 }
  if(player.isTouching(parede13))
 {
   player.x=20;
   player.y=20;
 }
  if(player.isTouching(parede14))
 {
   player.x=20;
   player.y=20;
 }
  if(player.isTouching(parede15))
 {
   player.x=20;
   player.y=20;
 }
  if(player.isTouching(parede16))
 {
   player.x=20;
   player.y=20;
 }
  if(player.isTouching(parede17))
 {
   player.x=20;
   player.y=20;
 }
  if(player.isTouching(parede18))
 {
   player.x=20;
   player.y=20;
 }
  if(player.isTouching(parede19))
 {
   player.x=20;
   player.y=20;
 }
  if(player.isTouching(parede20))
 {
   player.x=20;
   player.y=20;
 }
  if(player.isTouching(parede21))
 {
   player.x=20;
   player.y=20;
 }
  if(player.isTouching(parede22))
 {
   player.x=20;
   player.y=20;
 }
 
 {
  if(keyDown("w")){
    player.y=player.y-3;
  }
  
  if(keyDown("s")){
    player.y=player.y+3;
    
  }
  if(keyDown("a")){
    player.x=player.x-3;
  }
  
  if(keyDown("d")){
    player.x=player.x+3;
  }
}


  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
