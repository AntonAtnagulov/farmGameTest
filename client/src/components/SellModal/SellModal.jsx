import React, { useState } from 'react';
import SellCard from '../SellCard/SellCard';
import style from './modal.module.css';

export default function SellModal({inventory, setShowModal}) {
    return (
        <>
            <div className={style.modalContainer}>
                <div>
                    <h3 style={{color: '#ffffff'}}>Sell</h3>
                </div>
                <SellCard type={inventory.wheats} name={'Wheats'} setShowModal={setShowModal}/>
                <SellCard type={inventory.eggs} name={'Eggs'} setShowModal={setShowModal}/>
                <SellCard type={inventory.milk} name={'Milk'} setShowModal={setShowModal}/>
            </div>
        </>
    );
}
