import { Box, Typography } from '@mui/material'
import React from 'react'

const Featured = () => {
    const styles = {
        featured: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            // marginLeft: "200px",
            margin: '10px 150px',
            zIndex:"1"
        },
        featuredItem: {
            position: "relative",
            color: "white",
            borderRadius: "10px",
            height: "250px",
            overFlow: "hidden",
            cursor: "pointer"
        },
        featuredTitle: {
            position: "absolute",
            bottom: '20px',
            left:"20px"
        }
        // featuredImg: {
        //     width: "30%",
        //     objectFit: "cover",
        // }
    }
  return (
      <>
          <Box  sx={styles.featured} >
              <Box sx={styles.featuredItem}>
                  <img style={{width:"400px",height:"250px",borderRadius:"10px",boxShadow:"5px 5px 10px gray"}}  className='featuredImg' src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg" alt="" />
                  <Box sx={styles.featuredTitle}>
                      <Typography variant='h4'>Delhi</Typography>
                      <Typography variant='h5'>123 properties</Typography>
                  </Box>
              </Box>
              <Box sx={styles.featuredItem}>
                  <img style={{width:"400px",height:"250px",borderRadius:"10px",boxShadow:"5px 5px 10px gray",zIndex:0.1}}  className='featuredImg' src="https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_1280.jpg" alt="" />
                  <Box sx={styles.featuredTitle}>
                      <Typography variant='h4'>Mumbai</Typography>
                      <Typography variant='h5'>223 properties</Typography>
                  </Box>
              </Box>
              <Box sx={styles.featuredItem}>
                  <img style={{width:"400px",borderRadius:"10px",height:"250px",boxShadow:"5px 5px 10px gray"}}   className='featuredImg' src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg" alt="" />
                  <Box sx={styles.featuredTitle}>
                      <Typography variant='h4'>Goa</Typography>
                      <Typography variant='h5'>345 properties</Typography>
                  </Box>
              </Box>
          </Box>  
    </>
  )
}

export default Featured