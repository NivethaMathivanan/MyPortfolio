import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../Component/Css/Hero.css";

function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="hero text-start" id="hero">
      <div className="hero-background">
        <div className="code-bg">{`<Code />`}</div>
        <div className="code-bg">{`<h2 />`}</div>
        <div className="code-bg">{`<br />`}</div>
        <div className="code-bg">{`<span  />`}</div>

        <div className="code-bg">{`<Script />`}</div>
        <div className="code-bg">{`<React.Fragment>`}</div>
        <div className="code-bg">{`<Route>`}</div>
        <div className="code-bg">{`<Switch>`}</div>
        <div className="code-bg">{`<span  />`}</div>
        <div className="code-bg">{`<span  />`}</div>

        <div className="code-bg">{`<Code />`}</div>
        <div className="code-bg">{`<useEffect>`}</div>
        <div className="code-bg">{`<Code />`}</div>
        <div className="code-bg">{`<Outlet>`}</div>
        <div className="code-bg">{`<Link>`}</div>
        <div className="code-bg">{`<input>`}</div>
        <div className="code-bg">{`<select>`}</div>
        <div className="code-bg">{`<label>`}</div>
        <div className="code-bg">{`<ol>`}</div>
        <div className="code-bg">{`<tbody>`}</div>
        <div className="code-bg">{`<div>`}</div>
        <div className="code-bg">{`<ErrorBoundary>`}</div>
        <div className="code-bg">{`<Fragment>`}</div>
        <div className="code-bg">{`function createPortfolio() {`}</div>
        <div className="code-bg">{`const projects = [];`}</div>
      </div>

      <motion.div
        className="hero-container"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="hero-left text-start" >
          <motion.p className="hello-text" variants={itemVariants}>
            Hello, I'm
          </motion.p>

          <motion.h1
            className="hero-name gradient-text"
            variants={itemVariants}
          >
            Nivetha Mathivanan
          </motion.h1>

          <motion.h2 className="hero-role" variants={itemVariants}>
            <span className="typing-animation">𝚆𝙴𝙱 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁</span>
          </motion.h2>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            𝚄𝙸 𝙳𝚎𝚜𝚒𝚐𝚗𝚎𝚛, 𝙵𝚛𝚘𝚗𝚝 𝙴𝚗𝚍 𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛
          </motion.p>

          <motion.div className="hero-buttons " variants={itemVariants}>
            <a href="#contact" className="btn-primary">
              Contact Me
            </a>
            <a href="#portfolio" className="btn-secondary">
              View Work
            </a>
          </motion.div>

          <motion.div className="social-links" variants={itemVariants}>
            {/* Add your social links here */}
          </motion.div>
        </div>

        {/* <motion.div className="hero-right" variants={itemVariants}>
          {/* Optional: Add developer illustration or image */}
          {/* <div className="developer-illustration">
            
          </div> */}
        {/* </motion.div>  */}
      </motion.div>
    </section>
  );
}

export default Hero;