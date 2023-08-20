import { Box, Typography } from '@mui/material'
import React from 'react'

const MailList = () => {
    const styles = {
        mail: {
            width: "100%",
            marginTop: "20px",
            backgroundColor: "#003580",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            padding: "50px"
        },
        // mailInputContainer: {
        //     ":input": {
        //         width: "300px",
        //         height: "30px",
        //         padding: "10px",
        //         border: "none",
        //         marginRight: "10px",
        //     }
        // }
    }
  return (
      <>
          <Box sx={styles.mail}>
              <Typography sx={styles.mailTitle}>Save time, save money</Typography>
              <Typography sx={styles.mailDesc}>Sign up and we will send the best deals to you</Typography>
              <Box sx={styles.mailInputContainer}>
                  <input style={{width: "300px",
                height: "30px",
                padding: "10px",
                      border: "none",
                                      borderRadius: "5px",

                marginRight: "10px"}} type="text" placeholder='Your Email' />
                  <button style={{
                      height: "30px",
                      padding: "10px",
                      alignItems: "center",
                      borderRadius: "5px",
                      backgroundColor:"lightblue",
                      cursor: "pointer",
                border: "none",
                marginRight: "10px"}} >Subscribe</button>
                  
              </Box>
      </Box>
      </>)
}

export default MailList