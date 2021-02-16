let history=[];
let history2=[];
let history3=[];
let history4=[];
let history5=[];

let rAngle;
let wave;
let wave1;
let waveS;
let i;
let w;

function setup() {
  createCanvas(windowWidth,windowHeight);
  print(windowWidth, windowHeight);
  angleMode(RADIANS);
  rAngle=1;
}

function draw() {

  background(47,79,79);
  noFill();

  translate(width/2,height/2);

  waveS=100*sin(frameCount/200); //needed only for w
  wave = 100*sin(frameCount/150); //needed for the two single lines and the circle
  wave1=100*sin(frameCount/150 +PI/2); //needed for the two squares
  w=waveS*9 //just empirically found, needed for the gray lines width/2-60
  i=map(sin(frameCount/200-PI),-1,1,0,1); //needed for the colors

  color1=color(255-int(i*128),8+int(i*247),90+int(i*122));

  // 1ST SQUARE
  push();
  rotate(wave1/50);
  color1.setAlpha(255)
  stroke(color1);
  //stroke(lerpColor(color("red"), color("blue"), frameCount/120));
  rect(-wave1*height/400,-wave1*height/400,2*wave1*height/400,2*height/400*wave1);
  pop();

  history.push(wave1);

    if (history.length>35){
      history.splice(0,1);
     }

    for (let i=0; i < history.length; i++){
      color1.setAlpha(255/35*i)
      stroke(color1);
      push();
      rotate(history[i]/50);
      rect(-history[i]*height/400,-history[i]*height/400,2*history[i]*height/400,2*history[i]*height/400);
      pop();
    }

    // 2ND SQUARE
    push();
    rotate(wave1/50+PI/4);
    color1.setAlpha(255)
    stroke(color1);
    rect(-wave1*height/400,-wave1*height/400,2*wave1*height/400,2*height/400*wave1)
    pop();

    history5.push(wave1);

      if (history5.length>35){
        history5.splice(0,1);
       }

      for (let i=0; i < history5.length; i++){
        color1.setAlpha(255/35*i)
        stroke(color1);
        push();
        rotate(history5[i]/50+PI/4);
        rect(-history5[i]*height/400,-history5[i]*height/400,2*history5[i]*height/400,2*history5[i]*height/400);
        pop();
      }

    //VERTICAL LINE
    push();
    rotate(wave/50);
    color1.setAlpha(255)
    stroke(color1);
    line(0,-height/240*wave,0,height/240*wave);
    pop();

    history2.push(wave);

    if (history2.length>35){
      history2.splice(0,1);
     }

    for (let i=0; i < history2.length; i++){
      color1.setAlpha(255/35*i)
      stroke(color1);
      push();
      rotate(history2[i]/50);
      line(0,-height/240*history2[i],0,height/240*history2[i])
      pop();
    }

    //HORIZONTAL LINE
    push();
    rotate(wave/50);
    color1.setAlpha(255)
    stroke(color1);
    line(-height/240*wave,0,height/240*wave,0);
    pop();

    history3.push(wave);

    if (history3.length>35){
      history3.splice(0,1);
     }

    for (let i=0; i < history3.length; i++){
      color1.setAlpha(255/35*i)
      stroke(color1);
      push();
      rotate(history3[i]/50);
      line(-height/240*history3[i],0,height/240*history3[i],0)
      pop();
    }

    // CIRCLE
    push();
    rotate(wave/50);
    color1.setAlpha(255)
    stroke(color1);
    ellipse(0,0,height/72*wave);
    pop();

    history4.push(wave);

    if (history4.length>25){
      history4.splice(0,1);
     }

    for (let i=0; i < history4.length; i++){
      color1.setAlpha(255/25*i)
      stroke(color1);
      push();
      rotate(history4[i]/50);
      ellipse(0,0,history4[i]*height/72)
      pop();
    }

    // LINES

    for(let i=0; i<100; i++){
    rotate(rAngle);
    stroke(169,169,169,125);
    line(height*0.52, (i-w)*height/578, -height*0.52, (i+1)*height/578);
  }
}
