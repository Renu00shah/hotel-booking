import { Box, Typography } from '@mui/material'
import React from 'react'

const PropertyList = () => {
    const styles = {
        pList: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            // marginLeft: "200px",
            margin: '10px 150px',
            zIndex:"1"
        },
        pListItem: {
           
            borderRadius: "10px",
            overFlow: "hidden",
            cursor: "pointer",
            flex:"1"
        },
    }
  return (
      <>
          <Box sx={styles.pList}>
              <Box sx={styles.pListItem}>
                  <img className='pListImg' style={{width:"300px",height:"200px",borderRadius:"10px",boxShadow:"5px 5px 10px gray"}} src="https://images.moneycontrol.com/static-mcnews/2019/09/Samhi_Hotels-770x433.jpg?impolicy=website&width=770&height=431" alt="" />
                  <Box sx={styles.pListTitle}>
                      <Typography variant='h5'>Hotels</Typography>
                      <Typography variant='h7'>233 hotels</Typography>
                  </Box>
              </Box>
              <Box sx={styles.pListItem}>
                  <img className='pListImg' style={{height:"200px",width:"300px",borderRadius:"10px",boxShadow:"5px 5px 10px gray"}} src="https://www.holidify.com/images/cmsuploads/compressed/274926758_20221124191339.jpg" alt="" />
                  <Box sx={styles.pListTitle}>
                      <Typography  sx={{fontWeight:"bold"}} variant='h5'>Villas</Typography>
                      <Typography variant='h7'>2233 villas</Typography>
                  </Box>
              </Box>
              <Box sx={styles.pListItem}>
                  <img className='pListImg' style={{width:"300px",height:"200px",borderRadius:"10px",boxShadow:"5px 5px 10px gray"}} src="https://l.icdbcdn.com/oh/60907f50-c4d6-4044-9422-b536a7fdabfa.jpg?w=2080" alt="" />
                  <Box sx={styles.pListTitle}>
                      <Typography sx={{fontWeight:"bold"}} variant='h5'>Cabins</Typography>
                      <Typography variant='h7'>2033 cabins</Typography>
                  </Box>
              </Box>
              <Box sx={styles.pListItem}>
                  <img className='pListImg' style={{height:"200px",width:"300px",borderRadius:"10px",boxShadow:"5px 5px 10px gray"}} src="https://www.kayak.co.in/rimg/himg/76/21/2b/leonardo-145067-156471865-413102.jpg?width=1366&height=768&crop=true" alt="" />
                  <Box sx={styles.pListTitle}>
                      <Typography  sx={{fontWeight:"bold"}} variant='h5'>Appartments</Typography>
                      <Typography variant='h7'>2033 appartment</Typography>
                  </Box>
              </Box>
              {/* <Box sx={styles.pListItem}>
                  <img className='pListImg' style={{width:"300px",borderRadius:"10px",boxShadow:"5px 5px 10px gray"}} src="https://media.cntraveler.com/photos/53da60a46dec627b149e66f4/16:9/w_2580,c_limit/hilton-moorea-lagoon-resort-spa-moorea-french-poly--110160-1.jpg" alt="" />
                  <Box sx={styles.pListTitle}>
                      <Typography>Resorts</Typography>
                      <Typography>233 resorts</Typography>
                  </Box>
              </Box> */}
              
              
      </Box>
      </>)
}

export default PropertyList
