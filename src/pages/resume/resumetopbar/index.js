import { Button, Grid } from '@mui/material';
import React from 'react';
import COLORS from '../../../constants/Colors';
import ResumeLogo from '../../../images/resume_logo.png';
import ICONS from '../../../constants/Icons';
import RightDrawer from '../components/RightDrawer';



export default function ResumeTopBar( {onItemClick = ()=>{}}) {
    return (
        <Grid container direction={'row'} style={{ backgroundColor: COLORS.RESUME_BACKGROUND, padding: 8, position:'fixed', top:0, boxShadow:'0px 1px 10px #000' }} justifyContent={'center'} alignItems={'center'}>
            <Grid item>
                <img src={ResumeLogo} width={35} height={35} color={COLORS.RESUME_TEXT_GREEN} />
            </Grid>

            {/* Full Screen */}
            <Grid item flex={1} display={{ xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none' }}>
                <Grid container justifyContent={'flex-end'}>
                    <Grid item><Button style={{ color: COLORS.RESUME_TEXT_GREEN, marginRight: 15 }} onClick={()=>{onItemClick('ABOUT_ME')}}>About me</Button></Grid>
                    <Grid item><Button style={{ color: COLORS.RESUME_TEXT_GREEN, marginRight: 15 }} onClick={()=>{onItemClick('SKILLS')}}>Skills</Button></Grid>
                    <Grid item><Button style={{ color: COLORS.RESUME_TEXT_GREEN, marginRight: 15 }} onClick={()=>{onItemClick('EXPERIENCE')}} >Experience</Button></Grid>
                    <Grid item><Button style={{ color: COLORS.RESUME_TEXT_GREEN, marginRight: 15 }} onClick={()=>{onItemClick('PROJECTS')}}>Projects</Button></Grid>
                    <Grid item><Button style={{ color: COLORS.RESUME_TEXT_GREEN, marginRight: 15 }} onClick={()=>{onItemClick('CONTACTS')}}>Contact</Button></Grid>
                </Grid>
            </Grid>

            {/* Mobile screen */}
            <Grid item flex={1} display={{ xl: 'none', lg: 'none', md: 'none', sm: 'block', xs: 'block' }}>
                <Grid container justifyContent={'flex-end'}>
                    <RightDrawer onItemClick={onItemClick}/>
                </Grid>
            </Grid>

        </Grid>
    )
}