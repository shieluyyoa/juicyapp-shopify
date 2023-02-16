import React from 'react';
import { motion, useCycle } from 'framer-motion'
import { useState } from 'react';
import LauncherButton from './components/LauncherButton'
import Content from './components/Content'
import { style } from '@mui/system';
import cross from './asset/launcherbutton-open.svg'

function App() {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const sidebar = {
    closed: {
      clipPath: `circle(${400}px at 90% 90%)`,
      transition: {
        type: "tween",
      }
    },
    open: {
      clipPath: "circle(20px at 88% 32.5px)",
      transition: {
        type: "tween",
      },
    }
  };

  const contentVariant = {
    closed: {
      opacity: 0,
      transition: {
        type: "tween",
      }
    },
    open: {
      opacity: 1,
      transition: {
        type: "tween",

      }
    }
  }

  return (
    <div className='all'>
      <motion.div initial={false} className='content main-content' animate={isOpen ? 'open' : 'closed'} variants={contentVariant}>
        <Content />
      </motion.div>
      <motion.div initial={false} className='launcherButton main-content' animate={isOpen ? 'open' : 'closed'} variants={sidebar}>
        <LauncherButton toggle={() => toggleOpen()} isOpen={isOpen} />
      </motion.div>
      <button className='main-content' style={{ opacity: isOpen ? '1' : '0', position: 'absolute', top: '90%', width: '65px', height: '65px', borderRadius: '50%', borderWidth: '0px', boxShadow: '0px 4px 31px -1px rgba(0, 0, 0, 0.15)', background: '#FCFCFC', transition: 'opacity 0.2s ease-out' }} onClick={toggleOpen}><img src={cross} /></button>
    </div >


  );
}

export default App;
