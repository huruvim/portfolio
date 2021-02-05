import React from 'react';
import style from './Title.module.scss'

type PropsType = {
    title: string
}

export const Title: React.FC<PropsType> = (props) => {
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>

    )
}

