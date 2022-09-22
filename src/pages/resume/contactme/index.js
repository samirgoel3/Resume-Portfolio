import { Button, Grid, Input, Typography } from '@mui/material';
import React from 'react';
import { isMobile } from "react-device-detect";
import COLORS from '../../../constants/Colors';
export default function ContactMe() {
    return (
        <div style={{ backgroundColor: COLORS.RESUME_BACKGROUND, padding: isMobile ? 10 : 50 }}>

            <Grid container justifyContent={'center'} alignItems={'center'} direction={'column'}>
                <Typography style={{ color: COLORS.RESUME_TEXT_LIGHT, fontWeight: 700, fontSize: isMobile ? 20 : 35, marginTop: 13, marginBottom: 23 }}>GET IN TOUCH</Typography>
                <Grid container direction={'row'}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}  paddingRight={isMobile ? 0:20}>
                        <Typography color={COLORS.RESUME_TEXT_GREEN} fontSize={isMobile ?15 : 25}>Get In Touch</Typography>
                        <Input style={{ backgroundColor:'#263D5F', flex:1, display:'flex', borderRadius:5, marginTop:10, paddingLeft:9, color:'#D0DBFA', height:45}} placeholder={'Your Name'} />
                        <Input style={{ backgroundColor:'#263D5F', flex:1, display:'flex', borderRadius:5, marginTop:10, paddingLeft:9, color:'#D0DBFA', height:45}} placeholder={'Your Email'} />
                        <Input style={{ backgroundColor:'#263D5F', flex:1, display:'flex', borderRadius:5, marginTop:10, paddingLeft:9, color:'#D0DBFA', height:45}} placeholder={'Your Phone/Whats app No.'} />
                        <Input style={{ backgroundColor:'#263D5F', flex:1, display:'flex', borderRadius:5, marginTop:10, padding:9, color:'#D0DBFA', height:305, alignItems:'start', overflow:'scroll'}} placeholder={'Write a message'} multiline />
                        <Button variant='contained' style={{color:COLORS.RESUME_BACKGROUND, backgroundColor:COLORS.RESUME_TEXT_GREEN, borderRadius:50, padding:10, fontWeight:700, paddingLeft:20, paddingRight:20, marginTop:10}}>SEND MESSAGE</Button>
                    </Grid>


                    <Grid item  xs={12} sm={12} md={6} lg={6} xl={6}  >
                        <Typography color={COLORS.RESUME_TEXT_GREEN} fontSize={isMobile ?15 :25} marginTop={isMobile?3:0}>My Contact Details</Typography>

                        <Typography style={{color:'#3C5478', marginTop:15, fontSize:15}} >EMAIL</Typography>
                        <Typography style={{color:COLORS.RESUME_TEXT_LIGHT, fontSize:15}} >samirgoel3@gmail.com</Typography>

                        <Typography style={{color:'#3C5478', marginTop:15, fontSize:15}} >PHONE</Typography>
                        <Typography style={{color:COLORS.RESUME_TEXT_LIGHT, fontSize:15}} >+91 9650923089</Typography>


                        <Typography style={{color:'#3C5478', marginTop:15, fontSize:15}} >ADDRESS</Typography>
                        <Typography style={{color:COLORS.RESUME_TEXT_LIGHT, fontSize:15}} >INDIA, Delhi 110092</Typography>
                        <Typography style={{color:COLORS.RESUME_TEXT_LIGHT, fontSize:15}} >Shakarpur, Laxmi Nagar</Typography>
                        <Typography style={{color:COLORS.RESUME_TEXT_LIGHT, fontSize:15, marginBottom:50}} >WA 26 (A), DELHI</Typography>


                        
                    </Grid>
                </Grid>
            </Grid>
        </div>

    )
}