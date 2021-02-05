import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import {Title} from "../common/components/Title";


export const Contacts: React.FC = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'}/>
                <form className={style.form}>
                    <input id={style.name} type={"text"} name={"name"} placeholder={"Name"}
                           className={style.fillIn}/>
                    <input id={style.email} type={"text"} name={"email"} placeholder={"E-mail"}
                           className={style.fillIn}/>
                    <textarea id={style.yourMessage} name={"yourMessage"} placeholder={"Your massage"}
                              className={style.fillIn}/>
                    <button className={style.sendButton} onClick={() => {}}>Send</button>
                </form>
            </div>
        </div>
    )
}

