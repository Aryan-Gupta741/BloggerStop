import React, { useEffect } from 'react';
import $ from 'jquery';
import "../CSS/categories.css"

const categories = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
    
        const handleSlideButtonMouseenter = (index) => {
          $('.slide-buttons li.active').removeClass('active');
          $('.hero-center-section.show').removeClass('show');
          $(`.hero-center-section:nth-child(${index})`).addClass('show');
          $(`.slide-buttons li:nth-child(${index})`).addClass('active');
        };
    
        // Mousemove event listener
        document.body.addEventListener('mousemove', handleMousemove);
    
        // Mouseover and mouseout event listeners
        const hoverTargets = document.querySelectorAll('.hover-target');
        hoverTargets.forEach((target) => {
          target.addEventListener('mouseover', handleMouseover);
          target.addEventListener('mouseout', handleMouseout);
        });
    
        // Slide button mouseenter event listeners
        const slideButtons = document.querySelectorAll('.slide-buttons li');
        slideButtons.forEach((button, index) => {
          button.addEventListener('mouseenter', () => handleSlideButtonMouseenter(index + 1));
        });
    
        // Cleanup function
        return () => {
          document.body.removeEventListener('mousemove', handleMousemove);
          hoverTargets.forEach((target) => {
            target.removeEventListener('mouseover', handleMouseover);
            target.removeEventListener('mouseout', handleMouseout);
          });
          slideButtons.forEach((button, index) => {
            button.removeEventListener('mouseenter', () => handleSlideButtonMouseenter(index + 1));
          });
        };
      }, []);
    
      const handleSwitchClick = () => {
        if ($('body').hasClass('light')) {
          $('body').removeClass('light');
          $('.switch').removeClass('switched');
        } else {
          $('body').addClass('light');
          $('.switch').addClass('switched');
        }
      };
    
      $(document).ready(() => {
        $('.switch').on('click', handleSwitchClick);
        $('.slide-buttons li:nth-child(1)').trigger('mouseenter');
      });
  return (
            <><div className="hero-center-section">
          <div className="left-text">nature</div>
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-md-8">
                      <div className="img-wrap">
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/nature.jpg" alt="" />
                      </div>
                  </div>
              </div>
          </div>
      </div><div className="hero-center-section">
              <div className="left-text">travel</div>
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-md-8">
                          <div className="img-wrap">
                              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/travel.jpg" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </div><div className="hero-center-section">
              <div className="left-text">fashion</div>
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-md-8">
                          <div className="img-wrap">
                              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/fashion.jpg" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </div><div className="hero-center-section">
              <div className="left-text">animals</div>
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-md-8">
                          <div className="img-wrap">
                              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/animals.jpg" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </div><div className="hero-center-section">
              <div className="left-text">business</div>
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-md-8">
                          <div className="img-wrap">
                              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/business.jpg" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </div><div className="hero-center-section">
              <div className="left-text">art</div>
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-md-8">
                          <div className="img-wrap">
                              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/art.jpg" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </div><div className="section padding-top-bottom over-hide z-bigger">
              <ul className="slide-buttons">
                  <li className="">
                      <a href="#0" className="hover-target" data-hover="nature">nature</a>
                  </li>
                  <li className="">
                      <a href="#0" className="hover-target"  data-hover="travel">travel</a>
                  </li>
                  <li className="">
                      <a href="#0" className="hover-target" data-hover="fashion">fashion</a>
                  </li>
                  <li className="">
                      <a href="#0" className="hover-target" data-hover="animals">animals</a>
                  </li>
                  <li className="">
                      <a href="#0" className="hover-target" data-hover="business">business</a>
                  </li>
                  <li className="">
                      <a href="#0" className="hover-target" data-hover="art">art</a>
                  </li>
              </ul>
          </div>
          <div className='cursor' id="cursor">
            </div>
            <div className='cursor2' id="cursor2">
                </div>
                <div className='cursor3' id="cursor3">
                    </div>
                        <div className="bottom-right">
              <div className="switch">
                  <div className="circle hover-target"></div>
              </div>
          </div></>
  )
}

export default categories