import React from 'react';
import air from'./images/air.png';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Avatar} from "@mui/material";
import {Link} from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
    <Link to='/'>
      <img className='header_icon' src={air}
      alt='air bnb logo' />
    </Link>
      

      <div className='header_center'>
        <input type="text" />
        <SearchIcon />
      </div>
      <div className='header_right'>
      <p>Become a Host</p>
      <LanguageIcon />
      <ExpandMoreIcon />
      <Avatar />
      </div>
    </div>
    
  )
}

export default Header