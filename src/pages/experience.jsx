import { Stack, Typography } from "@mui/material";
import NavbarL from './../../components/navbarL';
import { keyframes } from "@emotion/react";

const Experience = () => {
  const slideDownAnimation = keyframes`
  from {
    transform: translateY(-130%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

  return (
    <>
      <Stack
        sx={{
          minHeight: "100dvh",
          background: "#121212",
          color: '#fff',
        }}
      >
        <NavbarL />
        <Typography
          sx={{
            animation: `${slideDownAnimation} 1s ease-in-out`,
            fontSize: { xs: "33px", sm: "40px", md: "50px" },
            marginBottom: "50px",
            fontWeight: "700",
            textAlign: "center"
          }}
        >
          Experience
        </Typography>
      </Stack>
    </>
  );
};

export default Experience;