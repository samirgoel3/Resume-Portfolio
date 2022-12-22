import { Grid, Typography } from '@mui/material';
import React from 'react';
import { isMobile } from "react-device-detect";
import COLORS from '../../../constants/Colors';
import MockLocExplanationModal from '../modals/MockLocExplanationModal';
import ProjectTabs from './ProjectTabs';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';



const MODAL_STYLES = {
    position: "absolute",
    backgroundColor: "#FFF",
    padding: "15px",
    top: '50%',
    left: '50%',
    
  };
  
var items = [
    {
        name: "Exampur",
        image:"https://i.ibb.co/NTqsG49/exampur.png",
        link: "https://play.google.com/store/apps/details?id=com.edudrive.exampur",
        modal:null
    },
    {
        name: "My Gate visitor",
        image:"https://i.ibb.co/BVXkfZ5/samir-visitoir.png",
        link: "https://play.google.com/store/apps/details?id=com.executive",
        modal:null
    },
    {
        name: "My Gate Gatekeeper",
        image:"https://i.ibb.co/sF0Y2Kc/samir-gatekeeper.png",
        link: "https://play.google.com/store/apps/details?id=com.csoapp",
        modal:null
    },
    {
        name: "Gentle Guest (React Admin panel )",
        image:"https://i.ibb.co/HX7HTJb/samir-gentle-guest.png",
        link: "https://drive.google.com/file/d/1l2FQzIQaSxaYbW03R31NMoH5O75MMOc3/view",
        modal:null
    },
    {
        name: "All Tap (Pine Labs)",
        image:"https://i.ibb.co/WG7M5NC/alltap.png",
        link: "https://play.google.com/store/apps/details?id=com.pinelabs.epos",
        modal:null
    },
    {
        name: "Mock Loc",
        image:"https://i.ibb.co/k8MTNKg/samir-mock-loc.png",
        link: "https://play.google.com/store/apps/details?id=com.mocker.mockloc",
        modal:<MockLocExplanationModal/>
    },
    {
        name: "Uber Clone Driver app ",
        image:"https://i.ibb.co/SwK47bN/apporio-taxi-samirt.png",
        link: "https://play.google.com/store/apps/details?id=com.apporio.demotaxiappdriver",
        modal:null
    },
    {
        name: "Uber Clone User app",
        image:"https://i.ibb.co/hC8nT1f/samir-apporio-taxi-user.png",
        link: "https://play.google.com/store/apps/details?id=com.apporio.demotaxiapp",
        modal:null
    },
    {
        name: "Food Delivery App",
        image:"https://i.ibb.co/Cbk0NPh/samir-food-delivery.png",
        link: "https://play.google.com/store/apps/details?id=com.apporio.productfood",
        modal:null
    },
    {
        name: "Laundry App",
        image:"https://i.ibb.co/80bdvkQ/samir-laundry-app.png",
        link: "https://play.google.com/store/apps/details?id=com.apporio.apporiolaundry",
        modal:null
    },
    {
        name: "Laundry Driver App",
        image:"https://i.ibb.co/M2QJMPG/laundry-driver-app.png",
        link: "https://play.google.com/store/apps/details?id=com.apporio.laundrydriver",
        modal:null
    },
    {
        name: "POS (Tyre Retail Caddy)",
        image:"https://i.ibb.co/pZMg58V/tyre-retail-caddy.png",
        link: "https://drive.google.com/drive/u/1/folders/1fy6KDvWgwSRuyyfCe_gVsfpBdlK0YKu9",
        modal:null
    },
    {
        name: "Bueno Food App",
        image:"https://i.ibb.co/J2rzHyB/bueno.png",
        link: "https://drive.google.com/drive/u/1/folders/1thUPS-rLgA-dJKTzoqpOzNvEV9pQz095",
        modal:null
    },
    {
        name: "Handyman USER App",
        image:"https://i.ibb.co/BcNr94P/Handyman-provider.png",
        link: "https://play.google.com/store/apps/details?id=com.apporio.handymanservices",
        modal:null
    },
    {
        name: "Handyman PROVIDER App",
        image:"https://i.ibb.co/M98qJmq/HANDYMAN-PROVIDER-APP.png",
        link: "https://play.google.com/store/apps/details?id=com.apporio.handymanprovider",
        modal:null
    },
    {
        name: "Appokart (SHOPIFY)",
        image:"https://i.ibb.co/0CXvBY8/appokart.png",
        link: "https://www.youtube.com/watch?v=BfRQzSHOj8U",
        modal:null
    },
    {
        name: "Appokart Admin (SHOPIFY)",
        image:"https://i.ibb.co/mCT6dCr/appokartwebsite.png",
        link: "https://www.youtube.com/watch?v=BfRQzSHOj8U",
        modal:null
    },
    {
        name: "Algo Network",
        image:"https://i.postimg.cc/hjkqmF4t/algo-network.png",
        link: "https://github.com/samirgoel3/Algo-Network",
        modal:null
    },
    {
        name: "Chat Website (Open Source)",
        image:"https://i.postimg.cc/RF2wPV5n/chatwebsote-samir.png",
        link: "http://13.126.21.229/main",
        modal:null
    },
    {
        name: "Chat BE Node",
        image:"https://i.postimg.cc/qvrTS98t/chat-app-BE.png",
        link: "https://github.com/samirgoel3/Main-Chat-App-BE",
        modal:null
    },
    {
        name: "Mock Loc Api Node",
        image:"https://i.postimg.cc/VLgJ7Btc/mockloc-BE.png",
        link: "https://github.com/samirgoel3/MockLocAPI/tree/master/server",
        modal:null
    }
]


const getCarousal = (item) => {
    return <div style={{ width: isMobile ? 150 : 400, height: isMobile ? 130 : 300, backgroundColor: COLORS.RESUME_BACKGROUND_LIGHT, borderRadius: 9, margin: isMobile ? 5 : 10 }}>
        {/* item.modal != null ? 
        <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={MODAL_STYLES}>
                  {item.modal}
                </Box>
            </Modal>

            : */}
        <a href={item.link} target="_blank" ><img src={item.image} style={{width: isMobile ? 150 : 400, height: isMobile ? 100 : 260, borderTopLeftRadius:5, borderTopRightRadius:5}}/></a>


        <Typography width={isMobile ? 150 : 400} textAlign={'center'} color={'white'} fontWeight={700} fontSize={isMobile ? 10 : 15}>{item.name}</Typography>
    </div>
}

export default function Projects() {
    return (
        <div style={{ backgroundColor: COLORS.RESUME_BACKGROUND, padding: isMobile ? 10 : 50 }}>

            <Grid container justifyContent={'center'} alignItems={'center'} direction={'column'}>
                <Typography style={{ color: COLORS.RESUME_TEXT_LIGHT, fontWeight: 700, fontSize: isMobile ? 20 : 35, marginTop: 13, marginBottom: 23 }}>MY TECH. PROJECTS</Typography>
                <ProjectTabs/>

                <Grid container direction={'row'} justifyContent={'space-evenly'} alignItems={'center'}>
                   {
                    items.map((item , index)=>getCarousal(item))
                   }

                </Grid>

            </Grid>
        </div>
    )
}