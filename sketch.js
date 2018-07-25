function setup() {
  createCanvas(1000, 700);
  var result = [
    {entity : 'Trump', occurrences : 14},
    {entity : 'Peña', occurrences : 20},
    {entity : 'Obama', occurrences : 18},
    {entity : "AMLO", occurrences : 30},
    {entity : "Dolar", occurrences : 45},
    {entity : "Anaya", occurrences : 40},
    {entity : "Meade", occurrences : 35}
  ];
  bubbles = new Array;
  for(let i = 0; i < result.length; i++) {
    bubbles.push(new Bubble(result[i].occurrences, result[i].entity));
  }
  center = new Center();
  zoom = 0;
}

function draw() {
  clear();
  background(0, 0, 0, 0);
  for(let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].update();
    for(let j = 0; j < bubbles.length; j++) {
      if(bubbles[i] != bubbles[j]) {
        console.log(bubbles[i].entity + ' ' + bubbles[j].entity)
        let biggestBubble = (bubbles[i].size < bubbles[j].size) ? bubbles[j].size * 2.5 +10 : bubbles[i].size * 2.5 +10;
        if(dist(bubbles[i].x, bubbles[i].y, bubbles[j].x, bubbles[j].y) < biggestBubble && dist(bubbles[j].x, bubbles[j].y, width/2, height/2) < 300) {
          bubbles[j].velocityX = bubbles[j].velocityX * (-0.5);
          bubbles[j].velocityY = bubbles[j].velocityY * (-0.5);
        }
      }
    }
  }
}

function mousePressed() {
  for(let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked();
  }
}

function mouseWheel() {
  for(let i = 0; i < bubbles.length; i++) {
    bubbles[i].zoom();
  }
}