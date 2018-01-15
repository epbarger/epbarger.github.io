$(document).ready(function(){
  /* Setup */

  const canvas = document.getElementById("terrain");
  const favicon = document.getElementById("favicon");
  const ctx = canvas.getContext("2d");
  const defaultSpeedMultiplier = 2;
  let w = window.innerWidth;
  let h = window.innerHeight;
  let backgroundColor = null;
  canvas.width = w;
  canvas.height = h;
  let speedMultiplier = defaultSpeedMultiplier;
  let lastTime = null;
  let offsetAdjust = 1;
  let paused = false;
  let terrainD = null;
  let terrainC = null;
  let terrainB = null;
  let terrainA = null;


  /* Functions */

  function buildTerrain(color, yRange, roughness, verticalDisplacement, iterations, speed){
    let pointsCenter = generatePoints(
      {x: 0, y: randomInterval(h * yRange.min, h * yRange.max)},
      {x: w, y: randomInterval(h * yRange.min, h * yRange.max)},
      roughness, verticalDisplacement, iterations);
    let pointsRight = generatePoints(
      {x: 0, y: pointsCenter[pointsCenter.length - 1].y},
      {x: w, y: randomInterval(h * yRange.min, h * yRange.max)},
      roughness, verticalDisplacement, iterations);
    return {
      color: color,
      pointsCenter: pointsCenter,
      pointsRight: pointsRight,
      offset: 0,
      speed: speed,
      swapAndRegen: function() {
        this.pointsLeft = this.pointsCenter;
        this.pointsCenter = this.pointsRight;
        this.pointsRight = generatePoints(
          {x: 0, y: this.pointsCenter[this.pointsCenter.length - 1].y},
          {x: w, y: randomInterval(h * yRange.min, h * yRange.max)},
          roughness, verticalDisplacement, iterations);
          this.offset = 0;
      },
      move: function() {
        this.offset -= ((speedMultiplier * this.speed) * offsetAdjust);
        if (this.offset < -w) {
          this.swapAndRegen();
        }
      }
    }
  }

  function generatePoints(start, end, roughness, verticalDisplacement, iterationCount){
    let points = [start, end]
    for (let i = 0; i < iterationCount; i++){
      let workingPoints = points.slice();
      for (let k = 0; k < workingPoints.length - 1; k++){
        pointA = workingPoints[k];
        pointB = workingPoints[k+1];
        midpoint = {x: (pointA.x + pointB.x)/2, y: (pointA.y + pointB.y)/2}
        midpoint.y += randomInterval(-verticalDisplacement, verticalDisplacement)
        points.splice(k*2+1, 0, midpoint)
      }
      verticalDisplacement *= Math.pow(2, -roughness);
    }
    return points
  } 

  function drawTerrain(terrain){
    ctx.fillStyle = terrain.color;
    ctx.strokeStyle = terrain.color;
    drawPoints(terrain.pointsCenter, terrain.offset);
    drawPoints(terrain.pointsRight, terrain.offset + w - 1);
  }

  function drawPoints(points, offset) {
    ctx.beginPath();  
    ctx.moveTo(points[0].x + offset, points[0].y);
    for (let i = 0; i < points.length; i++ ){
      let point = points[i];
      if ((point.x + offset) > w) { break; }
      ctx.lineTo(point.x + offset, point.y)
    }
    ctx.stroke();

    ctx.lineTo(points[points.length - 1].x + offset, h);
    ctx.lineTo(offset, h);
    ctx.fill();  
    ctx.closePath(); 
  }

  function randomInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function runAnimation(time){
    if (!paused){
      if (lastTime) {
        offsetAdjust = (time - lastTime) / (1/60*1000);
      }
      renderTerrain();
    }
    lastTime = time;
    window.requestAnimationFrame(runAnimation);
  }

  function renderTerrain(drawBackground){
    ctx.fillStyle = backgroundColor;
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    terrainD.move();
    terrainC.move();
    terrainB.move();
    terrainA.move();
    drawTerrain(terrainD);
    drawTerrain(terrainC);
    drawTerrain(terrainB);
    drawTerrain(terrainA);
  }

  function initTerrain(){
    backgroundColor = randomColor();
    terrainD = buildTerrain(randomColor(), {min: 0.25, max: 0.5}, 0.9, 200, 8, 1/20);
    terrainC = buildTerrain(randomColor(), {min: 0.5, max: 0.7}, 1, 120, 9, 1/7);
    terrainB = buildTerrain(randomColor(), {min: 0.7, max: 0.8}, 1.2, 60, 10, 1/3);
    terrainA = buildTerrain(randomColor(), {min: 0.8, max: 1.0}, 1.4, 20, 11, 1/1.2);
  }

  function updateFavicon(){
    favicon.href = canvas.toDataURL();
  }

  function reset(){
    initTerrain();
    renderTerrain();
    updateFavicon();
  }


  /* Bootup */

  console.log("check me out at https://github.com/epbarger/terrain")
  reset();
  runAnimation();


  /* Event binding */

  $("canvas").on("click", function(){
    reset();
  }); 

  $('body').keyup(function(e){
    if (e.keyCode == 32){
      paused = !paused;
    } else if (e.keyCode == 39){
      speedMultiplier = defaultSpeedMultiplier;
    }
  });

  $('body').keydown(function(e){
    if (e.keyCode == 39){
      speedMultiplier = 200;
    }
  })

  $(window).on("resize", function(){
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    reset();
  });
});
