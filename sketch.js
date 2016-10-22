var nickle;
var marny;
var song;

function preload()
{
  nickle = loadAnimation ("assets/nickle_01.png", "assets/nickle_12.png");
  marny = loadAnimation ("assets/marny_01.png", "assets/marny_04.png");
  finish = loadImage ("assets/finish.png");
  song = loadSound ("assets/mambo.mp3");
}

function setup()
{
  createCanvas(1000, 500);
  background(222, 236, 227);
  katamari1 = new Katamari(10, 2, 3);
  katamari2 = new Katamari(20, 4, 170);
  song.play();
}

function draw()
{
  background(222, 236, 227);

  image(finish, 800, 0);

  katamari1.display();
  katamari1.move();
  katamari1.interact();

  katamari2.display02();
  katamari2.move();
  katamari2.interact();
}

function Katamari(tempWingspan)
{
  this.wingspan = tempWingspan;
  this.speed = random(1, 10);
  var ex = 0;

  this.display = function()
  {
    animation(nickle, ex, 100, this.wingspan);
  }

  this.display02 = function()
  {
    animation(marny, ex, 350, this.wingspan);
  }

  this.move = function()
  {
    ex = ex + this.speed;
  }

  this.interact = function()
  {
    if(mouseX < 10)
    {
      ex = 0;
    }
  }
}
