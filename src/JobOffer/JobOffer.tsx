import React from 'react';
import style from './JobOffer.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import {Title} from "../common/components/Title";



export const JobOffer: React.FC = () => {
    return (
        <div className={style.jobOfferBlock}>
            <div className={`${styleContainer.container} ${style.jobOfferContainer}`}>
                <Title title={'I am available for freelance'}/>
                <div className={style.hireMe}>
                    <button className={style.hireMeButton}>Hire me</button>
                </div>
            </div>
        </div>
    )
}

