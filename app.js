let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

function draw(x) {
  if (x < 100) {
    setTimeout(function() {
      x++;
      console.log(x);
      ctx.beginPath();
      ctx.arc(
        Math.ceil(Math.random() * 100),
        Math.ceil(Math.random() * 100),
        Math.ceil(Math.random() * 100),
        0,
        2 * Math.PI
      );
      ctx.stroke();
      draw(x);
    }, 100);
  }
}
draw(0);
