import React, { Component } from 'react'
import { Grid, Typography } from '@mui/material';
import COLORS from '../../../constants/Colors';
import { isMobile } from "react-device-detect";
import MockLocMobileImages from '../../../images/mockloc-mobile.png';
import YoutubeEmbed from '../components/YoutubeEmbed';



export default function MockLocProject() {
    return (
        <Grid container direction={'column'} style={{backgroundColor:COLORS.RESUME_TEXT_LIGHT, padding:isMobile?5:10, borderRadius:10}}>

            <Grid item flex={1}>
                <Grid container direction={'row'} style={{ paddingTop: 10 }}>
                    <Grid item>
                        <img src={'https://play-lh.googleusercontent.com/Z10mPsM5L9cpERxjGl8QnhpguOT1pAX3fWd-vlveWd8kGwmaQkR9wXFkIDMDbjccSw=s48-rw'} style={{ width: 25, height: 25 }}></img>
                    </Grid>
                    <Grid item flex={1}>
                        <Typography style={{ fontSize: isMobile ? 13 : 20, marginRight: 45, fontWeight: 700, color: COLORS.RESUME_BACKGROUND, marginLeft: 5 }}>Mock Loc</Typography>
                    </Grid>
                    <Grid item>
                       <a href='https://play.google.com/store/apps/details?id=com.mocker.mockloc&hl=en_IN&gl=US'> <img style={{ width: isMobile ? 70 : 120 }} src={'https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0'} /></a>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Typography style={{ fontSize: isMobile ? 8 : 16, fontWeight: 400, color: COLORS.RESUME_BACKGROUND, marginTop: 2, textAlign: 'justify' }}>It's a very good example of reverse engineering with an AppStore rating of 4.4 stars (solely developed), using this users can mock their current location in various manners. I have created lots of designs on sketch for my development and also create created Restfull API using Node with Mongo DB. This Application was mainly focused on those companies/developers who are working on location-based applications like taxis, delivery, food app etc. Using this app we can easily mock an itinerary/route without actually moving our device. it Provides many tools to create the testing scenario</Typography>
                <Typography style={{ fontSize: isMobile ? 10 : 14, marginRight: 45, fontWeight: 700, color: COLORS.RESUME_BACKGROUND }}>Check out the application on Play Store </Typography>
                <a href='https://play.google.com/store/apps/details?id=com.mocker.mockloc&hl=en_IN&gl=US' style={{ fontSize: isMobile ? 8 : 20 }}>https://play.google.com/store/apps/details?id=com.mocker.mockloc&hl=en_IN&gl=US</a>
               
               
               {/* // App design  */}
                <Typography style={{ fontSize: isMobile ? 10 : 14, marginRight: 45, fontWeight: 700, color: COLORS.RESUME_BACKGROUND, marginTop: 15 }}>App Designs Highlights</Typography>
                <img src={MockLocMobileImages} style={{ height: isMobile ? 110 : '24vw' }} />
                <Typography style={{ fontSize: isMobile ? 10 : 14, marginRight: 45, fontWeight: 700, color: COLORS.RESUME_BACKGROUND, marginTop: 15 }}>To Check all designs please click following images</Typography>
                <Grid container >
                    <Grid item>
                        <a herf='https://www.behance.net/gallery/91199825/Mock-loc-Admin'><img src={'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/4dd05c91199825.Y3JvcCwzNjcwLDI4NzAsMCww.jpg'} style={{ width: isMobile ? 130 : 300, borderRadius: 5 }} /></a>
                    </Grid>
                    <Grid item>
                        <a herf='https://www.behance.net/gallery/91255485/Mock-Loc-Stationary-Pointer-Module'><img src={'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/4fcf6f91255485.Y3JvcCwzNjcwLDI4NzAsMCww.jpg'} style={{ width: isMobile ? 130 : 300, borderRadius: 5,marginLeft:10 }} /></a>
                    </Grid>
                </Grid>



               {/* Videos And Tutorials */}

               <Typography style={{ fontSize: isMobile ? 10 : 14, marginRight: 45, fontWeight: 700, color: COLORS.RESUME_BACKGROUND, marginTop: 15 }}>Videos and Tutorials</Typography>
                
                    <Grid item>
                        <Grid container>
                            <Grid item><YoutubeEmbed embedId='xQjg2GUqI9U' /></Grid>
                            <Grid item marginLeft={5}><YoutubeEmbed embedId='b9Tmyk3beY4'/></Grid>
                        </Grid>
                        
                        
                </Grid>

            </Grid>

        </Grid>
    )
}

