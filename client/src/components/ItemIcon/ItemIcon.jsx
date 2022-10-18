import React from 'react';
import style from './icon.module.css';

export default function ItemIcon({inventory, imgUrl, showModalHandler}) {
    return (
        <div className={style.itemCard}>
            <img src={imgUrl} className={style.itemIcon} />
            <div className={style.budgeCount}>
                <span className={style.budgeText}>{inventory}</span>
            </div>
            <div className={style.budgeSell}>
                <span onClick={showModalHandler} className={style.budgeText}>sell</span>
            </div>
        </div>
    );
}
