import React, { Component } from 'react'
import { Grid, Typography } from '@mui/material';
import COLORS from '../../../constants/Colors';
import { isMobile } from 'react-device-detect';
import ICONS from '../../../constants/Icons';

export default function AtsSdk() {
    return (
        <Grid container direction={'column'} justifyContent={'center'} alignItems={'flex-start'} style={{ backgroundColor: COLORS.RESUME_TEXT_LIGHT, padding: isMobile ? 15 : 10, borderRadius: 10 }}>

            <Grid item flex={1}>
                <Grid container direction={'row'} style={{ paddingTop: 10 }}>
                    <Grid item>
                        <ICONS.GITHUB size={25} />
                    </Grid>
                    <Grid item flex={1}>
                        <Typography style={{ fontSize: isMobile ? 13 : 20, marginRight: 45, fontWeight: 700, color: COLORS.RESUME_BACKGROUND, marginLeft: 5 }}>ATS-SDK (Tracking System SDK For Android app)</Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Typography style={{ fontSize: isMobile ? 8 : 16, fontWeight: 400, color: COLORS.RESUME_BACKGROUND, marginTop: 2, textAlign: 'justify' }}>It is a Android SDK (library module) that any android developer can implement by simply adding android implementation command in his project. </Typography>
                <a href='https://github.com/samirapporio/Apporio-Tracking-System'><img src='https://i.ibb.co/rMsyBSk/implementation.png' style={{width:isMobile ? 300:800, marginTop:10}}/></a>
                <Typography style={{ fontSize: isMobile ? 13 : 20, marginRight: 45, fontWeight: 700, color: COLORS.RESUME_BACKGROUND, marginTop:10 }}>Project Components</Typography>
                <Typography style={{ fontSize: isMobile ? 8 : 16, fontWeight: 400, color: COLORS.RESUME_BACKGROUND, marginTop: 2, textAlign: 'justify' }}>The whole SDK is divided into three Different Component</Typography>
                <a href='</a>'><img src='https://i.ibb.co/8zYTvZF/atscomponent.png' style={{width:isMobile ? 300:800, marginTop: isMobile?5:20}}/></a>

                <Typography style={{ fontSize: isMobile ? 13 : 20, marginRight: 45, fontWeight: 700, color: COLORS.RESUME_BACKGROUND, marginTop:10 }}>Documentation</Typography>
                <Typography style={{ fontSize: isMobile ? 8 : 16, fontWeight: 400, color: COLORS.RESUME_BACKGROUND, marginTop: 2, textAlign: 'justify' }}>I have Also provided the documentation for developers to implement</Typography>
                <a href='https://github.com/samirapporio/Apporio-Tracking-System#readme' style={{fontSize:isMobile?8:16}}>https://github.com/samirapporio/Apporio-Tracking-System#readme</a>
 
            </Grid>
        </Grid>
    )
}