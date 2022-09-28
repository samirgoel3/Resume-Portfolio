import { Grid, Typography } from '@mui/material';
import React from 'react';
import { isMobile } from "react-device-detect";
import COLORS from '../../../constants/Colors';
import ICONS from '../../../constants/Icons';
import AtsSdk from '../projects/AtsSdk';
import MockLocProject from '../projects/MockLocPorject';



const OVERLAY_STYLE = {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    top: "50%",
    left: "50%",
    transform: 'translate(-50%, -50%)',
    width: isMobile ? "90%" : "70%",
    height: "94%",
    backgroundColor: "rgba(0,0,0, .8)",
    zIndex: "1000",
    overflowY: "auto",
    backgroundColor: '#fff',
    borderRadius: 5

};



export default function MoreAboutMe() {

    return (
        <div style={OVERLAY_STYLE}>

            <Grid container>

                <Grid item width={'100%'}>
                    <Grid container direction={'row'} style={{ overflow: 'scroll' }}>
                        <Grid item flex={1} style={{ paddingLeft: 25, paddingTop: 25, paddingRight: 20 }}>
                            <Typography style={{ fontSize: isMobile ? 15 : 50, fontWeight: 700, color: COLORS.RESUME_BACKGROUND }}>Hi I am SAMIR GOEL</Typography>
                            <Typography style={{ fontSize: isMobile ? 8 : 20, fontWeight: 700, color: COLORS.RESUME_BACKGROUND, marginTop: 10 }}> <span> <ICONS.BULLET_POINT /> </span>Lead Developer with 8 years of industry experience</Typography>
                            <Typography style={{ fontSize: isMobile ? 8 : 20, fontWeight: 700, color: COLORS.RESUME_BACKGROUND, marginTop: 10 }}> <span> <ICONS.BULLET_POINT /> </span>Technology: Javascript, React , Node , Android -JAVA, Mongo DB</Typography>
                            <Typography style={{ fontSize: isMobile ? 8 : 20, fontWeight: 400, color: COLORS.RESUME_BACKGROUND, marginTop: 10, textAlign: 'justify' }}>I am a self-teaching personality who believes in doing self-study and am a very enthusiast in learning new technologies and languages, having a great passion for building a mobile applications. </Typography>
                        </Grid>
                        <Grid item>
                            <img src={'https://i.ibb.co/2jjbsKT/my-pic.png'} style={{ width: isMobile ? 140 : 250 }} />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item width={'100%'}>
                    <Grid container style={{ paddingLeft: 25, paddingRight: 15, paddingTop: 10 }}>
                        <Grid item>
                            <Typography style={{ fontSize: isMobile ? 8 : 20, fontWeight: 700, color: COLORS.RESUME_BACKGROUND }}> <span> <ICONS.BULLET_POINT /> </span>Career Highlights</Typography>
                            <Typography style={{ fontSize: isMobile ? 8 : 20, fontWeight: 400, color: COLORS.RESUME_BACKGROUND, marginTop: 2, marginBottom: isMobile ? 0 : 15, textAlign: 'justify' }}>I started my career with a start-up firm “Apporio infolabs” as a junior software developer in android and presently working as a module team lead having an experience of 8+ years in Pine Labs ( On a payment product ALL Tap android )</Typography>
                            <a style={{ fontSize: isMobile ? 8 : 20, fontWeight: 400 }} href="https://play.google.com/store/apps/details?id=com.pinelabs.epos&hl=en_IN&gl=US">https://play.google.com/store/apps/details?id=com.pinelabs.epos&hl=en_IN&gl=US</a>
                            <Typography style={{ fontSize: isMobile ? 8 : 20, fontWeight: 400, color: COLORS.RESUME_BACKGROUND, marginTop: isMobile ? 0 : 20, textAlign: 'justify' }}>As I have worked with a startup firm, so I had very good exposure to other things in this company like team management, project management, technical hiring, providing training in known verticals like (Android(Java), JS (React JS Web, React native and node), MongoDB ). I also learned to design using sketch, because sometimes to a lack of sources (designer) we didn’t get exact icons and it was very important for us to deliver the product on time so I learned to create vector design, icons, themes, app prototypes and wireframes, so I never rely on the designer for icons and images.</Typography>
                            <Typography style={{ fontSize: isMobile ? 8 : 20, fontWeight: 400, color: COLORS.RESUME_BACKGROUND, marginTop: isMobile ? 10 : 20, textAlign: 'justify' }}>This also helps me to create good presentation/Documentation to clear concepts to my team and reporting managers. Check out my <a href='https://www.behance.net/samirgoel' >Behance portfolio</a> for more.</Typography>

                        </Grid>
                    </Grid>
                </Grid>

                <Grid item width={'100%'} >
                    <Grid container style={{ paddingLeft: 25, paddingRight: 15, paddingTop: 20 }}>
                        <Grid item>
                            <Typography style={{ fontSize: isMobile ? 8 : 20, fontWeight: 700, color: COLORS.RESUME_BACKGROUND, marginTop: isMobile ? 0 : 50 }}> <span> <ICONS.BULLET_POINT /> </span>Open Source Contributions</Typography>
                            <Typography style={{ fontSize: isMobile ? 8 : 20, fontWeight: 400, color: COLORS.RESUME_BACKGROUND, marginTop: isMobile ? 0 : 10, textAlign: 'justify' }}>I always believe in contributing to the developer community and love creating Open Source Applications with code for developers. These are some of the highlights for my open source contribution</Typography>
                            <MockLocProject />
                            <div style={{ marginTop: 10, marginBottom:10 }}>
                                <AtsSdk />
                            </div>


                        </Grid>
                    </Grid>
                </Grid>


            </Grid>


        </div>);
}
