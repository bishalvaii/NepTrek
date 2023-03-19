import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import everest from "../images/everest.png"


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
        color: 'white',
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
        
    }
    
}))

 const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.navbar}>
                <Link to= '/'><img src={everest} alt='logo' className={classes.navbarLogo} /></Link>
                <div className={classes.navbarLinks}>
                <Link className= {classes.navbarLinksSpacing} to="/">Home</Link>
                <Link className= {classes.navbarLinksSpacing} to="/discover">Discover</Link>
                <Link className= {classes.navbarLinksSpacing} to="/get-in-touch">Contact</Link>
                <Link className={classes.navbarLinksSpacing} to="/services">Services</Link>
                <Link className={classes.navbarLinksSpacing} to="/login">Login</Link>
                <Link className={classes.navbarLinksSpacing} to="/register">
                    <Button className={classes.navbarBtn}>Register</Button>
                   </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
