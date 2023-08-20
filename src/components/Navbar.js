import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
    const styles = {
        navbar: {
        padding:"10px",
            backgroundColor: "#003580",
            
        },
        navContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin:"10px 150px",
        }
    }
  return (
      <>
          <Box sx={styles.navbar}>
              <Box sx={styles.navContainer}>
                  <Typography sx={{fontSize:"25px",fontWeight:500,color:"white"}}>Renu Booking</Typography>
                  <Box sx={styles.navItems}>
                      <Button style={{marginRight:"10px"}} variant='contained' >Register</Button>
                      <Button variant='contained'>Login</Button>
                  </Box>
              </Box>
</Box>
      </>
  )
}

export default Navbar