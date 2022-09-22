import React, { Component } from 'react'
import COLORS from '../../../constants/Colors';
import { Grid, Typography } from '@mui/material';
import { isMobile } from "react-device-detect";
import ExperienceImg from '../../../images/work_exp.png';


export default function Experience() {
    return (
        <div style={{ backgroundColor: COLORS.RESUME_BACKGROUND_LIGHT, padding: isMobile ? 10 : 50 }}>

            <Grid container justifyContent={'center'} alignItems={'center'} direction={'column'}>
                <Typography style={{ color: COLORS.RESUME_TEXT_LIGHT, fontWeight: 700, fontSize: isMobile ? 20 : 35, marginTop: 13, marginBottom: 13 }}>MY EXPERIENCE</Typography>
                <img src={ExperienceImg} style={{width: isMobile ? '85vw' : '45vw'}}/>
            </Grid>


        </div>
    )
}