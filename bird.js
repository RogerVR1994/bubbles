function Bubble(size, entity, x, y) {
  this.size = size * 1.2;
  this.x = x;
  this.y = y;
  this.col = color(28, 11, 111);
  this.entity = entity;
  this.gravity = 0.1;
  this.velocityX = 0;
  this.velocityY = 0;
  this.show = function() {
    textSize(this.size/4);
    fill(this.col);
    stroke(this.col);
    ellipse(this.x, this.y, this.size, this.size);
    fill(255);
    text(this.entity, this.x-textWidth(this.entity)/2, this.y+this.size/13);
  }

  this.update = function() {
    if(this.x > width/2) {
      this.velocityX -= this.gravity;
      this.moveBubble();
    }
    else {
      this.velocityX += this.gravity;
      this.moveBubble();
    }

    if(this.y > height/2) {
      this.velocityY -= this.gravity;
      this.moveBubble();
    }
    else {
      this.velocityY += this.gravity;
      this.moveBubble();
    }
  }

  this.moveBubble = function() {
    this.x += this.velocityX
    this.y += this.velocityY
  }

  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if(d < this.size/2) {
      window.open('http://google.com')
    }
  }

  this.zoom = function() {
    if(event.delta < 0) {
      this.size = this.size * 1.1;
    }
    else if(event.delta > 0){
     this.size = this.size * 0.9;
    }
  }

  this.move = function() {
    this.x = this.x + random(-1, 1) * 0.2;
    this.y = this.y + random(-1, 1) * 0.2;
  };
}



function Center() {
  this.x = width/2;
  this.y = height/2;
  this.show = function() {
    fill(255, 255, 0);
    ellipse(this.x, this.y, 1, 1);
  }
}
