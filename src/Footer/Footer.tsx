import React from 'react';
import style from './Footer.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import {SocialNetwork} from "./SocialNetworks/SocialNetwork";
import { backgroundSocialImgCombiner } from './SocialNetworksImgs';


export const Footer: React.FC = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.name}>
                    <h2>Valentyn Lugovyi</h2>
                </div>
                <div className={style.boxesContainer}>
                    <SocialNetwork socialNetwork={backgroundSocialImgCombiner.telegramImg()}/>
                    <SocialNetwork socialNetwork={backgroundSocialImgCombiner.facebookImg()}/>
                    <SocialNetwork socialNetwork={backgroundSocialImgCombiner.gitHubImg()}/>
                    <SocialNetwork socialNetwork={backgroundSocialImgCombiner.linkedinImg()}/>
                </div>
                <p className={style.commonSign}>© 2021 All Rights Reserved</p>
            </div>
        </div>
    )
}

