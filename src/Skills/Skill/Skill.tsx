import React, {CSSProperties} from 'react';
import style from './Skill.module.scss'

type PropsType = {
    title: string
    description: string
    style: CSSProperties
}

export const Skill: React.FC<PropsType> = (props) => {
    return (
        <div className={style.skill}>
                <div style={props.style} className={style.img}/>
            <div className={style.textContainer}>
                <h3 className={style.skillTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    )
}

