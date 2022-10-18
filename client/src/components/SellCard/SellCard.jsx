import React from 'react';
import style from './sellCard.module.css'

export default function SellCard({type, name, setShowModal}) {
    const modalCloseHandler = () => {
        setShowModal(false)
    }

    return (
        <div className={style.mainBox}>
            <div className={style.countBox}>
                <span className={style.text}>{name}</span>
            </div>
            <div className={style.countBox}>
                 <span className={style.text}>{type}</span>
                <span className={style.text}>10$</span>
            </div>
            <div>
                <button className={style.sellBtn}>sell</button>
                <button className={style.sellBtn}>sell all</button>
            </div>
            <img onClick={modalCloseHandler} src='./cancel.png' className={style.img}/>
        </div>
    );
}
