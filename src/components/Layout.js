
import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import SideNav from './SideNav'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { format } from 'date-fns';
import '../../src/App.css'



export default function Layout(props) {

    return (


        <Box sx={{ display: 'flex' }}>
            <AppBar sx={{ width: `calc(100% - 240px)` }} color="secondary" elevation={0}>
                <Toolbar >
                    <Typography sx={{ flexGrow: 1 }}>
                        Today is the {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography sx={{fontFamily:'cursive'}}>
                        <b>Raj</b>   {/* Login and Logout Button */}
                    </Typography>
                    <Avatar src='/ava.png' sx={{
                        marginLeft: {
                            sm: 2
                        }
                    }} />
                </Toolbar>
                
            </AppBar>
            <Box>
                <SideNav />
            </Box>
         
            

            <Box sx={{
        
                backgroundColor: '#f9f9f9',
             width: '100%',
                padding: {
                    sm: 3
                },
            
            }}>

                <Box sx={theme => theme.mixins.toolbar}  />
      
                {props.children}
            </Box>
            
   
         
        </Box >
     
 

    )
}