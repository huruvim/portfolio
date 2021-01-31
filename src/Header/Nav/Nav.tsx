import React from 'react';
import style from './Nav.module.css'


export const Nav:React.FC = () => {
    return (
        <div className={style.nav}>
            <a className={style.link} href="">Main</a>
            <a className={style.link} href="">Skills</a>
            <a className={style.link} href="">Projects</a>
            <a className={style.link} href="">Contacts</a>
        </div>
    )
}

