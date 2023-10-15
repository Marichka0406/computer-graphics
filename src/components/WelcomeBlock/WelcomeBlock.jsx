import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import welcomeImage from './welcome-image.png'

function WelcomeBlock() {

  const isSmallScreen = useMediaQuery("(max-width:650px)");
  return (
    <Box
      sx={{
        display: 'flex',
        marginTop: 20,
        marginRight:isSmallScreen ? 0 : 10,
        marginBottom:0,
        height:'100%',
        flexDirection: isSmallScreen ? 'column' : 'row',
        alignItems:isSmallScreen ? 'center' : 'normal',
      }}
    >
     <img width={isSmallScreen ? '100%' : '60%'} src={welcomeImage } alt ="Students are learning computer graphics"/>
      

      <Box
        sx={{
            display: 'flex',
            flexDirection:'column',
            alignItems:isSmallScreen ? 'center' : 'normal',
            justifyContent:isSmallScreen ? 'center' : 'flex-start',
        }}
      >
        <Typography variant="h3" sx={{ marginBottom: 3}}>
          Welcome!
        </Typography>
        <Typography sx={{ marginBottom: 4, fontSize:20}}>
            Let’s explore the world of computer graphics together
        </Typography>
        <Link
              to ='/fractals'  style={{ textDecoration: "none", color: "white", width: '100%' }}>
        <Button
        sx={{
            backgroundColor: 'rgba(40, 42, 69, 1)',
            color: '#fff',
            '&:hover': {
              backgroundColor:'rgba(88, 93, 164, 1)'
            },
            padding: 2,
            paddingRight:5,
            paddingLeft:5,
            width:isSmallScreen ? '90%' : '75%'
          }}
        >
          Start now
        </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default WelcomeBlock;
