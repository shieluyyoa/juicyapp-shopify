import { motion } from 'framer-motion'
import React from 'react';
import gift from '../asset/412-gift-outline.gif'
import enter from '../asset/enter.svg'

const LauncherButton = ({ toggle, isOpen }) => {

    return (

        <button className={`launcherButton-inside`} onClick={toggle} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }} >
            <img style={{ display: 'inline-block', width: '20%' }} src={gift} />
            <div style={{ display: 'inline-block' }}>
                <h2 style={{ color: '#FFC72C', fontSize: '18px', fontWeight: '700', lineHeight: '20px', letterSpacing: '0.075px', margin: '0' }}>Pepper Club</h2>
                <div style={{ fontSize: '12px', fontWeight: '400', lineHeight: '15px', color: 'black', marginTop: '4px' }}>Get your reward now!
                </div>
            </div>
            <img src={enter} />
        </button>

    )
}




export default LauncherButton;