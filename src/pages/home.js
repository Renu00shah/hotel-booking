import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { Box, Typography } from '@mui/material'
import Featured from '../components/Featured'
import PropertyList from '../components/PropertyList'
import FeaturedProperty from '../components/FeaturedProperty'
import MailList from '../components/MailList'
import Footer from '../components/Footer'

const home = () => {
    const styles = {
        homeContainer: {
            // marginTop: "80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
            margin: "120px 150px",
        },
        homeTitle: {
            fontSize: "20px",
            fontWeight: "bold",
        }
    }
  return (
      <>
          <Navbar />  
          <Header />
          <Box sx={styles.homeContainer}>
              <Featured />
              <Typography sx={styles.homeTitle}>Browse by property type</Typography>
              <PropertyList />
             <Typography sx={styles.homeTitle}>Home Guests Love </Typography>
              <FeaturedProperty />
              <MailList />
              <Footer/>
          </Box>
    </>
  )
}

export default home