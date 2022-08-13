import React from 'react';
import { Button } from '@mui/material';
import background from "../images/background.jpg";
import "../css/index.css";
import GithubSvg from './NavBar';
import { padding } from '@mui/system';

function TopBar() {
    return ( 
        <header className='header' 
        style={{padding: "20px 20px 40px 20px",}}>
          <GithubSvg 
          link="https://github.com/ViljamEkdhl"
          />
        </header>
    );
}

export default TopBar;