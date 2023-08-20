import { Box, Typography } from '@mui/material'
import React from 'react'

const FeaturedProperty = () => {
    const styles = {
        fp: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            // marginLeft: "200px",
            margin: '10px 150px',
            zIndex:"1"
        },
        fpItem: {
            borderRadius: "10px",
            overFlow: "hidden",
            cursor: "pointer",
            flex:"1"
        },
        fpName: {
            fontWeight: "bold",
        }
        
    }
  return (
      <>
          <Box  sx={styles.fp}>
          <Box sx={styles.fpItem}>
              <img style={{width:"300px",height:"200px",borderRadius:"10px",boxShadow:"5px 5px 10px gray"}} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=700&h=-1&s=1" alt="" />
              <Typography variant='h5' sx={styles.fpName}>Khurana Hotel</Typography>
              <Typography variant='h6' sx={styles.fpCity}>Delhi</Typography>
              <Typography variant='h7' sx={styles.fpPrice}>Starting from $120</Typography>
              <Box sx={styles.fpRating}>
                  <button style={{backgroundColor:"#003580",color:"white"}}>8.5</button>
                  <Typography variant='h8'>Excellent</Typography>
              </Box>
      </Box>
          <Box sx={styles.fpItem}>
              <img style={{width:"300px",height:"200px",borderRadius:"10px",boxShadow:"5px 5px 10px gray"}} src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg" alt="" />
              <Typography variant='h5' sx={styles.fpName}> Hotel Viceroy</Typography>
              <Typography variant='h6' sx={styles.fpCity}>Delhi</Typography>
              <Typography variant='h7' sx={styles.fpPrice}>Starting from $150</Typography>
              <Box sx={styles.fpRating}>
                  <button style={{backgroundColor:"#003580",color:"white"}}>8</button>
                  <Typography variant='h8'>Excellent</Typography>
              </Box>
      </Box>
          <Box sx={styles.fpItem}>
              <img style={{width:"300px",height:"200px",borderRadius:"10px",boxShadow:"5px 5px 10px gray"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKN4wL0OVMx2QzZtO1-rrZO-Sn1o8-pK7H6A&usqp=CAU" alt="" />
              <Typography variant='h5' sx={styles.fpName}>Singla's Hotel</Typography>
              <Typography variant='h6' sx={styles.fpCity}>Mumbai</Typography>
              <Typography variant='h7' sx={styles.fpPrice}>Starting from $110</Typography>
              <Box sx={styles.fpRating}>
                  <button style={{backgroundColor:"#003580",color:"white"}}>7</button>
                  <Typography variant='h8'>Good</Typography>
              </Box>
      </Box>
          <Box sx={styles.fpItem}>
              <img style={{width:"300px",height:"200px",borderRadius:"10px",boxShadow:"5px 5px 10px gray"}} src="https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg" alt="" />
              <Typography variant='h5' sx={styles.fpName}>King Hotel</Typography>
              <Typography variant='h6' sx={styles.fpCity}>Goa</Typography>
              <Typography variant='h7' sx={styles.fpPrice}>Starting from $120</Typography>
              <Box sx={styles.fpRating}>
                  <button style={{backgroundColor:"#003580",color:"white"}}>8.5</button>
                  <Typography variant='h8'>Excellent</Typography>
              </Box>
      </Box>
          
              </Box>
      
      </>
    )
}

export default FeaturedProperty