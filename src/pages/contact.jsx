import React, { useState, useEffect } from "react";
import { TextField, Typography, Grid, CssBaseline, Box } from "@mui/material";
import Image from 'next/image';
import { Email } from "@mui/icons-material";
import Navbar from "./../../components/navbarL";
import ContactImage from "./../../public/Typing.gif";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import ReactiveButton from 'reactive-button';
import { keyframes } from "@emotion/react";
import Loading from './../../components/Loading';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate an asynchronous operation
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [state, setState] = useState('idle');

    const regexExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const firebaseConfig = {
        apiKey: "AIzaSyBQ5ESLnWLW2oC53XAfEHk1--GW6cSBf-Q",
        authDomain: "personal-portfolio-de069.firebaseapp.com",
        projectId: "personal-portfolio-de069",
        storageBucket: "personal-portfolio-de069.appspot.com",
        messagingSenderId: "922317154397",
        appId: "1:922317154397:web:a26d20ad133f03eb1285b4",
        measurementId: "G-X1DZEJ6VP4"
    };

    firebase.initializeApp(firebaseConfig);

    const handleOpen = async () => {
        if (!fname || !email || !msg) {
            return toast.error("All fields must be filled");
        }
        if (!regexExp.test(email)) {
            return toast.error("Enter a valid Email");
        }
        if (!fname) {
            return toast.error("Enter your name");
        }
        if (!msg) {
            return toast.error("Write some message");
        }
        setState('loading');
        try {
            const db = firebase.firestore();
            await db.collection("contacts").add({
                name: fname,
                email: email,
                message: msg
            });
            toast.success("Message sent successfully!");
            setFname("");
            setEmail("");
            setMsg("");
            console.log("clear");
            setState('success');
        } catch (error) {
            console.error("Error sending message: ", error);
            toast.error("Failed to send message. Please try again.");
            setState('error');
        }

    };
    const slideInAnimation = keyframes`
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  `;

    const slideUpAnimation = keyframes`
    from {
        transform: translateY(-120%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <Grid>
                    <Navbar />
                    <Grid sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                        <Grid flexDirection="column" >
                            <getTheme />
                            <CssBaseline />

                            <Grid >
                                <Grid container sx={{ color: "#fff", flexDirection: "column" }}>
                                    <Typography sx={{
                                        marginBottom: "32px",
                                        fontWeight: "700",
                                        fontSize: {
                                            xs: "30px",
                                            sm: "40px",
                                            md: "50px"
                                        },
                                        animation: `${slideUpAnimation} 1.4s ease-in-out`
                                    }}>Get in Touch</Typography>
                                    <Grid item xs={15} md={5.7} sx={{ maxWidth: "100%", animation: `${slideInAnimation} 1s ease-in-out` }}>
                                        <TextField size="small"
                                            name="name"
                                            value={fname}
                                            label={"Name"}
                                            variant="outlined"
                                            onChange={(e) => {
                                                setFname(e.target.value);
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    color: '#9b9b9b',
                                                    fontSize: "16px",
                                                },
                                            }}
                                            sx={{
                                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: "#fff",
                                                },
                                                '& .MuiInputLabel-root.Mui-focused': {
                                                    color: "#fff"
                                                },
                                                '&:hover': {
                                                    color: "#fff"
                                                },
                                                '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: "#fff",
                                                },
                                                '& input': {
                                                    color: "#fff"
                                                },
                                                width: {
                                                    position: "relative",
                                                    xs: 280,
                                                    sm: 400,
                                                    md: 480
                                                },
                                            }}
                                            className="my-textfield"
                                        /><br />


                                        <TextField
                                            name="email"
                                            label={"E-mail address"}
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    color: '#9b9b9b',
                                                    fontSize: "16px",
                                                },
                                            }}
                                            type={Email} size="small" sx={{
                                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: "#fff",
                                                },
                                                '& .MuiInputLabel-root.Mui-focused': {
                                                    color: "#fff"
                                                },
                                                '&:hover': {
                                                    color: "#fff"
                                                },
                                                '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: "#fff",
                                                },
                                                '& input': {
                                                    color: "#fff"
                                                },
                                                width: {
                                                    position: "relative",
                                                    xs: 280,
                                                    sm: 400,
                                                    md: 480
                                                },
                                                marginTop: "32px"
                                            }}
                                            className="my-textfield"
                                        /><br />


                                        <TextField
                                            name="message"
                                            value={msg}
                                            multiline
                                            rows={4}

                                            label={"Message"}
                                            onChange={(e) => {
                                                setMsg(e.target.value);
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    color: '#9b9b9b',
                                                    fontSize: "16px",
                                                },
                                            }}
                                            InputProps={{
                                                style: { color: "#fff" }, // Set the font color here
                                            }}
                                            sx={{
                                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: "#fff",
                                                },
                                                '& .MuiInputLabel-root.Mui-focused': {
                                                    color: "#fff"
                                                },
                                                '&:hover': {
                                                    color: "#fff"
                                                },
                                                '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: "#fff",
                                                },
                                                '& input': {
                                                    color: "#fff"
                                                },
                                                width: {
                                                    position: "relative",
                                                    xs: 280,
                                                    sm: 400,
                                                    md: 480
                                                },
                                                marginTop: "32px"
                                            }}
                                            className="my-textfield" /><br />


                                        <ReactiveButton
                                            loadingText="Sending"
                                            successText="Message Sent ✔"
                                            onClick={handleOpen}
                                            idleText="Send Message"
                                            type="submit"
                                            buttonState={state}
                                            size="large"
                                            style={{
                                                textDecoration: "none",
                                                textTransform: "none",
                                                color: "#000",
                                                backgroundColor: "#F3AF00",
                                                borderRadius: '4px',
                                                paddingLeft: "25px",
                                                paddingRight: "25px",
                                                marginTop: "20px",
                                            }}></ReactiveButton><br />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Box display={{
                            xs: "none",
                            sm: "block",
                            md: "block"
                        }} >
                            <Image src={ContactImage} alt="image" />
                        </Box>

                        <ToastContainer />
                    </Grid>
                </Grid>
            )}
        </>
    );
}

export default Contact;
