import { Grid, Box, Typography, Link, TextField, Button, makeStyles } from "@material-ui/core";
import { LocationOnOutlined } from "@mui/icons-material";
import Phone  from "@mui/icons-material/Phone";
import Mail  from "@mui/icons-material/Mail";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px #ccc",
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        color: theme.palette.primary.main,
        marginBottom: "20px",
    },
    icon: {
        color: theme.palette.primary.main,
        marginRight: "10px",
    },
    form: {
        marginTop: "20px",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
    },
    textField: {
        margin: "10px 0",
        width: "100%",
    },
    button: {
        marginTop: "20px",
        width: "100%",
        backgroundColor: '#D18700',
        color: "#fff",
        "&:hover": {
            backgroundColor: "#FFA500",
        },
    },
    text: {
        fontSize: "20px",
        color: theme.palette.text.primary,
    },
}));


const GetInTouch = () => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // add code to handle form submission here
        fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ name, email, phone,message})
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            //reset the form field
            setName("");
            setEmail("")
            setMessage("");
            setPhone("")
        })
        .catch(error => {
            console.log(error)
        })
    };

    return (
        <Box className={classes.container}>
            <Typography className={classes.title} variant="h4">Get in Touch</Typography>
            <Grid container>
                <Grid item xs={12 } style={{display: 'flex', alignItems: 'center'}}>
                   
                    <Grid item>
                        <LocationOnOutlined className={classes.icon} />
                    </Grid>
                   
                            <Grid item>
                            <Typography className={classes.text}>Lakeside, Pokhara Nepal</Typography>
                            </Grid>
                    
                </Grid>
                <Grid item xs={12} style={{display: 'flex', alignItems: 'center'}}>
                <Grid item>
                        <Phone className={classes.icon} />
                    </Grid>
                    <Grid item>
                    <Typography className={classes.text}>+977 9861060548</Typography>
                    </Grid>
                    
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" alignItems="center">
                        <Mail className={classes.icon} />
                        <Link href="mailto:neptrek@gmail.com" variant="body1">nepalguidetrekking@email.com</Link>
                    </Box>
                </Grid>
            </Grid>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    className={classes.textField}
                    fullWidth
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <TextField
                    className={classes.textField}
                    fullWidth
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                    className={classes.textField}
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                />
                <TextField
                    className={classes.textField}
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />
                <Button
                    className={classes.button}
                    color="primary"
                    variant="contained"
                    type="submit"
                >
                    Send Message
                </Button>
            </form>
        </Box>
    );
};

export default GetInTouch;  
                    