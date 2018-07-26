/**
 * @return {[type]}
 */
function setup() {
  createCanvas(700, 700);

  var result = [
    {entity : 'Trump', occurrences : 14},
    {entity : 'Peña', occurrences : 20},
    {entity : 'Obama', occurrences : 18},
    {entity : "AMLO", occurrences : 30},
    {entity : "Dolar", occurrences : 45},
    {entity : "Anaya", occurrences : 40},
    {entity : "Meade", occurrences : 30}
  ];
  bubbles = new Array;
  for(let i = 0; i < result.length; i++) {
  	var x = random() * width;
  	var y = random() * height;
  	let size = result[i].occurrences * 2;
  	let entity = result[i].entity;
  	bubbles.push(new Bubble(size, entity, x, y));
  }

  for(let i = 0; i < bubbles.length; i++) {
  	for(let j = 0; j < bubbles.length; j++) {
  		let biggestBubble = (bubbles[i].size < bubbles[j].size && bubbles[i] != bubbles[j]) ? bubbles[j].size + 10: bubbles[i].size + 10;
  		if(bubbles[i] != bubbles[j] && dist(bubbles[i].x, bubbles[i].y, bubbles[j].x, bubbles[j].y) < biggestBubble) {
  			bubbles[j].x = random() * width;
  			bubbles[j].y = random() * height;
  		}
  	}
  }
  zoom = 0;
}

/**
 * 
 */

function draw() {
  clear();
  background(0, 0, 0, 0);
  for(let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].update();
    stroke(0)
  	ellipse(width/2, height/2, 10, 10);
    for(let j = 0; j < bubbles.length; j++) {
      if(bubbles[i] != bubbles[j]) {
      	stroke(255, 0, 0);
        let biggestBubble = (bubbles[i].size < bubbles[j].size) ? bubbles[j].size + 5 : bubbles[i].size + 5;

        if((dist(bubbles[i].x, bubbles[i].y, bubbles[j].x, bubbles[j].y) < biggestBubble +5)) {
	        bubbles[j].velocityX = 0;
	        bubbles[j].velocityY = 0;
	        bubbles[j].gravity = 0;
        	bubbles[i].move();
        }
        if((dist(bubbles[i].x, bubbles[i].y, bubbles[j].x, bubbles[j].y) < biggestBubble - 10)) {
        	console.log('choque')
        }
      }
    }
    if(dist(bubbles[i].x, bubbles[i].y, width/2, height/2) < 50) {
    	bubbles[i].velocityX = 0;
        bubbles[i].velocityY = 0;
        bubbles[i].gravity = 0;
    	bubbles[0].move();
    }
  }
}

/**
 * 
 */

function mousePressed() {
  for(let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked();
  }
}

/**
 * @return {[type]}
 */
function mouseWheel() {
  for(let i = 0; i < bubbles.length; i++) {
    bubbles[i].zoom();
  }
}