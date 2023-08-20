import { Box } from '@mui/material'
import React from 'react'

const Footer = () => {
    const styles = {
        footer: {
            width: "100%",
            fontSize: "12px",
            margin:"10px 150px"
        },
        fLists: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            marginBottom:"50px"
        },
        fListItem: {
            marginBottom: "10px",
            color: "#003580",
            cursor: "pointer"
        }
    }
  return (
      <>
          <Box sx={styles.footer}>
              <Box sx={styles.fLists}>
                  <ul sx={styles.fList}>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}>Countries</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}>Regions</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}} >Cities</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}} >Districts</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}> Airports</li>
                      <li >Hotels</li>
                  </ul>
                  <ul sx={styles.fList}>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}} >Countries</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}>Regions</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}>Cities</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}>Districts</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}> Airports</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}} >Hotels</li>
                  </ul>
                  <ul sx={styles.fList}>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}>Countries</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}>Regions</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}>Cities</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}>Districts</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}> Airports</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}>Hotels</li>
                  </ul>
                  <ul sx={styles.fList}>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}} >Countries</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}} >Regions</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}>Cities</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}>Districts</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}> Airports</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}>Hotels</li>
                  </ul>
                  <ul sx={styles.fList}>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}>Countries</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}>Regions</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}>Cities</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}>Districts</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}> Airports</li>
                      <li style={{mb:'10px',color:"#003580",cursor:"pointer"}}>Hotels</li>
                  </ul>
              </Box>
              <Box sx={styles.fText}>
                  All Rights Reserved @ 2023 ; RenuBooking
              </Box>
      </Box>
      </>
  )
}

export default Footer