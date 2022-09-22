import { Grid } from '@mui/material';
import React from 'react';
import COLORS from '../../../constants/Colors';
import Behance from '../../../images/behance.png';
import Facebook from '../../../images/facebook.png';
import Github from '../../../images/github.png';
import Gmail from '../../../images/gmail.png';
import LinkedIn from '../../../images/linkedin.png';
import MyPhoto from '../../../images/my_pic.png';
import WhatsApp from '../../../images/whatsapp.png';
import Youtube from '../../../images/youtube.png';
import './aboutme.css';

export default function Aboutme(){
    return(
        <Grid container direction={'row'}>
            <Grid item className='left-container'>
                <div className='about-me-heading'>Hi I am SAMIR GOEL</div>
                <div className='about-me-description'>I am a module lead and Full stack developer for Mobile and Web app with a work experience of 8 years <span style={{fontWeight:700, color:COLORS.RESUME_BACKGROUND, textDecorationLine:'underline'}}>more about me</span></div>
                <Grid container justifyContent={'start'} marginTop={1}>
                    <Grid item><a href="https://wa.me/919650923089" target="_blank"><img src={WhatsApp} className="social-button"/></a></Grid>
                    <Grid item><a href="https://www.linkedin.com/in/samir-goel-51a45420/" target="_blank"><img src={LinkedIn} className="social-button"/></a></Grid>
                    <Grid item><img src={Gmail} className="social-button" onClick={(e) => {window.location.href = 'mailto:samirgoel3@gmail.com';e.preventDefault();}}/></Grid>
                    <Grid item><a href="https://www.facebook.com/samir.goel.5" target="_blank"><img src={Facebook} className="social-button"/></a></Grid>
                    <Grid item><a href="https://github.com/samirgoel3" target="_blank"><img src={Github} className="social-button"/></a></Grid>
                    <Grid item><a href="https://www.behance.net/samirgoel" target="_blank"><img src={Behance} className="social-button"/></a></Grid>
                    <Grid item><a href="https://www.youtube.com/watch?v=b9Tmyk3beY4" target="_blank"><img src={Youtube} className="social-button"/></a></Grid>
                </Grid>

                <Grid container marginTop={2}>
                    <div className='download-cv'>Download CV</div>
                    <div className='contact-me'>Contact me</div>
                </Grid>
            </Grid>

            <Grid item > 
            <img src={MyPhoto} className='my-image'></img>
            </Grid>
        </Grid>
    )
}