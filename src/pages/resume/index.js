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

export default function Resume() {

    const abouteRef = React.useRef(null);
    const skillsRef = React.useRef(null);
    const expirienceRef = React.useRef(null);
    const projectsRef = React.useRef(null);
    const contactMeRef = React.useRef(null);

    const handleScrollToView = (view) => {
        if (view === "ABOUT_ME") {
            abouteRef.current.scrollIntoView({ behavior: 'smooth' })
        } if (view === "SKILLS") {
            skillsRef.current.scrollIntoView({ behavior: 'smooth' })
        } if (view === "EXPERIENCE") {
            expirienceRef.current.scrollIntoView({ behavior: 'smooth' })
        } if (view === "PROJECTS") {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' })
        } if (view === "CONTACTS") {
            contactMeRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }


    return (

        <div>

            <ResumeTopBar onItemClick={(val) => { handleScrollToView(val) }} />
            <div style={{ height:'95vh', overflowY:'scroll', marginTop:50}}>
                <div ref={abouteRef} />
                <Aboutme onContactMeClick={() => { handleScrollToView('CONTACTS') }} />

                <div ref={skillsRef} />
                <Skills />

                <div ref={expirienceRef} />
                <Experience />

                <div ref={projectsRef} />
                <Projects />

                <SketchAndDesigns />

                <div ref={contactMeRef} />
                <ContactMe />

                <CopyRight />
            </div>


        </div>
    )
}