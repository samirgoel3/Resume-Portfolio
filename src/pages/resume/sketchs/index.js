import React, { Component } from 'react'
import { Grid, Typography } from '@mui/material';
import COLORS from '../../../constants/Colors';
import { isMobile } from "react-device-detect";

const designData = [
    {
        "link":"https://www.behance.net/gallery/92351753/Fielder-App",
        image:"https://mir-s3-cdn-cf.behance.net/projects/max_808/3047c492351753.Y3JvcCwxNDAwLDEwOTUsMCww.jpg"
    },
    {
        "link":"https://www.behance.net/gallery/91255485/Mock-Loc-Stationary-Pointer-Module",
        image:"https://mir-s3-cdn-cf.behance.net/projects/max_808/4fcf6f91255485.Y3JvcCwzNjcwLDI4NzAsMCww.jpg"
    },
    {
        "link":"https://www.behance.net/gallery/91199825/Mock-loc-Admin",
        image:"https://mir-s3-cdn-cf.behance.net/projects/max_808/4dd05c91199825.Y3JvcCwzNjcwLDI4NzAsMCww.jpg"
    },
    {
        "link":"https://www.behance.net/gallery/92352717/Field-App-Mobile",
        image:"https://mir-s3-cdn-cf.behance.net/projects/max_808/a4e12b92352717.Y3JvcCwxNDAwLDEwOTUsMCww.jpg"
    },
    {
        "link":"https://www.behance.net/gallery/92594117/Visitor-management-System-Watchman",
        image:"https://mir-s3-cdn-cf.behance.net/projects/max_808/e56f6b92594117.Y3JvcCwxNDAwLDEwOTUsMCwyODA.jpg"
    },
    {
        "link":"https://www.behance.net/gallery/91277093/Saat-Siidhi",
        image:"https://mir-s3-cdn-cf.behance.net/projects/max_808/2a647591277093.Y3JvcCwzNjcwLDI4NzAsMCww.jpg"
    },
    {
        "link":"https://www.behance.net/gallery/92591753/visitor-Management-System-USER",
        image:"https://mir-s3-cdn-cf.behance.net/projects/max_808/8c30d692591753.Y3JvcCwxNDAwLDEwOTUsMCww.jpg"
    }, 
]


export default function SketchAndDesigns() {
    return (

        <div style={{ backgroundColor: COLORS.RESUME_BACKGROUND_LIGHT, padding: isMobile ? 10 : 50 }}>

        <Grid container justifyContent={'center'} alignItems={'center'} direction={'column'}>
            <Typography style={{ color: COLORS.RESUME_TEXT_LIGHT, fontWeight: 700, fontSize: isMobile ? 20 : 35, marginTop: 13, marginBottom: 23 }}>MY BRAINSTROMING & DESIGNS</Typography>

            <Grid container direction={'row'} justifyContent={'space-evenly'} alignItems={'center'}>
                {
                    designData.map((e, i)=><a href={e.link} target="_blank"><img src={e.image} style={{width:isMobile?150:300, height:isMobile?120:250, borderRadius:5, margin:15}}/></a>)
                }
               
            </Grid>

        </Grid>
    </div>
    )
}