import { Button, Stack, Typography, Box } from "@mui/material";
import Image from "next/image";
import pic from "./../public/me.jpg";
import NavbarD from './navbarD';
import Socials from "./socials";

const HeroContent = () => {
  return (
    <Stack className="main">
      <Stack flexDirection="row" position="absolute" justifyContent="flex-end" width="100%">

        <Stack justifyContent="center" height="100vh" sx={{ position: "relative", left: "45px" }}>
          <Typography variant="h3" sx={{ fontWeight: "800", marginBottom: "25px", fontSize: "60px" }}>Ananya Mohapatra</Typography>
          <Typography variant="h5" sx={{ width: "300px", marginBottom: "35px", fontSize: "30px" }}>UI/UX Designer & Web Developer</Typography>
          <Button variant="contained" sx={{
            background: "none",
            color: "#121212",
            boxShadow: "none",
            fontSize: "22px",
            textTransform: "none",
            fontWeight: "600",
            justifyContent: "flex-start",
            padding: "0",
            maxWidth:"370px",
            '&:hover': {
              background: "none",
              boxShadow: "none",
            }
          }}>More About Me &nbsp; <Box
              component="img"
              src="Arrow.svg"
              sx={{
                margin: "10px 0px"
              }}
            /></Button>
        </Stack>
        <Image src={pic} alt="Ananya Mohapatra" height={700} />
      </Stack>
      <Stack sx={{ zIndex: "2" }}>
        <NavbarD />
      </Stack>
      <Stack position="absolute" bottom="40px" left="40px">
        <Socials />
      </Stack>
      <Box
        component="img"
        src="Ellipse 1.svg"
        sx={{
          width: "200px",
          position: "absolute",
          left: "576.5px"
        }}
      />
      <Box
        component="img"
        src="Ellipse 2.svg"
        sx={{
          width: "100px",
          position: "absolute",
          top: "200px"
        }}
      />
      <Box
        component="img"
        src="Ellipse 3.svg"
        sx={{
          width: "200px",
          position: "absolute",
          top: "632.5px",
          left: "500px"
        }}
      />
    </Stack>
  );
}

export default HeroContent;
