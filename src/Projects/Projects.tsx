import React from 'react';
import style from './Projects.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./Project/Project";
import {Title} from "../common/components/Title";
import {backgroundProjectsImgCombiner} from "./ProjectsImgs";

export const Projects: React.FC = () => {



    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My Projects'}/>
                <div className={style.projects}>
                    <Project style={backgroundProjectsImgCombiner.todoList()} title={'To do List'} description={"Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur ipsum dolor sit ametipsum dolor sit amet"}/>
                    <Project style={backgroundProjectsImgCombiner.social()} title={'Social Network'} description={"Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"}/>
                    <Project style={backgroundProjectsImgCombiner.counter()} title={'Counter'} description={"Lorem ipsum dolor sit, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur"}/>
                    <Project style={backgroundProjectsImgCombiner.portfolio()} title={'Portfolio'} description={"Lorem ipsum dolor sit amet, consectetur adipisicing "}/>
                </div>
            </div>
        </div>
    )
}

