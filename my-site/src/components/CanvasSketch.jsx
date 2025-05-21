import { useEffect, useRef } from 'react';
import p5 from 'p5';

function CanvasSketch() {
  const sketchRef = useRef();

  useEffect(() => {
    const s = (p) => {
      let angle = 0;
      let radius = 80;
      let dot = { x: 0, y: 0, vx: 2, vy: 2 };

      p.setup = () => {
        p.createCanvas(300, 300).parent(sketchRef.current);
        p.frameRate(60);
      };

      p.draw = () => {
        p.background('#0a192f'); // match your site background

        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.rotate(angle);
        angle += 0.01;

        // draw rotating hexagon
        p.stroke('#facc15'); // amber-400
        p.strokeWeight(2);
        p.noFill();
        p.beginShape();
        for (let i = 0; i < 6; i++) {
          let a = p.TWO_PI / 6 * i;
          let x = p.cos(a) * radius;
          let y = p.sin(a) * radius;
          p.vertex(x, y);
        }
        p.endShape(p.CLOSE);
        p.pop();

        // update dot position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // bounce off edges
        if (dot.x < 0 || dot.x > p.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > p.height) dot.vy *= -1;

        // draw dot
        p.noStroke();
        p.fill('#60a5fa'); // blue-400
        p.circle(dot.x, dot.y, 10);
      };
    };

    const p5Instance = new p5(s);
    return () => p5Instance.remove();
  }, []);

  return (
  <div
    ref={sketchRef}
    className="fixed right-8 top-1/2 -translate-y-1/2 z-50 w-[300px] h-[300px]"
  />
);

}

export default CanvasSketch;
