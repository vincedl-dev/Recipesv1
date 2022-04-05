import {useState,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch, useSelector } from 'react-redux';

import {user_logout} from '../../store/user/action'
import { useNavigate } from 'react-router-dom';

import {Link} from 'react-router-dom'

export default function Header() {
  
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] =useState(null);

  
  const username = useSelector(state => state.user.username)
  const islogout = useSelector(state => state.user.islogout)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const logout = () => {
    dispatch(user_logout())
  
  }
  useEffect(()=>{
    if(islogout){
      console.log(islogout)
      navigate('/login')
    }
  },[islogout])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
  
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <BookmarkIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </BookmarkIcon>
          <Typography variant="h6" component={Link} to='/home' sx={{ flexGrow: 1,textDecoration:'none',color:'#fff' }}>
          Recipes
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {username}
          </Typography>
                <AccountCircle  sx={{ ml  : 1 }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
               
                <MenuItem component={Link} to='/user/recipes'>Recipes</MenuItem>
                <MenuItem onClick={() => logout()}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
