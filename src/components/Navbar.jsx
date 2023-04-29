import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@mui/icons-material/Menu';
import everest from "../images/everest.png"
import React from 'react';

const useStyles = makeStyles(theme => ({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    background: 'linear-gradient(to right, #204d2f, #14640e)',
  },
  navbarText: {
    textAlign: 'left',
  },
  navbarLinks: {
    textAlign: 'right',
    marginRight: '20px',
    
    
  },
  navbarLinksSpacing: {
    padding: '0 20px',
    textDecoration: 'none',
    color: 'black',
  },
  navbarLogo: {
    width: '120px',
    height: '90px',
  },
  navbarBtn: {
    borderRadius: '20px',
    color: 'white',
    border: '1px solid orange',
    backgroundColor: 'orange',
  },
  menuIcon: {
    color: 'white',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  menu: {
    marginTop: '40px',
    

  },
  navbars: {
     [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.navbar}>
        <Link to="/">
          <img src={everest} alt="logo" className={classes.navbarLogo} />
        </Link>
        <div className={classes.navbarLinks}>
          <IconButton
            className={classes.menuIcon}
            edge="start"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
         <div className={classes.navbars}>
           <Link className={classes.navbarLinksSpacing} to="/">
            Home
          </Link>
          <Link className={classes.navbarLinksSpacing} to="/discover">
            Discover
          </Link>
          <Link className={classes.navbarLinksSpacing} to="/get-in-touch">
            Contact
          </Link>
          <Link className={classes.navbarLinksSpacing} to="/services">
            Services
          </Link>
          <Link className={classes.navbarLinksSpacing} to="/login">
            Login
          </Link>
          <Link className={classes.navbarLinksSpacing} to="/register">
            <Button className={classes.navbarBtn}>Register</Button>
          </Link>
          </div>
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
            open={open}
            onClose={handleMenuClose}
            className={classes.menu}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link className={classes.navbarLinksSpacing} to="/">
                Home
              </Link> <Link className={classes.navbarLinksSpacing} to="/discover">
            Discover
          </Link>
          <Link className={classes.navbarLinksSpacing} to="/get-in-touch">
            Contact
          </Link>
          <Link className={classes.navbarLinksSpacing} to="/services">
            Services
          </Link>
          <Link className={classes.navbarLinksSpacing} to="/login">
            Login
          </Link>
          <Link className={classes.navbarLinksSpacing} to="/register">
            <Button className={classes.navbarBtn}>Register</Button>
          </Link>
              </MenuItem>
              </Menu>
              </div>
              </Toolbar>
              </AppBar>
  )
        }
  export default Navbar;
