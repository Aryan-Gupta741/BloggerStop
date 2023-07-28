// CursorAnimation.jsx
import React, { useEffect } from 'react';
import $ from 'jquery';
import "../CSS/cursor_animation.css"

const CursorAnimation = () => {
  useEffect(() => {
    const handleMousemove = (event) => {
      const { clientX, clientY } = event;
      $('#cursor').css({ left: clientX + 'px', top: clientY + 'px' });
      $('#cursor2').css({ left: clientX + 'px', top: clientY + 'px' });
      $('#cursor3').css({ left: clientX + 'px', top: clientY + 'px' });
    };

    const handleMouseover = () => {
      $('#cursor2, #cursor3').addClass('hover');
    };

    const handleMouseout = () => {
      $('#cursor2, #cursor3').removeClass('hover');
    };

    // Mousemove event listener
    document.body.addEventListener('mousemove', handleMousemove);

    // Mouseover and mouseout event listeners
    const hoverTargets = document.querySelectorAll('.hover-target');
    hoverTargets.forEach((target) => {
      target.addEventListener('mouseover', handleMouseover);
      target.addEventListener('mouseout', handleMouseout);
    });

    // Cleanup function
    return () => {
      document.body.removeEventListener('mousemove', handleMousemove);
      hoverTargets.forEach((target) => {
        target.removeEventListener('mouseover', handleMouseover);
        target.removeEventListener('mouseout', handleMouseout);
      });
    };
  }, []);

  return (
    <>
      <div className='cursor' id="cursor"></div>
      <div className='cursor2' id="cursor2"></div>
      <div className='cursor3' id="cursor3"></div>
    </>
  );
};

export default CursorAnimation
