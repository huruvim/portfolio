import React from 'react';
import style from './Footer.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {SocialNetworks} from "./SocialNetworks/SocialNetworks";



export const Footer: React.FC = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.name}>Lugovyi Valentyn</h2>
                <div className={style.boxesContainer}>
                    <SocialNetworks/>
                </div>
                <p className={style.commonSign}>© 2021 All Rights Reserved</p>
            </div>
        </div>
    )
}

