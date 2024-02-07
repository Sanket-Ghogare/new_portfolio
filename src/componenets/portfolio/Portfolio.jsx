import  './Portfolio.scss';
import {motion, useScroll, useSpring} from "framer-motion";   // motion is component and useScroll is the hook.
import React, { useRef } from "react";

const items = [
    {
        id: 1,
        title:"React Js",
        img:"https://www.pexels.com/photo/winter-day-20054790/",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, corporis! Recusandae tempore dolores a saepe porro expedita cum eaque iure sed."
    },
    {
        id: 2,
        title:"Angular Js",
        img:"https://images.pexels.com/photos/19808987/pexels-photo-19808987/free-photo-of-road-in-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, corporis! Recusandae tempore dolores a saepe porro expedita cum eaque iure sed."
    },
    {
        id: 3,
        title:"Image Enhance App",
        img:"https://images.pexels.com/photos/19992083/pexels-photo-19992083/free-photo-of-arc-de-triomphe-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, corporis! Recusandae tempore dolores a saepe porro expedita cum eaque iure sed."
    },
    {
        id: 4,
        title:"Music App",
        img:"https://images.pexels.com/photos/1051589/pexels-photo-1051589.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, corporis! Recusandae tempore dolores a saepe porro expedita cum eaque iure sed."
    },
];

const Single = ({item}) =>{
    const ref = useRef();

    const {scrollMyProgress} = useScroll({
        target: ref,
        // offset:["start start", "end start"]
    });

    const scaleY = useTransform(scrollMyProgress,[0, 1], [-300, 300]);

    return <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer"  ref={ref}>
                <img src={item.img}/>
                <motion.div className="textContainer" style={{scaleY}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>Text Me</button>
                </motion.div>
                </div>
            </div>
        </div>
    </section>
};
const Portfolio = () => {

    const ref = useRef();

    const {scrollMyProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollMyProgress,{
        stiffness:100,
        damping:30,
    })

  return (
    <div className='portfolio' ref={ref}>
        <div className="sam">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="samHello"></motion.div>
        </div>

      {items.map((item) => {
        <Single item={item} value={item.id}/>
      })}
    </div>
  )
}

export default Portfolio;