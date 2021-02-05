import React, {CSSProperties} from 'react';
import style from './Project.module.scss'

type PropsType = {
    title: string
    description: string
    style?: CSSProperties
}

export const Project: React.FC<PropsType> = (props) => {
    return (
        <div className={style.project}>
            <div className={style.ImgContainer} style={props.style}>
                <button className={style.checkButton}>Check</button>
            </div>
            <div className={style.textContainer}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    )
}

