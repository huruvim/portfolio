import React from 'react';
import style from './JobOffer.module.css'
import styleContainer from './../common/styles/Container.module.css'



export const JobOffer: React.FC = () => {
    return (
        <div className={style.jobOfferBlock}>
            <div className={`${styleContainer.container} ${style.jobOfferContainer}`}>
                <h2 className={style.title}>I am available for freelance</h2>
                <div className={style.hireMe}>
                    <button className={style.hireMeButton}>Hire me</button>
                </div>
            </div>
        </div>
    )
}

