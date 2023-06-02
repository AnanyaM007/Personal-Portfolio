import { Button, Stack, Typography, Box } from "@mui/material";
import Image from "next/image";
import NavbarD from './../../components/navbarD';

const Projects = () => {
  return (
    <>
      <Stack sx={{
        minHeight:"100vh", 
        background:"#F3AF00"
        }}>
        <NavbarD />
        <Stack sx={{
          margin:"0px 50px"
          }}>
        <Typography variant="h4" sx={{
          fontSize: "40px", 
          marginBottom: "30px",
          fontWeight:"700"
          }}>Projects</Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default Projects;
