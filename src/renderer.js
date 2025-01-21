// import p5 from 'p5'; // import文を削除

new p5(function(p) {
    p.setup = function() {
      p.createCanvas(200, 200);
      p.background(255, 0, 0); // 赤色
    };
  });