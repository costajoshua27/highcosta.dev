import { useRef, useState } from 'react';
import { useSpring, animated, config } from '@react-spring/web';

const calcPerspective = (
  x: number,
  y: number,
  rect: DOMRect
): [number, number, number] => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.4
];

const translate = (x: number, y: number, s: number) : string =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Perspective({
  children 
}: {
  children?: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [xys, set] = useState([0, 0, 1]);
  const props = useSpring({ xys, config: config.default });

  return (
    <div className="perspective" ref={ref}>
      <animated.div
        style={{ 
          transform: props.xys.to(translate),
          width: '20ch',
          height: '20ch',
          background: 'hotpink',
          borderRadius: '5px',
          transition: 'box-shadow 0.5s',
          willChange: 'transform'
        }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          e.preventDefault();
          const rect = ref.current!.getBoundingClientRect();
          set(calcPerspective(e.clientX, e.clientY, rect));
        }}
      >
        {children}
      </animated.div>
    </div>
  );
};