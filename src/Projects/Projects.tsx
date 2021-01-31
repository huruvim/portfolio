import React from 'react';
import style from './Projects.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./Project/Project";


export const Projects: React.FC = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title={'To do List'} description={"Lorem ipsum dolor sit amet, consectetur adipisicing "}/>
                    <Project title={'Social Network'} description={"Lorem ipsum dolor sit amet, consectetur adipisicing "}/>
                    <Project title={'Counter'} description={"Lorem ipsum dolor sit amet, consectetur adipisicing "}/>
                    <Project title={'Portfolio'} description={"Lorem ipsum dolor sit amet, consectetur adipisicing "}/>
                </div>
            </div>
        </div>
    )
}

