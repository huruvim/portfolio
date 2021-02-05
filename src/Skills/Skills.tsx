import React from 'react';
import style from './Skills.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/Title";
import { backgroundSkillsImgCombiner } from './SkillsImgs';

export const Skills: React.FC = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'My Skills'}/>
                <div className={style.skills}>
                    <Skill style={backgroundSkillsImgCombiner.reactPho()} title={"React"} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill style={backgroundSkillsImgCombiner.reduxPho()} title={"Redux"} description={'Deserunt id magnam nisi quasi sapiente tempore vitae? '}/>
                    <Skill style={backgroundSkillsImgCombiner.jsPho()} title={"JavaScript"} description={'Aliquam aperiam consequatur culpa eligendi enim, error esse'}/>
                    <Skill style={backgroundSkillsImgCombiner.tsPho()} title={"TypeScript"} description={'Aliquam aperiam consequatur culpa eligendi enim, error esse'}/>
                    <Skill style={backgroundSkillsImgCombiner.axiosPho()} title={"Axios"} description={'Aliquam aperiam consequatur culpa eligendi enim, error esse'}/>
                    <Skill style={backgroundSkillsImgCombiner.restApiPho()} title={"REST-API"} description={'Aliquam aperiam consequatur culpa eligendi enim, error esse'}/>
                    <Skill style={backgroundSkillsImgCombiner.matUiPho()} title={"Material-UI"} description={'Aliquam aperiam consequatur culpa eligendi enim, error esse'}/>
                    <Skill style={backgroundSkillsImgCombiner.reduxThunkPho()} title={"Redux-Thunk"} description={'Aliquam aperiam consequatur culpa eligendi enim, error esse'}/>
                </div>
            </div>
        </div>
    )
}

