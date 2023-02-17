import { motion } from 'framer-motion'
import React, { useState } from 'react';
import Button from '@mui/material/Button'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Cell from './Cell'
import background from '../asset/image_1.png'
import MemberPage from './MemberPage';
import logo from '../asset/surface1.png'




const Content = () => {
    const domain = window.location.origin;
    const [mainPageVisible, setMainPageVisible] = useState(true);
    const [newPageVisible, setNewPageVisible] = useState(false);
    const [loading, setLoading] = useState(true)
    const statusArr = ["shopping", "discount", "shipping", "sale"]

    const Newpage = (({ visible, setNewPageVisible, setMainPageVisible }) => {
        return (
            <div
                className='transition-3'
                style={{
                    height: visible ? '100%' : '0',
                    opacity: visible ? '1' : '0'
                }}
            >
                <div className='navbar'
                    style={{
                        backgroundColor: 'blueviolet',
                    }}
                    onClick={() => {
                        setNewPageVisible(false)
                        setMainPageVisible(true)
                    }}>
                    <Button>
                        <ArrowBackIosIcon />
                    </Button>
                </div>
                <div>

                </div>
            </div>
        )
    })

    return (
        <>

            <div style={{
                display: "flex",
                alignItems: 'center',
                minHeight: mainPageVisible ? '439px' : '0%',
                flexDirection: 'column',
                opacity: mainPageVisible ? '1' : '0',
            }}
                className='upperContent transition-3'>
                <div className='navbar' style={{
                    width: '317px', marginTop: '22px', marginBottom: '62px',
                    display: mainPageVisible ? "block" : "none",
                }}>
                    <img src={logo} />
                </div>
                <div style={{
                    width: '317px', fontFamily: 'Montserrat',
                    display: mainPageVisible ? "block" : "none",
                }}>
                    <h2 className='required' style={{
                        fontWeight: '700',
                        fontSize: '18px',
                        lineHeight: '20px',
                        color: 'white',

                    }}>
                        Become a member
                    </h2>
                    <p className='required' style={{
                        fontWeight: '400',
                        fontSize: '12px',
                        lineHeight: '15px',
                        color: '#FFC72C',
                        marginBottom: '32px'
                    }}>

                        You will enjoy more ways to unlock exclusive rewards, register now to enjoy your first benefit
                    </p>
                </div>
                <Button onClick={() => {
                    setMainPageVisible(false)
                    setNewPageVisible(true)
                }}
                    variant='contained'
                    className='required'
                    style={{
                        display: mainPageVisible ? "block" : "none",
                        marginBottom: '14px',
                        width: "70%",
                        textAlign: "center",
                        backgroundColor: "#FFC72C",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "18px",
                        letterSpacing: "0.075px"
                    }} >
                    register
                </Button>
                <Button className='required' href={`${domain}/account/login`} variant='contained' style={{
                    display: mainPageVisible ? "block" : "none",
                    width: "70%",
                    textAlign: "center",
                    color: "#FFC72C",
                    background: "white",
                    border: "1px solid #FFC72C",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "18px",
                    letterSpacing: "0.075px"

                }}>
                    Sign In
                </Button>

                <div style={{ width: '317px', marginTop: 'auto', marginBottom: '21px', display: mainPageVisible ? "block" : "none", }}>
                    <h3 className='required' style={{
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: '16px',
                        letterSpacing: '0.075px',
                        color: '#FFC72C',
                        marginBottom: '8px',
                        marginTop: '0px',

                    }}
                    >Enjoy exclusive rewards</h3>
                    <div style={{ display: 'block', background: '#FFC72C', borderRadius: '31px', height: '4px', width: '198px', }}>
                    </div>

                </div>

            </div>
            <div className='lowerContent transition-3' style={{
                margin: 'auto',
                minHeight: mainPageVisible ? '171px' : '0%',
                maxHeight: mainPageVisible ? '171px' : '0%',
                opacity: mainPageVisible ? '1' : '0',
                overflowY: 'scroll',
                overflowX: 'hidden'
            }}>
                {statusArr.map((value) => {
                    return <Cell status={value} />
                })
                }

            </div>

            <MemberPage visible={newPageVisible} setNewPageVisible={setNewPageVisible} setMainPageVisible={setMainPageVisible} />
        </>

    );
}

export default Content;