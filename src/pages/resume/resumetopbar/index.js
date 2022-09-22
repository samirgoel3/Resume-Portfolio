import { Button, Grid } from '@mui/material';
import React from 'react';
import COLORS from '../../../constants/Colors';
import ResumeLogo from '../../../images/resume_logo.png';
import ICONS from '../../../constants/Icons';


export default function ResumeTopBar() {
    return (
        <Grid container direction={'row'} style={{ backgroundColor: COLORS.RESUME_BACKGROUND, padding: 8, position:'fixed', top:0, boxShadow:'0px 1px 10px #000' }} justifyContent={'center'} alignItems={'center'}>
            <Grid item>
                <img src={ResumeLogo} width={35} height={35} color={COLORS.RESUME_TEXT_GREEN} />
            </Grid>

            {/* Full Screen */}
            <Grid item flex={1} display={{ xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none' }}>
                <Grid container justifyContent={'flex-end'}>
                    <Grid item><Button style={{ color: COLORS.RESUME_TEXT_GREEN, marginRight: 15 }}>About me</Button></Grid>
                    <Grid item><Button style={{ color: COLORS.RESUME_TEXT_GREEN, marginRight: 15 }}>Skills</Button></Grid>
                    <Grid item><Button style={{ color: COLORS.RESUME_TEXT_GREEN, marginRight: 15 }}>Experience</Button></Grid>
                    <Grid item><Button style={{ color: COLORS.RESUME_TEXT_GREEN, marginRight: 15 }}>Projects</Button></Grid>
                    <Grid item><Button style={{ color: COLORS.RESUME_TEXT_GREEN, marginRight: 15 }}>Contact</Button></Grid>
                </Grid>
            </Grid>

            {/* Mobile screen */}
            <Grid item flex={1} display={{ xl: 'none', lg: 'none', md: 'none', sm: 'block', xs: 'block' }}>
                <Grid container justifyContent={'flex-end'}>
                    <Grid item><ICONS.MENU_ONE color={COLORS.RESUME_TEXT_GREEN} size={35} /></Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}