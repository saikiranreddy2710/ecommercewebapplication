import React from 'react';
import {Container, Grid, Typography} from "@material-ui/core";
import { fade, makeStyles } from '@material-ui/core/styles';
import Logo from "../assets/logo.png";
import { Link, withRouter  } from 'react-router-dom';
import data from "../data";
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import AuthContext from "../context";
import {Input } from '@material-ui/icons';
import axios from 'axios';


const useStyles = makeStyles( (theme) => ({
    heading:{
        fontFamily:"Lobster,cursive",
        color:"#fc30d0",

    },
    image:{
        borderRadius:"40px",
        transition:"transform 0.2s",
        '&:hover':{
            transform:"scale(1.1)",
            transition:"transform 0.2s",
            cursor:"pointer",
        },
    },
    button:{
        // Add the styles provided here
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none',
        appearance: 'none',
        backgroundColor: 'transparent',
        border: '0.125em solid #1A1A1A',
        borderRadius: '0.9375em',
        '-webkit-box-sizing': 'border-box',
        boxSizing: 'border-box',
        color: '#3B3B3B',
        cursor: 'pointer',
        display: 'inline-block',
        fontFamily: 'Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: 'normal',
        margin: 0,
        minHeight: '3.75em',
        minWidth: 0,
        outline: 'none',
        padding: '1em 2.3em',
        textAlign: 'center',
        textDecoration: 'none',
        transition: 'all 300ms cubic-bezier(.23, 1, 0.32, 1)',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        userSelect: 'none',
        '-webkit-user-select': 'none',
        '-ms-touch-action': 'manipulation',
        touchAction: 'manipulation',
        willChange: 'transform',
        '&:disabled': {
            pointerEvents: 'none',
        },
        '&:hover': {
            color: '#fff',
            backgroundColor: '#1A1A1A',
            '-webkit-box-shadow': 'rgba(0, 0, 0, 0.25) 0 8px 15px',
            boxShadow: 'rgba(0, 0, 0, 0.25) 0 8px 15px',
            '-webkit-transform': 'translateY(-2px)',
            '-ms-transform': 'translateY(-2px)',
            transform: 'translateY(-2px)',
        },
        '&:active': {
            '-webkit-box-shadow': 'none',
            boxShadow: 'none',
            '-webkit-transform': 'translateY(0)',
            '-ms-transform': 'translateY(0)',
            transform: 'translateY(0)',
        },
    },
    end:{
        display : "flex",
        justifyContent:"flex-end",
    },
    input:{
        display: 'none',
    },
    inputLabel : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#fff',
        cursor: 'pointer',
        transition: 'all .3s',
        '&:hover': {
            borderColor: '#999',
        },
    },
    inputLabelIcon : {
        marginRight: '5px',
    },
    inputLabelText : {
        fontSize: '16px',
        fontWeight: 400,
    },
    inputLabelInput : {
        display: 'none',
    },
    inputLabelInputActive : {
        display: 'block',
    },
    inputLabelInputFile : {
        width: '0.1px',
        height: '0.1px',
        opacity: 0,
        overflow: 'hidden',
        position: 'absolute',
        zIndex: -1,
    },
    newsletter: {
        marginTop: "3em",
        marginBottom: "3em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
        },
    },
    socialLinks: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        "& > *": {
            margin: "0.5em",
        },
    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "50%",
        },
    },
    formInput: {
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "70%",
        },
    },
    formButton: {
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "30%",
        },
    },
    footer: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        padding: "2em",
        display: "flex",

        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
        },
    },
    footerLinks: {
        display: "flex",
        flexDirection: "column",


        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
        },
    },
    footerLink: {
        color: theme.palette.common.white,
        textDecoration: "none",
        margin: "0.5em",
    },
    footerLinkIcon: {
        marginRight: "0.5em",
    },
    footerLinkText: {
        fontSize: "0.8em",
    },
    footerRights: {
        fontSize: "0.8em",
        color: theme.palette.common.white,
        margin: "0.5em",

    },
    footerRightsLink: {
        color: theme.palette.common.white,
        textDecoration: "none",
    },
    footerRightsLinkIcon: {
        marginRight: "0.5em",
    },
    footerRightsLinkText: {
        fontSize: "0.8em",

    },
    footerRightsLinkTextBold: {
        fontWeight: "bold",
    },
    footerRightsLinkTextLight: {
        fontWeight: "lighter",
    },
    footerRightsLinkTextItalic: {
        fontStyle: "italic",
    },
    footerRightsLinkTextUnderline: {
        textDecoration: "underline",
    },
    footerRightsLinkTextStrike: {
        textDecoration: "line-through",
    },
    footerRightsLinkTextOverline: {
        textDecoration: "overline",
    },
    footerRightsLinkTextCapitalize: {
        textTransform: "capitalize",

    },
    footerRightsLinkTextUppercase: {
        textTransform: "uppercase",
    },
    footerRightsLinkTextLowercase: {
        textTransform: "lowercase",
    },

}));


const Home = (props) => {

    const { auth , setAuth ,user } = React.useContext(AuthContext);
    const classes = useStyles();
    const lstate = props.history.location.state;
    const cond = props.history.location.state !== undefined && props.history.location.state.message !== undefined
    const [open, setOpen] = React.useState(cond);

    const handleLogout = () => {
        axios.get('/api/logout')
            .then(response => {
                if (response.status === 200) {
                    setAuth(false);
                    props.history.push('/')
                }
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <Container>
                <Grid container justify="center">
                    <Collapse in={open}>
                        <Alert
                        style={{marginTop:"3em"}}
                        severity="error"
                        action={
                            <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                            >
                            <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        >
                        {
                            cond && 
                            props.history.location.state.message
                        }
                        </Alert>
                    </Collapse>                    
                </Grid>
                <Grid container justify="space-between" >
                    <Grid justify="flex-start">
                        <Grid item style={{padding:"2em"}}>
                            <Link to="/products">
                                <Typography variant="h5"  color="textSecondary">Products</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                    { auth && user !== null ? 
                     <Grid className={classes.end}>
                        <Grid item style={{padding:"2em"}}>
                            
                            <Typography variant="h5"  color="textSecondary">Welcome {user.email}</Typography>
                            
                        </Grid>
                        <Grid item style={{padding:"2em"}}>
                            
                            <Typography variant="h5"  onClick={handleLogout}
                            color="textSecondary" gutterBottom >Logout</Typography>
                            
                        </Grid>
                    </Grid> :
                    <Grid className={classes.end}>
                        <Grid item style={{padding:"2em"}}>
                            <Link to="/register">
                                <Typography variant="h5"  color="textSecondary">Register</Typography>
                            </Link>
                        </Grid>
                        <Grid item style={{padding:"2em"}}>
                            <Link to="/login">
                                <Typography variant="h5" color="textSecondary" >Login</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                    }
                </Grid>
                <Grid container justify="space-around" alignItems="center" direction="column" >
                    
                        <Grid xs={12} sm={4} item>
                            <img src={Logo} />         
                       </Grid>               
                    
                    
                        <Grid xs={12} sm={6} item>
                            <Typography variant="h3" align="center" className={classes.heading} >Have the flamboyance in you have no bounds</Typography>
                            <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom={true} >Shop for the new trends at never seen prices</Typography>
                        </Grid>
                    
                </Grid>

                <Grid container justify="center" alignItems="center" style={{marginTop:"3em"}} >
                    <Grid xs={12} sm={4} item>
                        <img src={`https://about.hm.com/content/dam/hmabout/gallery/fashion/2023/eva-cremers-x-h%26m/1-campaign-images/4087_A4_Campaign_Portrait_4.jpg.web.496.640.jpeg`} className={classes.image} />                    
                    </Grid>
                    <Grid xs={12} sm={2} item>
                        <Typography variant="h4" color="secondary">Grab the latest fashion items</Typography>
                    </Grid>
                    
                    <Grid xs={12} sm={4} item>
                        <img src={`https://${data.data[1].image}`} className={classes.image} />                    
                    </Grid>
                    <Grid xs={12} sm={2} item>
                        <Typography variant="h4" color="secondary">At affordable prices</Typography>
                    </Grid>
                </Grid>
                <Grid container justify="center" alignItems="center" style={{marginTop:"5em"}} direction="column">
                    <Grid item>
                        <Link to="/login">
                            <Typography variant="h4" gutterBottom="true" 
                            color="secondary">Register now</Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        
                            <Typography variant="h4" gutterBottom="true" 
                            color="textSecondary">Explore more trends</Typography>
                        
                    </Grid>
                    <Grid item>
                        <Link to="/products">
                            <Typography variant="h4" gutterBottom="true"
                            color="secondary">Shop now</Typography>
                        </Link>

                    </Grid>
                    <Grid item>
                        <Typography variant="h4" gutterBottom="true"
                        color="textSecondary">At never seen prices</Typography>

                    </Grid>


                </Grid>
                <Grid container justify="center" alignItems="center" style={{marginTop:"5em"}} direction="column">

                    <Grid item>
                        <Typography variant="h4" gutterBottom="true"
                        color="textSecondary">Follow us on</Typography>

                    </Grid>
                    <Grid item>
                        <Typography variant="h4" gutterBottom="true"
                        color="secondary">Instagram</Typography>

                    </Grid>
                    <Grid item>
                        <Typography variant="h4" gutterBottom="true"
                        color="textSecondary">Facebook</Typography>

                    </Grid>
                    <Grid item>
                        <Typography variant="h4" gutterBottom="true"
                        color="secondary">Twitter</Typography>

                    </Grid>
                    <Grid item>
                        <Typography variant="h4" gutterBottom="true"
                        color="textSecondary">Linkedin</Typography>

                    </Grid>
                    <Grid item>
                        <Typography variant="h4" gutterBottom="true"
                        color="secondary">Pinterest</Typography>

                    </Grid>
                    <Grid item>
                        <Typography variant="h4" gutterBottom="true"
                        color="textSecondary">Youtube</Typography>

                    </Grid>
                    <Grid item>
                        <Typography variant="h4" gutterBottom="true"
                        color="secondary">Snapchat</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" gutterBottom="true"
                        color="textSecondary">Tiktok</Typography>
                    </Grid>
                    <Grid item>
                        #add form to subscribe to newsletter
                        <Typography variant="h4" gutterBottom="true"
                        color="secondary">Subscribe to our newsletter</Typography>

                    </Grid>
                    <Grid item>
                        <Typography variant="h4" gutterBottom="true"
                        color="textSecondary">Get the latest trends</Typography>

                    </Grid>
                    <Grid item>
                        <Typography variant="h4" gutterBottom="true"
                        color="secondary">At never seen prices</Typography>

                    </Grid>
                  
                    <Grid item>
                        <Typography variant="h4" gutterBottom="true"
                        color="textSecondary">About us</Typography>

                    </Grid>
                    <Grid item>
                        <Typography variant="h4" gutterBottom="true"
                        color="secondary">Contact us</Typography>

                    </Grid>
                    <Grid item>
                        <Typography variant="h4" gutterBottom="true"
                        color="textSecondary">Terms and conditions</Typography>

                    </Grid>
                    <Grid item>
                        <Typography variant="h4" gutterBottom="true"
                        color="secondary">Privacy policy</Typography>

                    </Grid>
                    <Grid item>
                        <Typography variant="h4" gutterBottom="true"
                        color="textSecondary">FAQ</Typography>


                    </Grid>
                    <Grid item>
                        <Typography variant="h4" gutterBottom="true"
                        color="secondary">Help</Typography>
                        <Typography variant="h4" gutterBottom="true"
                        color="textSecondary">© 2021</Typography>
                        <Typography variant="h4" gutterBottom="true"
                        color="secondary">All rights reserved</Typography>
                        <Typography variant="h4" gutterBottom="true"
                        color="textSecondary">Made with ❤️ by</Typography>
                        <Typography variant="h4" gutterBottom="true"
                        color="secondary">Team 1</Typography>


                    </Grid>

                    
                </Grid>
            </Container>
        </div>
    )
}


export default withRouter(Home);
