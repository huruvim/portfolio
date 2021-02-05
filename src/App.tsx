import React from 'react';
import './App.scss';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import { Skills } from './Skills/Skills';
import {Projects} from "./Projects/Projects";
import {JobOffer} from "./JobOffer/JobOffer";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";

export const App:React.FC = () => {
    return (
        <div className={"App"}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <JobOffer/>
            <Contacts/>
            <Footer/>
        </div>
    )
}
