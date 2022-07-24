import React from 'react';
import { Button } from '@mui/material';
import background from "../images/background.jpg";
import "../css/index.css";
import GithubSvg from './githubSvg';
import { padding } from '@mui/system';

function TopBar() {
    return ( 
        <header className='header' 
        style={{padding: "20px 20px 40px 20px"}}>
          <GithubSvg/>
        </header>
    );
}

export default TopBar;