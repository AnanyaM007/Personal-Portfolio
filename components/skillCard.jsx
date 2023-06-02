import { Stack, Typography, Box } from "@mui/material";
import Image from "next/image";
import C1 from "./../public/C1.png";
import C2 from "./../public/C2.png";
import C3 from "./../public/C3.png";
import C4 from "./../public/C4.png";
import C5 from "./../public/C5.png";
import C6 from "./../public/C6.png";

const skillCard = () => {
    return (
        <>
            <Stack>
                <Stack gap={4} sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    flexWrap: "wrap"
                }}>

                    <Stack sx={{
                        marginBottom: "30px",
                        background: "#F3AF00",
                        display: "flex",
                        flexDirection: "column",
                        minWidth: "220px",
                        maxHeight: "300px",
                        borderRadius: "5px",
                        justifyContent: "space-around",
                        padding: "20px",
                        alignItems: "center"
                    }}>
                        <Typography variant="h5" sx={{
                            fontSize: "25px",
                            fontWeight: "600"
                        }}>Languages
                        </Typography>
                        <Typography sx={{ fontSize: "20px" }}>HTML5</Typography>
                        <Typography sx={{ fontSize: "20px" }}>CSS3</Typography>
                        <Typography sx={{ fontSize: "20px" }}>Javascript</Typography>
                        <Typography sx={{ fontSize: "20px" }}>Python</Typography>
                        <Typography sx={{ fontSize: "20px" }}>C++</Typography>
                        <Typography sx={{ fontSize: "20px" }}>C</Typography>
                        <Box sx={{
                            position:"absolute",
                            top:760,
                            left:90,

                            }}>
                            <Image src={C1}></Image>
                        </Box>
                        <Box sx={{
                            position:"absolute",
                            top:540,
                            left:135,

                            }}>
                            <Image src={C2}></Image>
                        </Box>
                        <Box sx={{
                            position:"absolute",
                            top:660,
                            left:350,

                            }}>
                            <Image src={C3}></Image>
                        </Box>
                    </Stack>
                    <Stack sx={{
                        marginBottom: "30px",
                        background: "#F3AF00",
                        display: "flex",
                        flexDirection: "column",
                        minWidth: "220px",
                        maxHeight: "300px",
                        borderRadius: "5px",
                        justifyContent: "space-around",
                        padding: "20px",
                        alignItems: "center",
                        zIndex:1
                    }}>
                        <Typography variant="h5" sx={{
                            fontSize: "25px",
                            fontWeight: "600"
                        }}>Frameworks
                        </Typography>
                        <Typography sx={{ fontSize: "20px" }}>React.js</Typography>
                        <Typography sx={{ fontSize: "20px" }}>Next.js</Typography>
                        <Typography sx={{ fontSize: "20px" }}>Tailwind CSS</Typography>
                        <Typography sx={{ fontSize: "20px" }}>Bootstrap</Typography>
                        <Typography sx={{ fontSize: "20px" }}>Material-UI</Typography>
                        <Typography sx={{ fontSize: "20px" }}></Typography>
                        <Box sx={{
                            position:"absolute",
                            top:830,
                            left:480,

                            }}>
                            <Image src={C4}></Image>
                        </Box>
                        <Box sx={{
                            position:"absolute",
                            top:540,
                            left:435,

                            }}>
                            <Image src={C5}></Image>
                        </Box>
                        <Box sx={{
                            position:"absolute",
                            top:490,
                            left:640,

                            }}>
                            <Image src={C6}></Image>
                        </Box>
                    </Stack>
                    <Stack sx={{
                        marginBottom: "30px",
                        background: "#F3AF00",
                        display: "flex",
                        flexDirection: "column",
                        minWidth: "220px",
                        maxHeight: "300px",
                        borderRadius: "5px",
                        justifyContent: "space-around",
                        padding: "20px",
                        alignItems: "center"
                    }}>
                        <Typography variant="h5" sx={{
                            fontSize: "25px",
                            fontWeight: "600"
                        }}>Developer Tools
                        </Typography>
                        <Typography sx={{ fontSize: "20px" }}>Git</Typography>
                        <Typography sx={{ fontSize: "20px" }}>Github</Typography>
                        <Typography sx={{ fontSize: "20px" }}>Docker</Typography>
                        <Typography sx={{ fontSize: "20px" }}>Figma</Typography>
                        <Typography sx={{ fontSize: "20px" }}>VS Code</Typography>
                        <Typography sx={{ fontSize: "20px" }}>Postman</Typography>
                        <Box sx={{
                            position:"absolute",
                            top:760,
                            left:680,
                            zIndex:0
                            }}>
                            <Image src={C1}></Image>
                        </Box>
                        <Box sx={{
                            position:"absolute",
                            top:570,
                            left:725,

                            }}>
                            <Image src={C2}></Image>
                        </Box>
                        <Box sx={{
                            position:"absolute",
                            top:660,
                            left:940,

                            }}>
                            <Image src={C3}></Image>
                        </Box>
                    </Stack>
                    <Stack sx={{
                        marginBottom: "30px",
                        background: "#F3AF00",
                        display: "flex",
                        flexDirection: "column",
                        minWidth: "220px",
                        height: "300px",
                        borderRadius: "5px",
                        justifyContent: "space-around",
                        padding: "20px",
                        alignItems: "center"
                    }}>
                        <Typography variant="h5" sx={{
                            fontSize: "25px",
                            fontWeight: "600"
                        }}>Databases
                        </Typography>
                        <Typography sx={{ fontSize: "20px" }}>MySQL</Typography>
                        <Typography sx={{ fontSize: "20px" }}>MongoDB</Typography>
                        <Typography sx={{ fontSize: "20px" }}>Firebase</Typography>
                        <Typography sx={{ fontSize: "20px" }}></Typography>
                        <Typography sx={{ fontSize: "20px" }}></Typography>
                        <Typography sx={{ fontSize: "20px" }}></Typography>
                        <Box sx={{
                            position:"absolute",
                            top:810,
                            left:1070,

                            }}>
                            <Image src={C4}></Image>
                        </Box>
                        <Box sx={{
                            position:"absolute",
                            top:540,
                            left:1010,

                            }}>
                            <Image src={C5}></Image>
                        </Box>
                        <Box sx={{
                            position:"absolute",
                            top:490,
                            left:1230,

                            }}>
                            <Image src={C6}></Image>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default skillCard;