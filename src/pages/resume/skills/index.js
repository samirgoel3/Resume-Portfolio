import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import COLORS from '../../../constants/Colors';
import { Grid } from '@mui/material';
import ICONS from '../../../constants/Icons';
import { isMobile } from "react-device-detect";


const getAndroidExpertise = () => {
    return <Grid container style={{ paddingLeft: 50, paddingRight: 10 }} direction={'column'}>

        <Grid item>
            <Grid container direction={'row'} >
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS.RESUME_TEXT_LIGHT, marginRight: 5, marginTop: 5 }} />
                <Typography flex={1} color={'white'} style={{ fontSize: isMobile ? 12 : 16 }}>Created Library pattern and holder pattern and distributed development environment in company</Typography>
            </Grid>
        </Grid>

        <Grid item marginTop={1}>
            <Grid container direction={'row'} >
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS.RESUME_TEXT_LIGHT, marginRight: 5, marginTop: 5 }} />
                <Typography flex={1} color={'white'} style={{ fontSize: isMobile ? 12 : 16 }}><span style={{ fontWeight: 700 }}>Expertise area:</span> Location, Google Map(+APIS), FIREBASE, One- Signal, Social integration, Tracking and related services, Socket.io</Typography>
            </Grid>
        </Grid>

        <Grid item marginTop={1}>
            <Grid container direction={'row'} >
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS.RESUME_TEXT_LIGHT, marginRight: 5, marginTop: 5 }} />
                <Typography flex={1} color={'white'} style={{ fontSize: isMobile ? 12 : 16 }}><span style={{ fontWeight: 700 }}>Architecture:</span> MVP, MVVM, MVC</Typography>
            </Grid>
        </Grid>

        <Grid item marginTop={1}>
            <Grid container direction={'row'} >
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS.RESUME_TEXT_LIGHT, marginRight: 5, marginTop: 5 }} />
                <Typography flex={1} color={'white'} style={{ fontSize: isMobile ? 12 : 16 }}><span style={{ fontWeight: 700 }}>Libraries expertise:</span> Dagger 2 , Retrofit , butterknife, Rx-android, Event bus, Data binding, Fast android networking , Placeholder patterns, Socket.io and view libraries, Sugar ORM, Realm, JUnit, Espresso and many more like picasso, glide and view realted lib and animations related libs</Typography>
            </Grid>
        </Grid>
    </Grid>
}

const getReactExpertise = () => {
    return <Grid container style={{ paddingLeft: 50, paddingRight: 10 }} direction={'column'}>

        <Grid item>
            <Grid container direction={'row'} >
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS.RESUME_TEXT_LIGHT, marginRight: 5, marginTop: 5 }} />
                <Typography flex={1} color={'white'} style={{ fontSize: isMobile ? 12 : 16 }}>Started learning JS in 2017 for building mobile application that motivates me to build my own designed admin panel.</Typography>
            </Grid>
        </Grid>

        <Grid item marginTop={1}>
            <Grid container direction={'row'} >
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS.RESUME_TEXT_LIGHT, marginRight: 5, marginTop: 5 }} />
                <Typography flex={1} color={'white'} style={{ fontSize: isMobile ? 12 : 16 }}><span style={{ fontWeight: 700 }}>Expertise area:</span> Admin Panel (Based on API ), Android native bridging concept, Redux, Context API, Hooks, One signal , Socket.io, Ecommerce app, Chat App, Indexed DB, Event BUS, Material UI, service providing application like Food delivery, Appointment booking, Security app etc.</Typography>
            </Grid>
        </Grid>

        <Grid item marginTop={1}>
            <Grid container direction={'row'} >
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS.RESUME_TEXT_LIGHT, marginRight: 5, marginTop: 5 }} />
                <Typography flex={1} color={'white'} style={{ fontSize: isMobile ? 12 : 16 }}><span style={{ fontWeight: 700 }}>Architecture:</span> REDUX, MVC</Typography>
            </Grid>
        </Grid>

        <Grid item marginTop={1}>
            <Grid container direction={'row'} >
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS.RESUME_TEXT_LIGHT, marginRight: 5, marginTop: 5 }} />
                <Typography flex={1} color={'white'} style={{ fontSize: isMobile ? 12 : 16 }}><span style={{ fontWeight: 700 }}>Libraries expertise:</span> Material UI (website), Axios, Redux, Eventing Bus, Bridging for service, HOC, RN Navigation etc.</Typography>
            </Grid>
        </Grid>
    </Grid>
}

const getNodeExpertise = () => {
    return <Grid container style={{ paddingLeft: 50, paddingRight: 10 }} direction={'column'}>

        <Grid item>
            <Grid container direction={'row'} >
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS.RESUME_TEXT_LIGHT, marginRight: 5, marginTop: 5 }} />
                <Typography flex={1} color={'white'} style={{ fontSize: isMobile ? 12 : 16 }}>Created many project over node importantly used for socket.io that leads to resolve many in ready made taxi based products</Typography>
            </Grid>
        </Grid>

        <Grid item marginTop={1}>
            <Grid container direction={'row'} >
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS.RESUME_TEXT_LIGHT, marginRight: 5, marginTop: 5 }} />
                <Typography flex={1} color={'white'} style={{ fontSize: isMobile ? 12 : 16 }}>SDK for Android apps that dev can easily implement with NODE server in any project to save dev time</Typography>
            </Grid>
        </Grid>

        <Grid item marginTop={1}>
            <Grid container direction={'row'} >
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS.RESUME_TEXT_LIGHT, marginRight: 5, marginTop: 5 }} />
                <Typography flex={1} color={'white'} style={{ fontSize: isMobile ? 12 : 16 }}><span style={{ fontWeight: 700 }}>Expertise area:</span> Creation of API for both admin(react JS) and app.</Typography>
            </Grid>
        </Grid>

        <Grid item marginTop={1}>
            <Grid container direction={'row'} >
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS.RESUME_TEXT_LIGHT, marginRight: 5, marginTop: 5 }} />
                <Typography flex={1} color={'white'} style={{ fontSize: isMobile ? 12 : 16 }}><span style={{ fontWeight: 700 }}>Architecture:</span> MVC (inspired by php laravel ), able to collect logs in it.</Typography>
            </Grid>
        </Grid>

        <Grid item marginTop={1}>
            <Grid container direction={'row'} >
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS.RESUME_TEXT_LIGHT, marginRight: 5, marginTop: 5 }} />
                <Typography flex={1} color={'white'} style={{ fontSize: isMobile ? 12 : 16 }}><span style={{ fontWeight: 700 }}>Libraries expertise:</span> Express framework(with validators), Mongoose(Mongo db), jsonwebtoken, bcrypt, lodash, geolib(for geospatial queries), date-and-time, pagination, redis, chalk(for logs), Socket.io and much more</Typography>
            </Grid>
        </Grid>
    </Grid>
}

const getMongoExpertise = () => {
    return <Grid container style={{ paddingLeft: 50, paddingRight: 10 }} direction={'column'}>

        <Grid item>
            <Grid container direction={'row'} >
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS.RESUME_TEXT_LIGHT, marginRight: 5, marginTop: 5 }} />
                <Typography flex={1} color={'white'} style={{ fontSize: isMobile ? 12 : 16 }}>Created Own server for MongoDB but mostly use Atlas for Database</Typography>
            </Grid>
        </Grid>


        <Grid item marginTop={1}>
            <Grid container direction={'row'} >
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS.RESUME_TEXT_LIGHT, marginRight: 5, marginTop: 5 }} />
                <Typography flex={1} color={'white'} style={{ fontSize: isMobile ? 12 : 16 }}>Mongoose for createing Schema, Virtuals for cleaner code,<span style={{ color:COLORS.RESUME_TEXT_GREEN}}> Populate technique</span> for accessing data in one querry from multiple collections</Typography>
            </Grid>
        </Grid>

        <Grid item marginTop={1}>
            <Grid container direction={'row'} >
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS.RESUME_TEXT_LIGHT, marginRight: 5, marginTop: 5 }} />
                <Typography flex={1} color={'white'} style={{ fontSize: isMobile ? 12 : 16 }}>Good handson Experience over <span style={{color:COLORS.RESUME_TEXT_GREEN}}>Aggregation technique</span> for achieving complex querries</Typography>
            </Grid>
        </Grid>

    </Grid>
}


const getSketchExpertise = () => {
    return <Grid container style={{ paddingLeft: 50, paddingRight: 10 }} direction={'column'}>

        <Grid item>
            <Grid container direction={'row'} >
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS.RESUME_TEXT_LIGHT, marginRight: 5, marginTop: 5 }} />
                <Typography flex={1} color={'white'} style={{ fontSize: isMobile ? 12 : 16 }}>As a developer i never rely on the designer for icon and colors definition, so i have learned to create icon as per project's need</Typography>
            </Grid>
        </Grid>


        <Grid item marginTop={1}>
            <Grid container direction={'row'} >
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS.RESUME_TEXT_LIGHT, marginRight: 5, marginTop: 5 }} />
                <Typography flex={1} color={'white'} style={{ fontSize: isMobile ? 12 : 16 }}>Good in cerating app design <sapn style={{color:COLORS.RESUME_TEXT_GREEN}}>( wireframing and prototype )</sapn> that helps a lots in explaing things to teams member or client, please checkout my behance portfolio for designs. <a href="https://www.behance.net/samirgoel" style={{color:COLORS.RESUME_TEXT_GREEN}} target="_blank" rel="noopener noreferrer">Click To view My Designs Portfolio</a> </Typography>
            </Grid>
        </Grid>

       

    </Grid>
}


export default function Skills() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div style={{ backgroundColor: COLORS.RESUME_BACKGROUND, padding: isMobile ? 10 : 50 }}>

            <Grid container justifyContent={'center'} alignItems={'center'}>
                <Typography style={{ color: COLORS.RESUME_TEXT_LIGHT, fontWeight: 700, fontSize: isMobile? 20:35, marginTop: 13, marginBottom: 13 }}>MY SKILLS & EXPERTISE</Typography>
            </Grid>

            {/* Android Expertise */}
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={0} disableGutters>
                <AccordionSummary
                    expandIcon={<Grid container> <ICONS.DOWN color={expanded === 'panel1' ? COLORS.RESUME_TEXT_GREEN : COLORS.RESUME_TEXT_LIGHT} /></Grid>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    style={{ backgroundColor: COLORS.RESUME_BACKGROUND }}
                >
                    <Grid container justifyContent={'start'} alignItems={'flex-start'} >
                        <Grid item> <ICONS.ANDROID size={isMobile ? 35 : 45} color={COLORS.RESUME_TEXT_GREEN} /> </Grid>
                        <Grid item flex={1}>
                            <Grid container direction={'column'} marginLeft={1}>
                                <Grid item><Typography sx={{ fontWeight: 700, flexShrink: 0, fontSize: expanded === 'panel1' ? isMobile ? 18 : 25 : isMobile ? 11 : 16, color: expanded === 'panel1' ? COLORS.RESUME_TEXT_GREEN : COLORS.RESUME_TEXT_LIGHT }}>ANDROID (Exp. 8 Years)</Typography></Grid>
                                {expanded === 'panel1' ? null : <Grid item><Typography sx={{ flexShrink: 0, fontSize: isMobile ? 11 : 16, color: COLORS.RESUME_TEXT_LIGHT }}><span style={{ fontWeight: 700 }}>Expertise</span> one signal, MVC, MVVM, Rx android. . .</Typography></Grid>}
                            </Grid>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: COLORS.RESUME_BACKGROUND, padding: 0 }}>
                    {getAndroidExpertise()}
                </AccordionDetails>
            </Accordion>




            {/* React Expertise */}
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={0} disableGutters>
                <AccordionSummary
                    expandIcon={<Grid container><ICONS.DOWN color={expanded === 'panel2' ? COLORS.RESUME_TEXT_GREEN : COLORS.RESUME_TEXT_LIGHT} /></Grid>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    style={{ backgroundColor: COLORS.RESUME_BACKGROUND }}
                >
                    <Grid container justifyContent={'start'} alignItems={'flex-start'} >
                        <Grid item> <ICONS.REACT size={isMobile ? 35 : 45} color={COLORS.RESUME_TEXT_GREEN} /> </Grid>
                        <Grid item flex={1}>
                            <Grid container direction={'column'} marginLeft={1}>
                                <Grid item><Typography sx={{ fontWeight: 700, flexShrink: 0, fontSize: expanded === 'panel2' ? isMobile ? 18 : 25 : isMobile ? 11 : 16, color: expanded === 'panel2' ? COLORS.RESUME_TEXT_GREEN : COLORS.RESUME_TEXT_LIGHT }}>React Native & Website (Exp. 5 Years)</Typography></Grid>
                                {expanded === 'panel2' ? null : <Grid item><Typography sx={{ flexShrink: 0, fontSize: isMobile ? 11 : 16, color: COLORS.RESUME_TEXT_LIGHT, overflow: 'hidden', textOverflow: 'ellipsis' }}><span style={{ fontWeight: 700 }}>Expertise</span>Redux, Axios, Context APi, Bridge, Material UI. . .</Typography></Grid>}
                            </Grid>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: COLORS.RESUME_BACKGROUND, padding: 0 }}>
                    {getReactExpertise()}
                </AccordionDetails>
            </Accordion>



            {/* NODE.JS Expertise */}
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={0} disableGutters>
                <AccordionSummary
                    expandIcon={<Grid container><ICONS.DOWN color={expanded === 'panel3' ? COLORS.RESUME_TEXT_GREEN : COLORS.RESUME_TEXT_LIGHT} /></Grid>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    style={{ backgroundColor: COLORS.RESUME_BACKGROUND }}
                >
                    <Grid container justifyContent={'start'} alignItems={'flex-start'} >
                        <Grid item> <ICONS.NODE size={isMobile ? 35 : 45} color={COLORS.RESUME_TEXT_GREEN} /> </Grid>
                        <Grid item flex={1}>
                            <Grid container direction={'column'} marginLeft={1}>
                                <Grid item><Typography sx={{ fontWeight: 700, flexShrink: 0, fontSize: expanded === 'panel3' ? isMobile ? 18 : 25 : isMobile ? 11 : 16, color: expanded === 'panel3' ? COLORS.RESUME_TEXT_GREEN : COLORS.RESUME_TEXT_LIGHT }}>Node JS ( Exp. 3+ Years)</Typography></Grid>
                                {expanded === 'panel3' ? null : <Grid item><Typography sx={{ flexShrink: 0, fontSize: isMobile ? 11 : 16, color: COLORS.RESUME_TEXT_LIGHT, overflow: 'hidden', textOverflow: 'ellipsis' }}><span style={{ fontWeight: 700 }}>Expertise</span> Restfull API, Socket.io realtime Express, Express Validation, MVC, Content server for file uploads</Typography></Grid>}
                            </Grid>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: COLORS.RESUME_BACKGROUND, padding: 0 }}>
                    {getNodeExpertise()}
                </AccordionDetails>
            </Accordion>


            {/* Mongo DB Expertise */}
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} elevation={0} disableGutters>
                <AccordionSummary
                    expandIcon={<Grid container><ICONS.DOWN color={expanded === 'panel4' ? COLORS.RESUME_TEXT_GREEN : COLORS.RESUME_TEXT_LIGHT} /></Grid>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    style={{ backgroundColor: COLORS.RESUME_BACKGROUND }}
                >
                    <Grid container justifyContent={'start'} alignItems={'flex-start'} >
                        <Grid item> <ICONS.MONGO_DB size={isMobile ? 35 : 45} color={COLORS.RESUME_TEXT_GREEN} /> </Grid>
                        <Grid item flex={1}>
                            <Grid container direction={'column'} marginLeft={1}>
                                <Grid item><Typography sx={{ fontWeight: 700, flexShrink: 0, fontSize: expanded === 'panel4' ? isMobile ? 18 : 25 : isMobile ? 11 : 16, color: expanded === 'panel4' ? COLORS.RESUME_TEXT_GREEN : COLORS.RESUME_TEXT_LIGHT }}>Mongo DB ( Exp. 3+ Years)</Typography></Grid>
                                {expanded === 'panel4' ? null : <Grid item><Typography sx={{ flexShrink: 0, fontSize: isMobile ? 11 : 16, color: COLORS.RESUME_TEXT_LIGHT, overflow: 'hidden', textOverflow: 'ellipsis' }}><span style={{ fontWeight: 700 }}>Expertise: </span>Mongoose, Schemas and virtuals, Static Methods, Validation, Aggregation</Typography></Grid>}
                            </Grid>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: COLORS.RESUME_BACKGROUND, padding: 0 }}>
                    {getMongoExpertise()}
                </AccordionDetails>
            </Accordion>


             {/* Sketch Expertise */}
             <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} elevation={0} disableGutters>
                <AccordionSummary
                    expandIcon={<Grid container><ICONS.DOWN color={expanded === 'panel5' ? COLORS.RESUME_TEXT_GREEN : COLORS.RESUME_TEXT_LIGHT} /></Grid>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    style={{ backgroundColor: COLORS.RESUME_BACKGROUND }}
                >
                    <Grid container justifyContent={'start'} alignItems={'flex-start'} >
                        <Grid item> <ICONS.SKETCH size={isMobile ? 35 : 45} color={COLORS.RESUME_TEXT_GREEN} /> </Grid>
                        <Grid item flex={1}>
                            <Grid container direction={'column'} marginLeft={1}>
                                <Grid item><Typography sx={{ fontWeight: 700, flexShrink: 0, fontSize: expanded === 'panel5' ? isMobile ? 18 : 25 : isMobile ? 11 : 16, color: expanded === 'panel5' ? COLORS.RESUME_TEXT_GREEN : COLORS.RESUME_TEXT_LIGHT }}>Sketch / Designing ( Exp. 4+ Years)</Typography></Grid>
                                {expanded === 'panel5' ? null : <Grid item><Typography sx={{ flexShrink: 0, fontSize: isMobile ? 11 : 16, color: COLORS.RESUME_TEXT_LIGHT, overflow: 'hidden', textOverflow: 'ellipsis' }}><span style={{ fontWeight: 700 }}>Expertise: </span>Wireframing, Prototype, Vector/SVG Icon</Typography></Grid>}
                            </Grid>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: COLORS.RESUME_BACKGROUND, padding: 0 }}>
                    {getSketchExpertise()}
                </AccordionDetails>
            </Accordion>


        </div>
    );
}

