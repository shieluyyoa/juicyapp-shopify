import React, { useState } from 'react';
import logo from '../asset/surface1.png'
import crown from '../asset/XMLID_330_.png'
import TabComponent from './TabComponent'

const MemberPage = (({ visible, setNewPageVisible, setMainPageVisible }) => {
    return (
        <div
            className='transition-3'
            style={{
                height: visible ? '100%' : '0',
                opacity: visible ? '1' : '0'
            }}
        >
            <div style={{ paddingLeft: '24px' }}>
                <div className='navbar' style={{
                    width: '317px', marginTop: '22px',
                }}>
                    <img src={logo} />
                </div>
                <h2 style={{
                    fontWeight: 700, fontSize: '18px', lineHeight: '20px',
                    letterSpacing: '0.  075px', color: 'black', marginBottom: '8px'
                }}>
                    Alex Chan
                </h2>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={crown} />
                    <h3 style={{
                        display: 'inline-block',
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: '18px',
                        letterSpacing: '0.075px',
                        color: '#FFC72C',
                        marginTop: 0,
                        marginBottom: 0, marginLeft: '8px'
                    }}>
                        Member
                    </h3>
                </div>

                <div style={{
                    fontSize: '64px',
                    fontWeight: 600,
                    lineHeight: '14px',
                    letterSpacing: '0.075px',
                    color: 'black', marginTop: '40px'
                }}>
                    105
                </div>
                <div style={{
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '15px',
                    color: '#FFC72C', marginTop: '36px'
                }}>
                    · 1 point for every $10 spent
                </div>
            </div>

            <TabComponent />
        </div>
    )
})


export default MemberPage;