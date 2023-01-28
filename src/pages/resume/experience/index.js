import React, { Component } from 'react'
import COLORS from '../../../constants/Colors';
import { Grid, Typography } from '@mui/material';
import { isMobile } from "react-device-detect";
import ExperienceImg from '../../../images/work_exp.png';
import ICONS from '../../../constants/Icons';


export default function Experience() {
    return (
        <div style={{ backgroundColor: COLORS.RESUME_BACKGROUND_LIGHT, padding: isMobile ? 10 : 50 }}>

            <Grid container justifyContent={'center'} alignItems={'center'} direction={'column'}>
                <Typography style={{ color: COLORS.RESUME_TEXT_LIGHT, fontWeight: 700, fontSize: isMobile ? 20 : 35, marginTop: 13, marginBottom: 13 }}>MY EXPERIENCE</Typography>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    {getDateView("April 2021 - Aug 2022", "1.5 Years")}
                    {getBottomLine()}
                    {getUpgradCardView()}
                </div>


                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                    {getDateView("April 2021 - Aug 2022", "1.5 Years")}
                    {getBottomLine()}
                    {getPineLabCardView()}
                </div>


                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                    {getDateView("Dec 2014 - April 2021", "6.5 Years")}
                    {getBottomLine()}
                    {getApporioCardView()}
                </div>


                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                    {getDateView("Oct 2014 - Dec 2014", "2 Months")}
                    {getBottomDotOnly()}
                    {getSpinnoCardView()}
                </div>


                {/* <img src={ExperienceImg} style={{ width: isMobile ? '85vw' : '45vw' }} /> */}
            </Grid>


        </div>
    )
}


const getDateView = (date, year) => {
    return (
        <div style={{ flexDirection: 'column' }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: COLORS.RESUME_TEXT_LIGHT }}>{date}</div>
            <div style={{ fontSize: 15, color: COLORS.RESUME_TEXT_GREEN }}>{year}</div>
        </div>
    )
}

const getUpgradCardView = () => {
    return (
        <div style={{ backgroundColor: COLORS.RESUME_BACKGROUND, border: '1px solid white', borderRadius: 5, padding: 10, fontSize: 13, fontWeight: 700, maxWidth: 350 }}>
            <div style={{ color: COLORS.RESUME_TEXT_GREEN, fontSize: 20 }}>Upgrad</div>

            <div style={{ color: 'white', fontSize: 15 }}>Tech Lead (React Native)</div>
            <div style={{ color: 'white', fontSize: 12, fontWeight: 400, marginTop: 15, flexDirection: 'row', display: 'flex', alignItems: 'flex-start' }}>
                <ICONS.BULLET_POINT size={15} color={COLORS.PRIMARY_EXTRA_LIGHT} />
                <div>
                    <div>Worked Large scaled React Native mobile app (Exampur)</div>
                    <a target="_blank" style={{ fontSize: 10, fontWeight: 400, color: 'white' }} href="https://play.google.com/store/apps/details?id=com.edudrive.exampur">https://play.google.com/store/apps/details?id=com.edudrive.exampur</a>
                </div>
            </div>


            <div style={{ color: 'white', fontSize: 12, fontWeight: 400, marginTop: 15, flexDirection: 'row', display: 'flex', alignItems: 'flex-start' }}>
                <ICONS.BULLET_POINT size={15} color={COLORS.PRIMARY_EXTRA_LIGHT} />
                <div>
                    <div>Technologu Used</div>
                    <div>React Native (Javascript), Android JAVA for downloading local services, MVC for code testing </div>
                </div>
            </div>


        </div>
    )
}


const getPineLabCardView = () => {
    return (
        <div style={{ backgroundColor: COLORS.RESUME_BACKGROUND, border: '1px solid white', borderRadius: 5, padding: 10, fontSize: 13, fontWeight: 700, maxWidth: 350 }}>
            <div style={{ color: COLORS.RESUME_TEXT_GREEN, fontSize: 20 }}>Pine labs</div>

            <div style={{ color: 'white', fontSize: 15 }}>Team Lead (Mobile Devlopment)</div>
            <div style={{ color: 'white', fontSize: 12, fontWeight: 400, marginTop: 15, flexDirection: 'row', display: 'flex', alignItems: 'flex-start' }}>
                <ICONS.BULLET_POINT size={15} color={COLORS.PRIMARY_EXTRA_LIGHT} />
                <div>
                    <div>Worked on react portal (Signzy Control Panel) and android app for payments</div>
                    <a target="_blank" style={{ fontSize: 10, fontWeight: 400, color: 'white' }} href="https://play.google.com/store/apps/details?id=com.pinelabs.epos">https://play.google.com/store/apps/details?id=com.pinelabs.epos</a>
                </div>
            </div>


            <div style={{ color: 'white', fontSize: 12, fontWeight: 400, marginTop: 15, flexDirection: 'row', display: 'flex', alignItems: 'flex-start' }}>
                <ICONS.BULLET_POINT size={15} color={COLORS.PRIMARY_EXTRA_LIGHT} />
                <div>
                    <div>Technologu Used</div>
                    <div>React (Javascript), Android JAVA</div>
                </div>
            </div>


        </div>
    )
}




const getApporioCardView = () => {
    return (
        <div style={{ backgroundColor: COLORS.RESUME_BACKGROUND, border: '1px solid white', borderRadius: 5, padding: 10, fontSize: 13, fontWeight: 700, maxWidth: 350 }}>
            <div style={{ color: COLORS.RESUME_TEXT_GREEN, fontSize: 20 }}>Apporio Infolabs</div>

            <div style={{ color: 'white', fontSize: 15 }}>Team Lead (Mobile Devlopment)</div>
            <div style={{ color: 'white', fontSize: 12, fontWeight: 400, marginTop: 15, flexDirection: 'row', display: 'flex', alignItems: 'flex-start' }}>
                <ICONS.BULLET_POINT size={15} color={COLORS.PRIMARY_EXTRA_LIGHT} />
                <div>
                    <div>Worked on Uber Clone, Delivery apps, POS, E-commerce apps</div>
                    <a target="_blank" style={{ fontSize: 10, fontWeight: 400, color: 'white' }} href="https://play.google.com/store/apps/details?id=com.apporio.demotaxiapp">https://play.google.com/store/apps/details?id=com.apporio.demotaxiapp</a>
                    <div style={{ marginTop: 5 }}>
                        <a target="_blank" style={{ fontSize: 10, fontWeight: 400, color: 'white' }} href="https://play.google.com/store/apps/details?id=com.apporio.demotaxiappdriver">https://play.google.com/store/apps/details?id=com.apporio.demotaxiappdriver</a>
                    </div>
                </div>
            </div>


            <div style={{ color: 'white', fontSize: 12, fontWeight: 400, marginTop: 15, flexDirection: 'row', display: 'flex', alignItems: 'flex-start' }}>
                <ICONS.BULLET_POINT size={15} color={COLORS.PRIMARY_EXTRA_LIGHT} />
                <div>
                    <div>Technologu Used</div>
                    <div>React Native(Javascript), Android JAVA, Node, React Web, MOngo Db , Swift</div>
                </div>
            </div>


        </div>
    )
}


const getSpinnoCardView = () => {
    return (
        <div style={{ backgroundColor: COLORS.RESUME_BACKGROUND, border: '1px solid white', borderRadius: 5, padding: 10, fontSize: 13, fontWeight: 700, maxWidth: 350 }}>
            <div style={{ color: COLORS.RESUME_TEXT_GREEN, fontSize: 20 }}>Spinno Solutions</div>

            <div style={{ color: 'white', fontSize: 15 }}>Junior Android Devloper</div>
            <div style={{ color: 'white', fontSize: 12, fontWeight: 400, marginTop: 15, flexDirection: 'row', display: 'flex', alignItems: 'flex-start' }}>
                <ICONS.BULLET_POINT size={15} color={COLORS.PRIMARY_EXTRA_LIGHT} />
                <div>
                    <div>Worked on Utilitu Application like Converter app , Women Helpline</div>
                </div>
            </div>


            <div style={{ color: 'white', fontSize: 12, fontWeight: 400, marginTop: 15, flexDirection: 'row', display: 'flex', alignItems: 'flex-start' }}>
                <ICONS.BULLET_POINT size={15} color={COLORS.PRIMARY_EXTRA_LIGHT} />
                <div>
                    <div>Technologu Used</div>
                    <div>Android JAVA</div>
                </div>
            </div>


        </div>
    )
}


const getBottomLine = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: -240 }}>
            <div style={{ width: 20, height: 20, borderRadius: 30, border: '1px solid white', backgroundColor: COLORS.PRIMARY_EXTRA_LIGHT, marginLeft: 20, marginRight: 20 }} />
            <div style={{ width: 1, height: 250, backgroundColor: COLORS.PRIMARY_EXTRA_LIGHT }} />
        </div>
    )
}


const getBottomDotOnly = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: -45 }}>
            <div style={{ width: 20, height: 20, borderRadius: 30, border: '1px solid white', backgroundColor: COLORS.PRIMARY_EXTRA_LIGHT, marginLeft: 20, marginRight: 20 }} />
        </div>
    )
}