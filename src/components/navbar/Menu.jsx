import React, { useEffect, useRef, useState } from 'react';
import './Menu.css'

const MenuBlob = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(window.innerHeight / 2);
  const [curveX, setCurveX] = useState(10);
  const [curveY, setCurveY] = useState(0);
  const [menuExpanded, setMenuExpanded] = useState(false);
  const blobPathRef = useRef(null);
  const blobRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setX(e.pageX);
      setY(e.pageY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const easeOutExpo = (currentIteration, startValue, changeInValue, totalIterations) => {
    return changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue;
  };

  const svgCurve = () => {
    const hoverZone = 150;
    const expandAmount = 20;

    let targetX = 0;

    if (!menuExpanded && x < hoverZone) {
      targetX = -(((60 + expandAmount) / 100) * (x - hoverZone));
    }

    const newCurveX = easeOutExpo(1, curveX, targetX - curveX, 100);
    const newCurveY = easeOutExpo(1, curveY, y - curveY, 100);

    setCurveX(newCurveX);
    setCurveY(newCurveY);

    const anchorDistance = 200;
    const curviness = anchorDistance - 40;

    const newCurvePath = `
      M60,${window.innerHeight}H0V0h60v${newCurveY - anchorDistance}
      c0,${curviness},${newCurveX},${curviness},${newCurveX},${anchorDistance}
      S60,${newCurveY},60,${newCurveY + anchorDistance * 2}V${window.innerHeight}z
    `;

    if (blobPathRef.current) blobPathRef.current.setAttribute('d', newCurvePath);
    if (blobRef.current) blobRef.current.style.width = `${newCurveX + 60}px`;
    if (hamburgerRef.current) hamburgerRef.current.style.transform = `translate(${newCurveX}px, ${newCurveY}px)`;
  };

  useEffect(() => {
    const animationFrame = requestAnimationFrame(svgCurve);
    return () => cancelAnimationFrame(animationFrame);
  });

  return (
    <div id="menu">
      <div
        className="hamburger"
        ref={hamburgerRef}
        onMouseEnter={() => setMenuExpanded(true)}
        onMouseLeave={() => setMenuExpanded(false)}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div
        className="menu-inner"
        onMouseEnter={() => setMenuExpanded(true)}
        onMouseLeave={() => setMenuExpanded(false)}
      >
        <ul>
          <li>Menu Item</li>
          <li>Menu Item</li>
          <li>Menu Item</li>
          <li>Menu Item</li>
          <li>Menu Item</li>
          <li>Menu Item</li>
        </ul>
      </div>

      <svg
        version="1.1"
        id="blob"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        ref={blobRef}
      >
        <path
          id="blob-path"
          ref={blobPathRef}
          d="M60,500H0V0h60c0,0,20,172,20,250S60,900,60,500z"
        />
      </svg>

      <h2>Hover close to the menu</h2>
    </div>
  );
};

export default MenuBlob;
