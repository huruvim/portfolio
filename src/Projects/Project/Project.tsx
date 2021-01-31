import React from 'react';
import style from './Project.module.css'

type PropsType = {
    title: string
    description: string
}

export const Project: React.FC<PropsType> = (props) => {
    return (
        <div className={style.project}>
            <div className={style.containerImgButton}>
                <img className={style.icon} src={''}/>
                <button className={style.checkButton}>Check</button>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>

        </div>
    )
}

