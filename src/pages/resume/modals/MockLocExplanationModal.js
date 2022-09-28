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



export default function MockLocExplanationModal() {

    return (
        <div style={OVERLAY_STYLE}>

            <Grid container>
                <MockLocProject/>
            </Grid>


        </div>);
}
