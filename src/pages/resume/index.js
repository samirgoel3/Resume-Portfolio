import React from 'react'
import ResumeTopBar from './resumetopbar';
import Aboutme from './aboutme';
import Skills from './skills';
import Experience from './experience';
import Projects from './projects';
import SketchAndDesigns from './sketchs';
import ContactMe from './contactme/index';
import CopyRight from './copyright';
import { Grid } from '@mui/material';
import COLORS from '../../constants/Colors';

export default function Resume() {

    const abouteRef = React.useRef(null);
    const skillsRef = React.useRef(null);
    const expirienceRef = React.useRef(null);
    const projectsRef = React.useRef(null);
    const contactMeRef = React.useRef(null);
    const brainstromRef = React.useRef(null);

    const handleScrollToView = (view) => {
        if (view === "ABOUT_ME") {
            abouteRef.current.scrollIntoView({ behavior: 'smooth' })
        } if (view === "SKILLS") {
            skillsRef.current.scrollIntoView({ behavior: 'smooth' })
        } if (view === "EXPERIENCE") {
            expirienceRef.current.scrollIntoView({ behavior: 'smooth' })
        } if (view === "PROJECTS") {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' })
        } if (view === "BRAINSTROM") {
            brainstromRef.current.scrollIntoView({ behavior: 'smooth' })
        } if (view === "CONTACTS") {
            contactMeRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }


    


    return (

        <div>



            <div style={{ height: '100vh', overflowY: 'scroll' }}>
                <div ref={abouteRef} />
                <div style={{ height: 50, width: '100%' }}></div>

                <Aboutme onContactMeClick={() => { handleScrollToView('CONTACTS') }} />

                <div style={{height:50, width:'100%', backgroundColor:COLORS.RESUME_BACKGROUND}} ref={skillsRef} />
                <Skills />

                <div  style={{height:50, width:'100%', backgroundColor:COLORS.RESUME_BACKGROUND}} ref={expirienceRef} />
                <Experience />

                <div style={{height:50, width:'100%', backgroundColor:COLORS.RESUME_BACKGROUND_LIGHT}}ref={projectsRef} />
                <Projects />

                <div style={{height:50, width:'100%', backgroundColor:COLORS.RESUME_BACKGROUND_LIGHT}}  ref={brainstromRef} />
                <SketchAndDesigns />

                <div style={{height:50, width:'100%', backgroundColor:COLORS.RESUME_BACKGROUND_LIGHT}}  ref={contactMeRef} />
                <ContactMe />

                <CopyRight />
            </div>

            <div  >
                <ResumeTopBar onItemClick={(val) => { handleScrollToView(val) }} />
            </div>

        </div>
    )
}