import React from 'react'
import ResumeTopBar from './resumetopbar';
import Aboutme from './aboutme';
import Skills from './skills';
import Experience from './experience';
import Projects from './projects';
import SketchAndDesigns from './sketchs';
import ContactMe from './contactme/index';
import CopyRight from './copyright';

export default function Resume (){
    return (
        
        <div style={{paddingTop:50}}> 
            <Aboutme/>
            <Skills/>
            <Experience/>
            <Projects/>
            <SketchAndDesigns/>
            <ContactMe/>
            <CopyRight/>
            <ResumeTopBar/>
        </div>
    )
}