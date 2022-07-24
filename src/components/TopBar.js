import React from 'react';
import { Button } from '@mui/material';
import background from "../images/background.jpg";
import "../css/index.css";

function TopBar() {
    return ( 
        <header className='header'>
          <Button variant="outlined" >
            Delete
          </Button>
          <Button variant="contained" >
            Send
          </Button>
				<h1>SBOTIFY</h1>
        </header>
    );
}

export default TopBar;