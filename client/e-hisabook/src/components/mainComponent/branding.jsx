import React, { useEffect, useState } from 'react'
import header from '../../image/header.png'
import { motion } from "framer-motion"
import '../../style/branding.css'




function Branding() {
  const text = "Are you still manageing you hisab OFFLINE..?";
  const text2 = "Now is the time to move on HISABOOK and Manage your All Accounts, Transations And Billing here...! ";

  const [displayText, setDisplayText] = useState('');
  const [displayText2, setDisplayText2] = useState('');


  useEffect(() => {
    let currentIndex = 0;
    let interval;
    let initalStart = setInterval(() => {
          clearInterval(initalStart);
          interval = setInterval(() => {
            if (currentIndex < text.length) {
              setDisplayText(text.slice(0, currentIndex + 1));
              currentIndex++;
            } else {
              clearInterval(interval);
              currentIndex = 0;
              interval = setInterval(() => {
                if (currentIndex < text2.length) {
                  setDisplayText2(text2.slice(0,currentIndex + 1));
                  currentIndex++;
                } else {
                  clearInterval(interval);
                }
              },40);
            }
          },50);
        },3000)
    return () => {
      clearInterval(interval);
      clearInterval(initalStart);
    }
  }, [text,text2]);
  return (
    <div>
        <div className="section-brand">
          <div className="into-container">
            <div className="wlc-box">
                <span>Welcome  &nbsp; to &nbsp; the </span><b>HisaBook</b><span>&nbsp;!</span>
            </div>
            <div className="intro">
            <div style={{display:'block',height:'40px'}}></div>
            <span className="typewriter-heading">{displayText}</span>
            <br/>
            <div style={{display:'block',height:'15px'}}></div>
            <span className="typewriter-heading" style={{whiteSpace: 'pre-line'}}>{displayText2}</span>
            </div>
            <div id='login-block-section'>
              
            </div>
          </div>
          <div className="logo-container">
            <motion.img 
              src={header}
              variants={{ initial: { x: 300 }, animate: { x: 0 }}}
              initial="initial"
              animate="animate"
              transition={{ duration: 1.4 }} 
            />
          </div>
        </div>
    </div>
  )
}

export default Branding