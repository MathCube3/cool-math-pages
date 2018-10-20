var programCode = function(processingInstance) {
  with (processingInstance) {
    size(600, 600);
    frameRate(30);

    // Paste code from Khan Academy here:
    var drawHexagon = function(scale, x, y){
      var l = sqrt(pow(scale, 2) + pow((scale/2), 2));

      point(x, y);
      line(x + scale, y + scale/2, x + scale, y - scale/2);
      line(x + scale, y - scale/2, x, y - l);
      line(x, y - l, x - scale, y - scale/2);
      line(x - scale, y - scale/2, x - scale, y + scale/2);
      line(x - scale, y + scale/2, x, y + l);
      line(x, y + l, x + scale, y + scale/2);
      //According to the Pythagorean Theorem, the distance from the center to a vertice has to be longer than the distance from the center to the middle of an edge.
    };

    var drawWindmill = function(scale, x, y){
      var l = sqrt(pow(scale, 2) + pow((scale/2), 2));

      line(x, y, x, y + l);
      line(x, y, x + scale, y - scale/2);
      line(x, y, x - scale, y - scale/2);
    };

    var drawCube = function(scale, x, y){
      drawHexagon(scale, x, y);
      drawWindmill(scale, x, y);
    };


    drawCube(50, 100, 100);
    drawCube(40, 200, 105);
    drawCube(30, 280, 110);
    drawCube(20, 340, 115);
    drawCube(10, 380, 120);
    drawCube(0, 400, 125);
    drawCube(-10, 420, 120);
    drawCube(-20, 460, 115);
    drawCube(-30, 520, 110);
    drawCube(-40, 100, 220);
    drawCube(-50, 200, 215);
    drawCube(125, 140, 450);
    drawCube(-125, 460, 450);




  }};

// Get the canvas that ProcessingJS will use
var canvas = document.getElementById("mycanvas");
// Pass the function to ProcessingJS constructor
var processingInstance = new Processing(canvas, programCode);
