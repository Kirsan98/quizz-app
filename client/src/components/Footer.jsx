import React from 'react'
import { NavLink } from 'react-router-dom';
import {Typography} from '@mui/material';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-text'>
        <div>
          <Typography variant="p" key="Email" component="a" href="mailto:geoquizz@gmail.com">
            Contacter-nous
          </Typography>
        </div>
        <div>
          <NavLink to='/about-us'>À propos</NavLink>
        </div>
        <div>
          <NavLink to='/terms-conditions'>Termes & Conditions </NavLink>
        </div>
        <div>
          @GEOQUIZZ
        </div>
      </div>
    </div>
  )
}

export default Footer;
