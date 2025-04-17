import { Grid, Typography, Paper, Button } from '@mui/material';
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
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import MoreAboutMe from '../modals/MoreAboutMe';
import { isMobile } from 'react-device-detect';
import Pdf from '../../../files/m.pdf';

const MODAL_STYLES = {
    position: "absolute",
    backgroundColor: "#FFF",
    padding: "15px",
    top: '50%',
    left: '50%',
    
  };
  



export default function Aboutme({onContactMeClick = ()=>{}}) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Grid container direction={'row'}>
            <Grid item className='left-container'>
                <div className='about-me-heading'>hi There, I am SAMIR GOEL</div>
                <div className='about-me-description' style={{fontSize:isMobile?6:20}}>I am a module lead and Full stack developer for Mobile and Web app with a work experience of 8 years <span style={{ fontWeight: 700, fontSize:isMobile?8:20, color: COLORS.RESUME_BACKGROUND, textDecorationLine: 'underline' }} onClick={handleOpen}>more about me</span></div>
                <Grid container justifyContent={'start'} marginTop={3}>
                    <Grid item><a href="https://wa.me/919650923089" target="_blank"><img src={WhatsApp} className="social-button" /></a></Grid>
                    <Grid item><a href="https://www.linkedin.com/in/samir-goel-51a45420/" target="_blank"><img src={LinkedIn} className="social-button" /></a></Grid>
                    <Grid item><img src={Gmail} className="social-button" onClick={(e) => { window.location.href = 'mailto:samirgoel3@gmail.com'; e.preventDefault(); }} /></Grid>
                    <Grid item><a href="https://www.facebook.com/samir.goel.5" target="_blank"><img src={Facebook} className="social-button" /></a></Grid>
                    <Grid item><a href="https://github.com/samirgoel3" target="_blank"><img src={Github} className="social-button" /></a></Grid>
                    <Grid item><a href="https://www.behance.net/samirgoel" target="_blank"><img src={Behance} className="social-button" /></a></Grid>
                    <Grid item><a href="https://www.youtube.com/watch?v=b9Tmyk3beY4" target="_blank"><img src={Youtube} className="social-button" /></a></Grid>
                </Grid>

                <Grid container marginTop={2}>
                    <a href = {Pdf} target = "_blank" className='download-cv' >Download CV</a>
                    <div className='contact-me' onClick={onContactMeClick}>Contact me</div>
                </Grid>
            </Grid>

            <Grid item >
                <img src={'https://i.ibb.co/2jjbsKT/my-pic.png'} style={{marginTop:isMobile ? 14:0, marginBottom:isMobile ? -4:0}} className='my-image'></img>
            </Grid>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={MODAL_STYLES}>
                  <MoreAboutMe/>
                </Box>
            </Modal>

        </Grid>
    )
}