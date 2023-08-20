import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { Box, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailList from '../components/MailList';
import Footer from '../components/Footer';

const Hotel = () => {
  const photos = [
    {
      src:"https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/1e/19/b3/banquet-hall-from-main.jpg?w=600&h=-1&s=1"
    },
    {
      src:"https://www.hotelviceroyinn.com/images/bnqthall.jpg"
    },
    {
      src:"https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1506425692/Hotel/Dehradun/00004663/Bedroom_(5)_5kG4Ry.jpg"
    },
    {
      src:"https://www.hotelviceroyinn.com/images/luxury_suite.jpg"
    },
    {
      src:"https://image.wedmegood.com/resized/800X/uploads/member/768174/1571138923_Screenshot_26.png"
    },
    {
      src:"https://image.wedmegood.com/resized/540X/uploads/member/768174/1571138921_Screenshot_22.png"
    },
  ]
  const styles = {
    hotelContainer: {
      display: "flex",
      marginTop: "20px",
      justifyContent: "center",
      margin: "10px 150px",
            flexDirection: "column"


    },
    hotelWrapper: {
      width: "100%",
      gap: "10px",
      display: "flex",
      flexDirection: "column",
            position:"relative",

    },
    hotelImg: {
      width: "33%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent:"space-between",
      
    },
    hotelAddress:{
      fontSize: "12px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    img: {
      width:"33%"
    },
    hotelDetails:{
      display:"flex",
      justifyContent: "space-between",
      gap: "20px",
      marginTop:"20px"

    }
  }
  return (
    <>
      <Navbar />
      <Header type="list" />
      <Box sx={styles.hotelContainer}>
        <Box sx={styles.hotelWrapper}>
          <button style={{width:"10%",position:"absolute",top:"10px",right:"0"}} className='butn'>Reserve or Book Now</button>
          <Typography sx={{fontSize:'30px',fontWeight:"bold"}}>Grand Hotel</Typography>
          <Box sx={styles.hotelAddress}>
            <LocationOnIcon />
            <Typography sx={{fontSize:"12px"}}>Elex street Delhi</Typography>
          </Box>
          <Typography sx={{fontWeight:"500",color:'#0071c2'}}>Excellent location 500m from center</Typography>
          <Typography sx={{fontWeight:"500",color:'green'}}>Book a stay over $114 at this property and get a free airport taxi</Typography>
        </Box>
        <Box sx={styles.hotelImg}>
          {
            photos.map(photo => (
              <Box sx={styles.img}>
                <img className='hiImg' src={photo.src} alt="" />
              </Box>
            ))
          }
        </Box>

        <Box sx={styles.hotelDetails}>
          <Box sx={{flex:"3"}}>
            <Typography sx={{fontSize:"30px",fontWeight:"bold",mt:"10px"}}>Stay in the heart of Delhi</Typography>
            <Typography sx={{fontSize:"14px",mt:"10px"}}>The weather department expects light rain on Thursday as the monsoon line of the trough shifts slightly in the direction of the capital.
According to the India Meteorological Department (IMD), the maximum temperature on Thursday may see a marginal drop, with some relief from humidity.</Typography>
          
          </Box>
          <Box sx={{flex:"1",bgcolor:"#ebf3ff",padding:"20px",display:"flex",flexDirection:"column",gap:"20px"}}>
            <Typography  sx={{fontSize:"30px",fontWeight:"bold"}}>Perfect for a 9-night stay!</Typography>
            <Typography>Located in a real heart of Delhi</Typography>
            <Typography>
              <b>$945</b> (9 nights)
            </Typography>
            <button style={{width:"50%"}} className='butn'>Reserve or book now</button>
          </Box>

          
        </Box>

      </Box>
      <MailList />
          <Footer/>
    </>

    )
}

export default Hotel