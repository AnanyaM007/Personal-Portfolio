import { Stack, Typography } from "@mui/material";
import NavbarL from './../../components/navbarL';

const Experience = () => {
  return (
    <>
      <Stack
        sx={{
          minHeight: "100dvh",
          background: "#121212",
        }}
      >
        <NavbarL />
        <Typography
          sx={{
            fontSize: { xs: "33px", sm: "40px", md: "50px" },
            marginBottom: "50px",
            fontWeight: "700",
            color:"#f2f2f2",
            marginLeft:{xs:"80px", sm:"108px", md:"120px"}
          }}
        >
          Experience
        </Typography>
      </Stack>
    </>
  );
};

export default Experience;