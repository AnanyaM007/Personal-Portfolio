import React from "react";
import { TextField, Button, Typography, Grid, CssBaseline, Box } from "@mui/material";
import Image from 'next/image';
import { Email } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import Navbar from "./../../components/navbarL";
import ContactImage from "./../../public/Typing.gif";


const Contact = () => {
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const regexExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleOpen = async () => {
        if (
            !fname ||
            !email ||
            !msg
        ) {
            return toast.error("All field must be filled");
        }
        if (!regexExp.test(email)) {
            return toast.error("Enter valid Email");
        }
        if (!fname) {
            return toast.error("Enter your name");
        }
        if (!msg) {
            return toast.error("Write some message");
        }
        toast.success("Message sent successfully!");
        setFname("");
        setEmail("");
        setMsg("");
        setAgree(false);

    };

    return (
        <Grid>
            <Navbar />
            <Grid sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                <Grid flexDirection="column" >
                    <getTheme />
                    <CssBaseline />


                    <Grid >
                        <Grid container sx={{ color: "#fff", flexDirection: "column" }}>
                            <Typography variant="h3" sx={{ marginBottom: "32px", fontWeight:"700" }}>Get in Touch</Typography>
                            <Grid item xs={15} md={5.7} sx={{ maxWidth: "100%" }}>
                                <TextField size="small"
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
                                    value={email}
                                    label={"E-mail address"}
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


                                <Button
                                    onClick={handleOpen}
                                    variant="contained" sx={{
                                        textDecoration: "none",
                                        textTransform: "none",
                                        color: "#000",
                                        backgroundColor: "#F3AF00",
                                        borderRadius: '4px',
                                        fontWeight: '500',
                                        paddingLeft: "25px",
                                        paddingRight: "25px",
                                        position: 'relative',
                                        marginTop: "40px",
                                        "&:hover": {

                                            background: "#bfbfbf"
                                        }
                                    }}>Send Message</Button><br />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Box display={{
                                            xs: "none",
                                            sm: "block",
                                            md: "block"
                }} >
                    <Image src={ContactImage}></Image>
                </Box>

                <ToastContainer />
            </Grid>
        </Grid>
    );
}

export default Contact;
