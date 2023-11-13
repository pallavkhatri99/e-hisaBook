import React, { useState } from 'react'
import { Button } from 'antd';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../style/featureCard.css'


function FeatureCard({img,head,desc,more,index}) {
  let [showMore,visibleMore] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // The animation triggers once when in view
  });

  const variants = {
    hidden: { x: index%2==0 ? 1000:-1000 }, // Start position (off-screen to the left)
    visible: { x:0, transition: { delay: 0.5, duration: 1.5 } },    // End position (center of the screen)
  };

  if (inView) {
    controls.start('visible'); // Start the animation when in view
  }
  return (
    <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="card-f"
      >
        <div className="card-box">
            <div className="img-logo"><img src={img} style={{width:'80px',height:'80px'}}/></div>
            <h3>{head}</h3>
            <div className="card-desc">{desc}</div>
            {showMore ? 
              <div className="card-more"><br/>{more}</div>:
              <span>
                <Button type="text" shape='round' onClick={()=>visibleMore(!showMore)}>
                  Read more..
                </Button>
              </span>
            }
        </div>
    </motion.div> 
  )
}

export default FeatureCard;
