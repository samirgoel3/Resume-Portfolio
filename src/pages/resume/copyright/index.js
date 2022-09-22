import { Grid, Typography } from '@mui/material';
import React from 'react';
import { isMobile } from "react-device-detect";
import COLORS from '../../../constants/Colors';
import Facebook from '../../../images/facebook.png';
import Github from '../../../images/github.png';
import Gmail from '../../../images/gmail.png';
import LinkedIn from '../../../images/linkedin.png';
import WhatsApp from '../../../images/whatsapp.png';



export default function CopyRight() {
    return (
        <div style={{ backgroundColor: COLORS.RESUME_BACKGROUND_LIGHT, paddingLeft: isMobile ? 10 : 50, paddingTop: 15, paddingBottom: 15, paddingRight: 15 }}>
            <Grid container justifyContent={'center'} alignItems={'center'} direction={'row'}>
                <Grid item flex={1}>
                    <Typography fontSize={isMobile ? 10 : 20} color={COLORS.RESUME_TEXT_LIGHT} >Copyright © 2022 Samir Goel - All Rights Reserved.</Typography>
                </Grid>
                <Grid Grid>
                    <Grid container direction={'column'}>
                        <Typography color={COLORS.RESUME_TEXT_LIGHT} fontWeight={700} fontSize={isMobile ? 10 : 18}>Follow Me</Typography>
                        <Grid container direction={'row'}>
                            <a href="https://wa.me/919650923089" target="_blank"><img src={WhatsApp} style={{ width: isMobile ? 11 : 20, height: isMobile ? 11 : 20, marginRight: 5 }} /></a>
                            <a href="https://www.linkedin.com/in/samir-goel-51a45420/" target="_blank"> <img src={LinkedIn} style={{ width: isMobile ? 11 : 20, height: isMobile ? 11 : 20, marginRight: 5 }} /></a>
                             <a ><img src={Gmail} style={{ width: isMobile ? 11 : 20, height: isMobile ? 11 : 20, marginRight: 5 }}onClick={(e) => {window.location.href = 'mailto:samirgoel3@gmail.com';e.preventDefault();}} /></a>
                            <a href="https://www.facebook.com/samir.goel.5" target="_blank">   <img src={Facebook} style={{ width: isMobile ? 11 : 20, height: isMobile ? 11 : 20, marginRight: 5 }} /></a>
                            <a href="https://github.com/samirgoel3" target="_blank"><img src={Github} style={{ width: isMobile ? 11 : 20, height: isMobile ? 11 : 20, marginRight: 5 }} /></a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

