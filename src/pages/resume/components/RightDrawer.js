import { Typography, Grid } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import COLORS from '../../../constants/Colors';
import ICONS from '../../../constants/Icons';





export default function RightDrawer({onItemClick}) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };



    return (
        <div>

            <React.Fragment >

                <ICONS.MENU_ONE color={COLORS.RESUME_TEXT_GREEN} size={30} onClick={toggleDrawer('right', true)} />

                <Drawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                >
                    <Grid container width={200} direction={'column'} justifyContent={'flex-start'} alignItems={'center'} style={{backgroundColor:COLORS.RESUME_BACKGROUND, padding:10 }} flex={1}>
                        <img src={'https://i.ibb.co/V9PXLPh/my-polygon-image.png'} style={{width:100, height:100}}/>

                        <Grid item width={'100%'} marginTop={2}>
                        <Typography color={COLORS.RESUME_TEXT_GREEN} fontSize={20} fontWeight={400} marginTop={3} textAlign={'center'} onClick={()=>{ setState({ ...state, ['right']: false }); onItemClick('ABOUT_ME')}} > About Me</Typography>
                        <Typography color={COLORS.RESUME_TEXT_GREEN} fontSize={20} fontWeight={400} marginTop={3} textAlign={'center'} onClick={()=>{ setState({ ...state, ['right']: false }); onItemClick('SKILLS')}}> Skills</Typography>
                        <Typography color={COLORS.RESUME_TEXT_GREEN} fontSize={20} fontWeight={400} marginTop={3} textAlign={'center'} onClick={()=>{ setState({ ...state, ['right']: false }); onItemClick('EXPERIENCE')}}> Experience</Typography>
                        <Typography color={COLORS.RESUME_TEXT_GREEN} fontSize={20} fontWeight={400} marginTop={3} textAlign={'center'} onClick={()=>{ setState({ ...state, ['right']: false }); onItemClick('PROJECTS')}}> Projects</Typography>
                        <Typography color={COLORS.RESUME_TEXT_GREEN} fontSize={20} fontWeight={400} marginTop={3} textAlign={'center'} onClick={()=>{ setState({ ...state, ['right']: false }); onItemClick('BRAINSTROM')}}> Design & Brainstrom</Typography>
                        <Typography color={COLORS.RESUME_TEXT_GREEN} fontSize={20} fontWeight={400} marginTop={3} textAlign={'center'} onClick={()=>{ setState({ ...state, ['right']: false }); onItemClick('CONTACTS')}}> Contact Me</Typography>
                        </Grid>
                    </Grid>
                </Drawer>
            </React.Fragment>

        </div>
    );

}
