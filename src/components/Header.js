import { Box, Button, Typography } from '@mui/material'
import  LocalHotelIcon  from '@mui/icons-material/LocalHotel';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AttractionsIcon from '@mui/icons-material/Attractions';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import React, { useState } from 'react'
import{format} from "date-fns"
import { useNavigate } from 'react-router-dom';

const Header = ({ type }) => {
    const navigate = useNavigate()
    const[destination,setDestination]= useState("")
    const [openDate,setOpenDate]=useState(false)
    const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
    ]);
    
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult : 1,
        children : 0,
        room : 1
    })
    const handleOption = (name,operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] +1 : options[name] -1
            }
        })
    }

    const handleSearch = () => {
        navigate("/hotels",{state:{destination,date,options}})
    }
    const styles = {
        header: {
            backgroundColor: "#003580",
            display: "flex",
            // justifyContent: "center",
            color: "white",
            position: 'relative',

        },
        // headerContainer: {
        //     margin: "10px 150px",
        //     marginBottom:"60px"
        //                 // margin:"10px 0px 100px 40px",
        // },
        // ":listMode": {
        //     margin:" 0px 150px"
        // },
        headerList: {
            display: "flex",
            gap:"40px"
        },
        headerListItem: {
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            gap: "10px",
            ":active": {
                border: "1px solid white",
                padding: "5px",
                borderRadius:"20px"
            }
        },
        headerSearch: {
            height: "30px",
            backgroundColor: "white",
            border: "3px solid #febb02",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "20px 0px",
            borderRadius: "5px",
            position: "absolute",
            bottom: "-20px",
            width:"800px",
                        margin: "10px 150px",

        },
        headerIcon: {
            color:"lightgrey",
        },
        headerSearchItem: {
            display: "flex",
            alignItems: "center",
            gap:"10px"
        },
        date: {
            position: "absolute",
            top: '50px',
            zIndex:"2"
        },
        options: {
            position: "absolute",
            top: "50px",
            backgroundColor: "white",
            color: 'grey',
            borderRadius: "5px",
            // border:"1px solid gray",
            boxShadow:"5px 5px 10px grey",
        },
        optionItem: {
            width: '170px',
            display: "flex",
            justifyContent: "space-between",
            margin:"10px"
        },
        optionCounter: {
            display: "flex",
            alignItems: "center",
            gap: '10px',
            fontSize: "12px",
            color: "black",
        }
    }
  return (
      <>
          <Box sx={styles.header}>
              <Box className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
              <Box  sx={styles.headerList}>
                      <Box sx={styles.headerListItem }>
                          <LocalHotelIcon />
                      <span>Stays</span>
                  </Box>
                      <Box sx={styles.headerListItem}>
                          <AirplaneTicketIcon />
                      <span>Flights</span>
                  </Box>
                      <Box sx={styles.headerListItem}>
                          <DirectionsCarIcon />
                      <span>Car Rentals</span>
                  </Box>
                      <Box sx={styles.headerListItem}>
                          <AttractionsIcon />
                      <span>Atractions</span>
                  </Box>
                      <Box sx={styles.headerListItem}>
                          <AirportShuttleIcon />
                      <span>Airport Taxis</span>
                  </Box>
                  </Box>
                  { type !== "list" &&
                      <> <Typography variant='h5' sx={{ fontWeight: "bold", mt: "30px" }}  >A Lifetime of discounts? It's Genius</Typography>
                  <Typography sx={{mt:"10px",mb:"10px"}}>Get rewarded for your travels-unlock instant savings of 10% or more with a free Renu Booking account</Typography>
                  <Button variant='contained'>Sign in |Register</Button>


                  <Box sx={styles.headerSearch}>
                      <Box sx={styles.headerSearchItem}>
                          <LocalHotelIcon sx={styles.headerIcon} />
                          <input onChange={(e)=>setDestination(e.target.value)} type='text' placeholder='Where are you going' style={{border:"none",outline:"none"}}/>
                      </Box>
                      <Box sx={styles.headerSearchItem}>
                          <CalendarMonthIcon sx={styles.headerIcon} />
                          <span onClick={()=>setOpenDate(!openDate)} style={{ color: "lightgray", cursor: "pointer" }}>{ `${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                          {openDate && <DateRange
                              editableDateInputs={true}
                              onChange={item => setDate([item.selection])}
                              moveRangeOnFirstSelection={false}
                                  ranges={date}
                                  minDate={new Date()}
                              sx={styles.date}
                          />}
                      </Box>
                      <Box sx={styles.headerSearchItem}>
                          <PersonIcon sx={styles.headerIcon} />
                          <span onClick={()=>setOpenOptions(!openOptions)} style={{ color: "lightgray", cursor: "pointer" }}>{`${options.adult} adult.${options.children} children.${options.room} room`}</span>
                          {openOptions && <Box sx={styles.options}>
                              <Box sx={styles.optionItem}>
                                  <span style={{}}>Adult</span>
                                  <Box sx={styles.optionCounter}>
                                      <button disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")} >-</button>
                                      <span style={{}}>{options.adult}</span>
                                      <button onClick={() => handleOption("adult", "i")} >+</button>
                                  </Box>

                              </Box>
                              <Box sx={styles.optionItem}>
                                  <span style={{}}>Children</span>
                                  <Box sx={styles.optionCounter}>

                                      <button disabled={options.children <= 0} onClick={() => handleOption("children", "d")} >-</button>
                                      <span style={{}}>{options.children}</span>
                                      <button onClick={() => handleOption("children", "i")} >+</button>
                                  </Box>


                              </Box>
                              <Box sx={styles.optionItem}>
                                  <span style={{}}>Room</span>
                                  <Box sx={styles.optionCounter}>

                                      <button disabled={options.room <= 1} onClick={() => handleOption("room", "d")} >-</button>
                                      <span style={{}}>{options.room}</span>
                                      <button onClick={() => handleOption("room", "i")} >+</button>
                                  </Box>

                              </Box>
                          </Box>}
                      </Box>
                      
                      <Box sx={styles.headerSearchItem}>
                              <Button onClick={handleSearch } variant='contained'>Search</Button>
                          </Box>
                          
                      </Box>
                  </>
                  }
              </Box>
              
      </Box>
      </>
  )
}

export default Header