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

  const slideInAnimation = keyframes`
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
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
        <Stack height={"100vh"} flexDirection="row" justifyContent="flex-end" width="100%">
          <Stack sx={{ zIndex: "2", width: "100%", position: "absolute" }}>
            <NavbarD />
          </Stack>
          <Stack pl={5} pb={5} width={"100%"} justifyContent={"flex-end"} alignItems={"start"} sx={{ zIndex: "3", }}> <Socials /> </Stack>
          <Stack zIndex={"10"} justifyContent="center" position={"absolute"} left={330} height="100vh" sx={{
            animation: `${fadeInAnimation} 4s ease-in-out`
          }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "800",
                marginBottom: "25px",
                fontSize: "60px"
              }}>
              Ananya Mohapatra
            </Typography>
            <Typography
              variant="h5"
              sx={{
                width: "300px",
                marginBottom: "35px",
                fontSize: "30px"
              }}>
              UI/UX Designer & Web Developer
            </Typography>
            <Link href={"/about"}><Button variant="contained" sx={{
              background: "none",
              color: "#121212",
              boxShadow: "none",
              fontSize: "22px",
              textTransform: "none",
              fontWeight: "600",
              justifyContent: "flex-start",
              padding: "0",
              maxWidth: "370px",
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
                  margin: "10px 0px"
                }}
              />

            </Button></Link>

          </Stack>
          <Box
            sx={{
              zIndex: "1",
              animation: `${slideInAnimation} 2s ease-in-out`
            }}>
            <Image src={pic} alt="Ananya Mohapatra" height={696.2} />
          </Box>
        </Stack>

        <Box sx={{
          position: "fixed"
        }}>
          <motion.svg
            width="800"
            height="200"
            initial="hidden"
            animate="visible"
          >
            <motion.circle
              cx="700"
              cy="0"
              r="140"
              stroke="#454545"
              variants={draw1}
            />
          </motion.svg>
        </Box>

        <Box
          sx={{
            position: "fixed"
          }}
        >
          <motion.svg
            width="200"
            height="600"
            initial="hidden"
            animate="visible"
          >
            <motion.circle
              cy="330"
              r="130"
              stroke="#454545"
              variants={draw}
            />
          </motion.svg>
        </Box>
        <Box
          sx={{
            position: "fixed",
          }}
        >
          <motion.svg
            width="800"
            height="800"
            initial="hidden"
            animate="visible"
          >
            <motion.circle
              cx="580"
              cy="780"
              r="150"
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
