import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";


export const Skills: React.FC = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`} >
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    <Skill title={"React"} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill title={"Redux"} description={'Deserunt id magnam nisi quasi sapiente tempore vitae? '}/>
                    <Skill title={"JavaScript"} description={'Aliquam aperiam consequatur culpa eligendi enim, error esse'}/>
                    <Skill title={"TypeScript"} description={'Aliquam aperiam consequatur culpa eligendi enim, error esse'}/>
                    <Skill title={"Axios"} description={'Aliquam aperiam consequatur culpa eligendi enim, error esse'}/>
                    <Skill title={"REST-API"} description={'Aliquam aperiam consequatur culpa eligendi enim, error esse'}/>
                    <Skill title={"Material-UI"} description={'Aliquam aperiam consequatur culpa eligendi enim, error esse'}/>
                    <Skill title={"Redux-Thunk"} description={'Aliquam aperiam consequatur culpa eligendi enim, error esse'}/>
                </div>
            </div>
        </div>
    )
}

