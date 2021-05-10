//inspo from tutorial (https://p5js.org/examples/sound-mic-input.html) + in class lesson 

//view on live site via link: https://interactive-audio-gen-comp.glitch.me/
let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function mousePressed() {
  userStartAudio();
}

function draw() {
  
  background(13, 24, 33);
  
  textSize(60);
  fill(240, 244, 239, 100);
  textFont("Patua One");
  text('bounce. scream to get the balls off the screen.', 100, 100);
  
  for (i = 2; i <= 10; i++) {
    textSize(60);
    fill(240, 244, 239, 110-(i*10));
    textFont("Patua One");
    text('bounce', i*100, i*100);
  }

  //get the overall volume
  let vol = mic.getLevel();
  
  for (i = 0; i <= 4; i++) {
    //rows
    fill(180, 205, 237);
    noStroke();
    let h = map(vol, 0, 0.3, height - (200*i), 0);
    ellipse(width, h - 20, 50, 50);

    fill(52, 73, 103);
    noStroke();
    let h1 = map(vol, 0, 0.1, height - (200*i), 0);
    ellipse(12*(width/13), h1-0, 50, 50);

    fill(180, 205, 237);
    noStroke();
    let h2 = map(vol, 0, 0.3, height - (200*i), 0);
    ellipse(11*(width/13), h2 - 20, 50, 50);

    fill(240, 244, 239);
    noStroke();
    let h3 = map(vol, 0, 0.2, height - (200*i), 0);
    ellipse(10*(width/13), h3 - 40, 50, 50);

    fill(191, 204, 148);
    noStroke();
    let h4 = map(vol, 0, 0.1, height - (200*i), 0);
    ellipse(9*(width/13), h4 - 60, 50, 50);

    fill(240, 244, 239);
    noStroke();
    let h5 = map(vol, 0, 0.2, height - (200*i), 0);
    ellipse(8*(width/13), h5 - 40, 50, 50);

    fill(180, 205, 237);
    noStroke();
    let h6 = map(vol, 0, 0.3, height - (200*i), 0);
    ellipse(7*(width/13), h6 - 20, 50, 50);

    fill(52, 73, 103);
    noStroke();
    let h7 = map(vol, 0, 0.1, height - (200*i), 0);
    ellipse(6*(width/13), h7 - 0, 50, 50);

    fill(180, 205, 237);
    noStroke();
    let h8 = map(vol, 0, 0.3, height - (200*i), 0);
    ellipse(5*(width/13), h8 - 20, 50, 50);

    fill(240, 244, 239);
    noStroke();
    let h9 = map(vol, 0, 0.2, height - (200*i), 0);
    ellipse(4*(width/13), h9 - 40, 50, 50);

    fill(191, 204, 148);
    noStroke();
    let h10 = map(vol, 0, 0.1, height - (200*i), 0);
    ellipse(3*(width/13), h10 - 60, 50, 50);

    fill(240, 244, 239);
    noStroke();
    let h11 = map(vol, 0, 0.2, height - (200*i), 0);
    ellipse(2*(width/13), h11 - 40, 50, 50);

    fill(180, 205, 237);
    noStroke();
    let h12 = map(vol, 0, 0.3, height - (200*i), 0);
    ellipse(width/13, h12 - 20, 50, 50);

    fill(52, 73, 103);
    noStroke();
    let h13 = map(vol, 0, 0.1, height - (200*i), 0);
    ellipse(width - width, h13 - 0, 50, 50);
  }
}

