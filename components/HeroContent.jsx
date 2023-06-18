import { Button, Stack, Typography, Box, Divider } from "@mui/material";
import Image from "next/image";
import pic from "./../public/me.jpg";
import NavbarD from './navbarD';
import Socials from "./socials";
import Link from "next/link";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion"

const HeroContent = () => {

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: () => {
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { type: "spring", duration: 5, bounce: 0 },
          opacity: { duration: 0.5 }
        }
      };
    }
  };
  const draw1 = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: () => {
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { type: "spring", duration: 10, bounce: 0 },
          opacity: { duration: 0.5 }
        }
      };
    }
  };

  const slideUpAnimation = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

  const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

  return (
    <div>
      <Stack className="main" >
        <Stack height={{ lg: "100dvh" }} flexDirection={{ md: "column", lg: "row" }} justifyContent="center" width="100%">
          <Stack sx={{ width: "100%", position: { lg: "absolute" }, zIndex: "12" }}>
            <NavbarD />
          </Stack>
          <Stack flexDirection={{ sm: "column", md: "row" }} alignItems={"center"} flexWrap={"wrap"}
            justifyContent={"center"}>
            <Stack sx={{
              animation: `${fadeInAnimation} 4s ease-in-out`,
              width: { xs: "250px", sm: "auto" }
            }}>
              <Typography
                sx={{
                  fontWeight: "800",
                  marginBottom: "25px",
                  fontSize: { xs: "30px", sm: "40px", md: "50px", lg: "60px" },
                }}>
                Ananya Mohapatra
              </Typography>
              <Typography
                sx={{
                  maxWidth: "350px",
                  fontWeight: "600",
                  marginBottom: "35px",
                  fontSize: { xs: "20px", sm: "25px", md: "28px", lg: "30px" },
                }}>
                UI/UX Designer & Web Developer
              </Typography>
              <Link href={"/about"}><Button variant="contained" sx={{
                background: "none",
                color: "#121212",
                boxShadow: "none",
                fontSize: { xs: "18px", sm: "22px", md: "22px", lg: "22px" },
                textTransform: "none",
                fontWeight: "600",
                justifyContent: "flex-start",
                padding: "0",
                maxWidth: "370px",
                zIndex: "10",
                '&:hover': {
                  background: "none",
                  boxShadow: "none",
                  transform: "scale(1.1)",
                  transition: "transform 1s ease-in-out",
                  cursor: "pointer",
                }
              }}>More About Me &nbsp; <Box
                  component="img"
                  src="Arrow.svg"
                  sx={{
                    margin: "10px 0px",
                    width: { xs: "100px", md: "auto" }
                  }}
                />

              </Button></Link>

            </Stack>
            <Stack>
              <Box
                component={"img"}
                src={"me.jpg"}
                marginTop={"70px"}
                marginLeft={{ lg: "50px" }}
                sx={{
                  animation: `${slideUpAnimation} 2s ease-in-out`,
                  height: { xs: "30dvh", sm: "35dvh", md: "60dvh" },
                  borderRadius: { xs: "50%", sm: "50%", md: "50%", lg: "0% 0% 0% 50%" },
                  zIndex: "1",
                  filter: { lg: "drop-shadow(38px -45px 4px rgba(0, 0, 0, 0.25))" }
                }}>
              </Box>
            </Stack>
          </Stack>
          <Stack paddingTop={{ xs: "40px", sm: "30px", md: "0px" }} width={"100%"} height={"100%"} justifyContent={"flex-end"} alignItems={"start"} sx={{ position: { lg: "absolute" } }}> <Socials /> </Stack>
        </Stack>

        <Box sx={{
          position: "fixed",
          display: { xs: "none", sm: "none", md: "none", lg: "block" },
          left: "40%"
        }}>
          <motion.svg
            width="300"
            height="180"
            initial="hidden"
            animate="visible"
          >
            <motion.circle
              cx="150"
              cy="-100"
              r="180"
              stroke="#454545"
              variants={draw1}
            />
          </motion.svg>
        </Box>

        <Box
          sx={{
            position: "fixed",
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
          }}
        >
          <motion.svg
            width="200"
            height="600"
            initial="hidden"
            animate="visible"
          >
            <motion.circle
              cx="-10"
              cy="330"
              r="130"
              stroke="#454545"
              variants={draw}
            />
          </motion.svg>
        </Box>
      </Stack>
    </div>
  );
}

export default HeroContent;
