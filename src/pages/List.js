import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { Box, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import{format} from "date-fns"
import { DateRange } from 'react-date-range'
import SearchItem from '../components/SearchItem'


const List = () => {
    const location = useLocation()

    const [destination,setDestination]=useState(location.state.destination)
    const [date,setDate]=useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)
            const [openDate,setOpenDate]=useState(false)


    const styles = {
        listContainer: {
            display: 'flex',
            justifyContent: 'center',
            margin:"10px 150px"
            // marginTop:"20px",
        },
        listWrapper: {
            width: "100%",
            display: "flex",
            gap: "20px",
            
        },
        listSearch: {
            flex: "1",
            backgroundColor: "#febb02",
            padding: "10px",
            borderRadius: "10px",
            top: "10px",
            position: "sticky",
            height:"max-content",
        },
        listResult: {
            flex:"3"
        },
        lsTitle: {
            fontSize: "20px",
            marginBottom: "10px",
            color:"#555"
        },
        lsItem: {
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            marginBottom:"10px"
        },
        lsOptionItem: {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            fontSize: "12px",
            color:"#555"
        }
    }
  return (
      <div>
          <Navbar />
          <Header type="list" />
          <Box sx={styles.listContainer}>
              <Box sx={styles.listWrapper}>
                  <Box sx={styles.listSearch}>
                      <Typography sx={styles.lsTitle}>Search</Typography>
                      <Box sx={styles.lsItem}>
                          <label style={{fontSize:"12px"}}>Destination</label>
                          <input style={{height:"30px",border:"none",padding:"5px"}} placeholder= { destination} type="text" />
                      </Box>
                      <Box sx={styles.lsItem}>
                          <label style={{fontSize:"12px"}}>Check-in Date</label>
                          <span onClick={()=>setOpenDate(!openDate)} style={{ height: "30px", backgroundColor: "white", cursor: "pointer", display: "flex", alignItems: "center", padding: "5px" }}  >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                          {openDate && <DateRange
                              onChange={(item) => setDate([item.selection])}
                              ranges={date}
                              minDate={new Date()}

                          />
                          }
                      </Box>

                      <Box sx={styles.lsItem}>
                          <label>Options</label>
                          <Box sx={{padding:"10px"}}>
                          <Box sx={styles.lsOptionItem}>
                              <Typography sx={styles.lsOptionText}>
                                  Min Price <small>per night</small>
                                  
                              </Typography>
                              <input type="number" style={{}} />
                          </Box>
                          <Box sx={styles.lsOptionItem}>
                              <Typography sx={styles.lsOptionText}>
                                  Max Price <small>per night</small>
                                  
                              </Typography>
                              <input type="number" style={{}} />
                          </Box>
                          <Box sx={styles.lsOptionItem}>
                              <Typography sx={styles.lsOptionText}>
                                  Adult
                              </Typography>
                              <input min={1} placeholder={options.adult} type="number" style={{}} />
                          </Box>
                          <Box sx={styles.lsOptionItem}>
                              <Typography sx={styles.lsOptionText}>
                                  Children
                              </Typography>
                              <input min={0} placeholder={options.children} type="number" style={{}} />
                          </Box>
                          <Box sx={styles.lsOptionItem}>
                              <Typography sx={styles.lsOptionText}>
                                  Room
                              </Typography>
                              <input min={1} placeholder={options.room} type="number" style={{}} />
                          </Box>
                          
                          </Box>
                      </Box>
                      <button className='btn'>Search</button>
                  </Box>
                  <Box sx={styles.listResult}>
                      <SearchItem/>
                      <SearchItem/>
                      <SearchItem/>
                      <SearchItem/>
                      <SearchItem/>
                  </Box>
              </Box>
          </Box>
    </div>
  )
}

export default List