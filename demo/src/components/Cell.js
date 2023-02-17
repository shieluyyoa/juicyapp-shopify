import React, { useState } from 'react';
import shoppingBag from '../asset/shopping.svg'
import money from '../asset/money.svg'
import deliveryBox from '../asset/delivery-box.svg'
import discountIcon from '../asset/discount.svg'
import { Button } from '@mui/material';
import * as couponStatus from '../Status'
import CopyToClipboardButton from './Button/CopyToClipBoardButton';

const Cell = ({ status }) => {

    const date = new Date();

    console.log("date>>", date)

    const Label = ({ label, expiryDate }) => {
        return (
            <div className="required" style={{ marginRight: "2em" }}>
                <h4 className="required"
                    style={{ fontWeight: 600, fontSize: '14px', marginBottom: '0.25rem', marginTop: '0' }}>
                    {label
                    }</h4>
                <div className="required" style={{ fontSize: '14px', color: 'orange' }}>
                    Expiry Date:{expiryDate}
                </div>
            </div>
        )
    };


    return (
        <>
            {status == couponStatus.BUY_1_GET_1_FREE
                &&
                <div className="required"
                    style={{ width: "100%", display: "flex", justifyContent: "space-evenly", margin: '30px 0px', alignItems: "center" }}>
                    <img src={shoppingBag} />

                    <Label label="Buy 1 Get 1 Free" expiryDate={date.toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' })} />

                    <Button className="required" style={{
                        borderRadius: '10px', color: '#FAB800', height: '24px',
                        width: '70px', borderColor: '#FAB800', backgroundColor: 'white',
                        fontSize: '12px', lineHeight: '16px', fontWeight: '500', textAlign: 'center',
                    }} variant="outlined" size='small'>
                        50 pts
                    </Button>
                </div>
            }

            {status == couponStatus.DISCOUNT
                &&
                <div className="required" style={{ width: "100%", display: "flex", justifyContent: "space-evenly", margin: '30px 0px', alignItems: "center" }}>
                    <img src={discountIcon} />
                    <Label label="Discount " expiryDate={date.toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' })} />

                    <CopyToClipboardButton variant="outlined" size='small' couponCode="adakbdks12123" />
                </div>
            }

            {status == couponStatus.SALE
                &&
                <div className="required" style={{ width: "100%", display: "flex", justifyContent: "space-evenly", margin: '30px 0px', alignItems: "center" }}>
                    <img src={money} />
                    <Label label="Sale" expiryDate={date.toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' })} />

                    <Button className="required" style={{
                        borderRadius: '10px', color: '#FAB800', height: '24px',
                        width: '70px', borderColor: '#FAB800', backgroundColor: 'white',
                        fontSize: '12px', lineHeight: '16px', fontWeight: '500', textAlign: 'center',
                    }} variant="outlined" size='small'>50 pts</Button>
                </div>
            }

            {status == couponStatus.SHIPPING
                &&
                <div className="required" style={{ width: "100%", display: "flex", justifyContent: "space-evenly", margin: '30px 0px', alignItems: "center" }}>
                    <img src={deliveryBox} />
                    <Label label="FREE SHIPPING" expiryDate={date.toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' })} />

                    <Button className="required" style={{
                        borderRadius: '10px', color: '#FAB800', height: '24px',
                        width: '70px', borderColor: '#FAB800', backgroundColor: 'white',
                        fontSize: '12px', lineHeight: '16px', fontWeight: '500', textAlign: 'center',
                    }} variant="outlined" size='small'>50 pts</Button>
                </div>
            }

        </>
    );
};

export default Cell;