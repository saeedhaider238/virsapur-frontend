import React from 'react'
import { PiTagChevronFill } from "react-icons/pi";
import { FaChevronRight } from "react-icons/fa";

const SnowFlake = ({color='black'}) => {
  return (
    <>
          {/* <PiTagChevronFill style={{fontSize: '40px'}} /><PiTagChevronFill style={{fontSize: '40px', transform: 'scaleY(2) scaleX(0.8)'}} /> */}
    
          <style>
            {`.burst-wrapper {
      width: 80px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .burst {
      width: 40px;
      height: 40px;
      background: black;
      clip-path: polygon(
        50% 0%,
        60% 30%,
        100% 50%,
        60% 70%,
        50% 100%,
        40% 70%,
        0% 50%,
        40% 30%
      );
      animation: pulseGap 1.5s ease-in-out infinite;
    }
    
    /* Animation */
    @keyframes pulseGap {
      0% {
        transform: scale(1);
        filter: drop-shadow(0 0 0px rgba(255,255,255,0.8));
      }
      50% {
        transform: scale(1.4);
        filter: drop-shadow(0 0 12px rgba(255,255,255,0.8));
      }
      100% {
        transform: scale(1);
        filter: drop-shadow(0 0 0px rgba(255,255,255,0.8));
      }
    }
      @keyframes moveRight {
      0% {
        transform: translateX(0px);
      }
      50% {
        transform: translateX(-3px);
      }
      100% {
        transform: translateX(0px);
      }
      }
    
      @keyframes moveLeft {
      0% {
        transform: translateX(0px);
      }
      50% {
        transform: translateX(-3px);
      }
      100% {
        transform: translateX(0px);
      }
      }
    
      @keyframes moveBottom {
      0% {
        transform: translateX(0px);
      }
      50% {
        transform: translateX(-3px);
      }
      100% {
        transform: translateX(0px);
      }
      }
    
      @keyframes moveUp {
      0% {
        transform: rotate(90deg) translateX(0px);
      }
      50% {
        transform: rotate(90deg) translateX(-3px);
      }
      100% {
        transform: rotate(90deg) translateX(0px);
      }
      }
    
      @keyframes moveDown {
      0% {
        transform: rotate(270deg) translateX(0px);
      }
      50% {
        transform: rotate(270deg) translateX(-3px);
      }
      100% {
        transform: rotate(270deg) translateX(0px);
      }
      }
    `}
          </style>
    
          {/* <div className="burst-wrapper">
            <div className="burst"></div>
          </div> */}
    
    
          <div style={{
            marginLeft: '0px'
          }}>
            <div style={{ height: '60px', display: 'flex', alignItems: 'center', position: 'relative' }}>
              <div >
                <div style={{ position: 'relative', width: '26px', height: '22px', animation: 'moveLeft 2s ease-in-out infinite'}}> <div style={{ position: 'absolute', top: 4.9 }}><PiTagChevronFill color={color} /></div> <div style={{ position: 'absolute', top: 0, left: 4, }}><FaChevronRight style={{ fontSize: '25px' }} color={color} /></div></div>
              </div>
    
              <div style={{ transform: 'rotate(180deg)' }}>
                <div style={{ position: 'relative', width: '20px', height: '30px', animation: 'moveRight 2s ease-in-out infinite', }}> <div style={{ position: 'absolute', right: 4.9, top: 5 }}><PiTagChevronFill color={color} /></div> <div style={{ position: 'absolute', top: 0, left: 4, }}><FaChevronRight style={{ fontSize: '25px' }} color={color} /></div></div>
              </div>
    
              <div style={{ transform: 'rotate(90deg) translateX(0px)', position: 'absolute', top: 4, left: 11, animation: 'moveUp 2s ease-in-out infinite'}}>
                <div style={{ position: 'relative', width: '20px', height: '30px', }}> <div style={{ position: 'absolute', right: 4.9, top: 5 }}><PiTagChevronFill color={color} /></div> <div style={{ position: 'absolute', top: 0, left: 4, }}><FaChevronRight style={{ fontSize: '25px' }} color={color} /></div></div>
              </div>
    
              <div style={{ transform: 'rotate(270deg)', position: 'absolute', bottom: 0, left: 15, animation: 'moveDown 2s ease-in-out infinite'}}>
                <div style={{ position: 'relative', width: '20px', height: '30px' }}> <div style={{ position: 'absolute', right: 4.9, top: 5 }}><PiTagChevronFill color={color} /></div> <div style={{ position: 'absolute', top: 0, left: 4, }}><FaChevronRight style={{ fontSize: '25px' }} color={color} /></div></div>
              </div>
            </div>
          </div>
    
          {/* <div style={{position: 'relative'}}> 
                  <div style={{width: '50px', height: '10px', backgroundColor: 'black'}}></div>
                  <div></div>
                </div> */}
    
    
        </>
  )
}

export default SnowFlake
