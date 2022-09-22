import React, { Component } from 'react'
import COLORS from '../../../constants/Colors';
import { Grid, Typography } from '@mui/material';
import { isMobile } from "react-device-detect";
import { Paper, Button } from '@mui/material'
import Carousel from 'react-material-ui-carousel'


function Item(props) {
    return (
        <div style={{ width: isMobile ? 150 : 300, height: isMobile ? 100 : 250, backgroundColor: '#bbb', borderTopLeftRadius: 9, borderTopRightRadius: 9 }} />
    )
}

var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]


const getCarousal = () => {
    return <div style={{ width: isMobile ? 150 : 300, height: isMobile ? 130 : 300, backgroundColor: COLORS.RESUME_BACKGROUND_LIGHT, borderRadius: 9, margin: isMobile ? 5 : 10 }}>
        <Carousel indicatorContainerProps={{
            style: { width: 0, height: 0 }
        }}>
            {items.map((item, i) => <Item key={i} item={item} />)}
        </Carousel>
        <Typography width={isMobile ? 150 : 300} textAlign={'center'} color={'white'} fontWeight={700} fontSize={isMobile ? 10 : 15}> Sample Chat App</Typography>
    </div>
}

export default function Projects() {
    return (
        <div style={{ backgroundColor: COLORS.RESUME_BACKGROUND, padding: isMobile ? 10 : 50 }}>

            <Grid container justifyContent={'center'} alignItems={'center'} direction={'column'}>
                <Typography style={{ color: COLORS.RESUME_TEXT_LIGHT, fontWeight: 700, fontSize: isMobile ? 20 : 35, marginTop: 13, marginBottom: 23 }}>MY TECH. PROJECTS</Typography>

                <Grid container direction={'row'} justifyContent={'space-evenly'} alignItems={'center'}>
                    {getCarousal()}
                    {getCarousal()}
                    {getCarousal()}
                    {getCarousal()}
                    {getCarousal()}
                    {getCarousal()}
                    {getCarousal()}
                    {getCarousal()}

                </Grid>

            </Grid>
        </div>
    )
}