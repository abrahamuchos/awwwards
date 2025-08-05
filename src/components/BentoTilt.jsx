import { useRef, useState } from "react";

/**
 *
 * @param {JSX.Element} children
 * @param {string|null} className
 * @returns {JSX.Element}
 * @constructor
 */
export default function BentoTilt({children, className}) {
  const itemRef = useRef(/**@type {HTMLDivElement}*/null);
  const [transformStyle, setTransformStyle] = useState(/**@type {string}*/'');

  /**
   * Calculate the tilt effect based on mouse position and set the transform style
   * @param {MouseEvent} e
   */
  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 7;
    const tiltY = (relativeX - 0.5) * -7;
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.98, .98, .98)`;

    setTransformStyle(newTransform);
  }

  const handleMouseLeave = () => {
    setTransformStyle('');
  }

  return (
    <div className={className}
         ref={itemRef}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         style={{transform: transformStyle}}
    >
      {children}
    </div>
  );
}



