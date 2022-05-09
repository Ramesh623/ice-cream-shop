import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className = 'container'>
        <div className='wrapper'>
            <div className='left'>
                <span className='language'></span>
                <div className='searchContainer'>
                    <input type="text" className='input' />
                    <Search style={{color: 'gray', fontSize : '16'}}/>
                </div>
            </div>

            <div className='center'>
                <h1 className='logo'>Mr. Ice Cream</h1>
            </div>
                
            <div className='right'>
                <div className='menuItem'>REGISTER</div>
                <div className='menuItem'>SIGN IN</div>
                <div className='menuItem'>
                    <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined color="action" />
                    </Badge>
                </div>                


            </div>
            
            
        </div>

    </div>
  )
}

export default Navbar;