import React from 'react';
import style from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'
import photo_of_me from './../assets/images/photo_of_me.jpg'

export const Main: React.FC = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container} >
                <div className={style.content}>
                    <div className={style.text}>
                        <span>Hi There</span>
                        <h1>I am Valentyn Lugovyi</h1>
                        <p>React Front-End Developer</p>
                    </div>
                    <div className={style.main_photo}>
                        <img className={style.photo} src={photo_of_me} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

