import { Box, Typography } from '@mui/material'
import React from 'react'

const SearchItem = () => {
    const styles = {
        searchItem: {
            border: "1px solid gray",
            padding: "10px" ,
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            marginBottom:"20px"
        },
        siDesc: {
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            flex:"2"
        },
        siDetails: {
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: 'space-between',
            
        }
    }
  return (
      <>
          <Box sx={styles.searchItem}>
              <img className='siImg' src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
              <Box sx={styles.siDesc}>
                  <Typography  sx={{fontSize:"20px",color:"#0071c2"}}>Tower Street Apartments</Typography>
                  <Typography sx={{fontSize:"12px"}} >500m from center</Typography>
                  <Typography sx={{fontSize:"12px",padding:"3px",borderRadius:"5px",color:"white",bgcolor:"green",width:"max-content"}} >Free Airport Taxi</Typography>
                  <Typography sx={{fontSize:"12px",fontWeight:"bold"}}>Studio Apartment with Air conditioning</Typography>
                  <Typography sx={{fontSize:"12px"}} >Entire Studio | 1 bathroom | 1 bedroom</Typography>
                  <Typography sx={{fontSize:"12px",fontWeight:"bold",color:"green"}} >Free Cancellation</Typography>
                  <Typography  sx={{fontSize:"12px",color:"green"}} >You can cancel later,so lock in this great price today!</Typography>
              </Box>
              <Box sx={styles.siDetails}>
                  <Box sx={{display:"flex",justifyContent:"space-between"}}>
                      <Typography sx={{fontWeight:"500"}}>Excellent</Typography>
                      <button className='butn'>8.8</button> </Box>
                  <Box sx={{display:"flex",textAlign:"right",flexDirection:"column",gap:"5px"}}>
                      <Typography sx={{fontSize:"24px"}}>$123</Typography>
                      <Typography sx={{fontSize:"12px",color:"gray"}}> Includes taxes and fees</Typography>
                      <button className='butn'>See Awailability</button>
                  </Box>
              </Box>
              
      </Box>
      
      </>

    )
}

export default SearchItem