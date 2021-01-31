import React from 'react';
import style from './Contacts.module.css'
import styleContainer from './../common/styles/Container.module.css'


export const Contacts: React.FC = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                    <form className={style.form}>
                        <input type={"text"} id={"name"} name={"name"} placeholder={"Name"}
                        className={style.fillIn}/>
                        <input type={"text"} id={"email"} name={"email"} placeholder={"E-mail"}
                               className={style.fillIn}/>
                        <textarea id={style.yourMessage} name={"yourMessage"} placeholder={"Your massage"}
                                  className={style.fillIn}/>
                    </form>
                <div className={style.send}>
                    <button className={style.sendButton}>Send</button>
                </div>

            </div>
        </div>
    )
}

