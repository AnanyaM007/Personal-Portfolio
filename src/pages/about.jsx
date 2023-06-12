import React from "react";
import { Typography, Stack } from "@mui/material";
import NavbarL from "./../../components/navbarL";
import SkillCard from "../../components/skillCard";
import { keyframes } from "@emotion/react";

const About = () => {
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
const slideInAnimation1 = keyframes`
from {
  transform: translateX(100%);
  opacity: 0;
}
to {
  transform: translateX(0);
  opacity: 1;
}
`;
  const slideDownAnimation = keyframes`
  from {
    transform: translateY(-200%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const slideDownAnimation1 = keyframes`
from {
  transform: translateY(-100%);
  opacity: 0;
}
to {
  transform: translateY(0);
  opacity: 1;
}
`;
  return (
    <Stack marginBottom={17} >
      <NavbarL />
      <Stack>
        <Typography
          sx={{
            color: "#EBEBEB",
            textAlign: "center",
            fontSize: { xs: "34px", sm: "34px", md: "40px" },
            marginBottom: "30px",
            marginTop: "0px",
            animation: `${slideDownAnimation} 1.5s ease-in-out`
          }}>
          About Me
        </Typography>
        <Typography
          sx={{
            color: "#EBEBEB",
            marginLeft: { xs: "30px", sm: "40px", md: "100px" },
            marginRight: { xs: "20px", sm: "40px", md: "100px" },
            fontSize: { xs: "16px", sm: "19px", md: "23px" },
            marginBottom: "20px",
            animation: `${slideDownAnimation1} 1.5s ease-in-out`
          }}>
          Skilled in UI/UX design and full-stack web development, adept at creating user-centered digital experiences. Collaborative and creative, translating user needs into visually appealing designs. Proficient in front-end technologies and full-stack development, bringing concepts to life with functional web applications. Passionate about staying up-to-date with industry trends, delivering innovative solutions that exceed expectations.</Typography>
        <Typography
          sx={{
            color: "#EBEBEB",
            marginLeft: { xs: "30px", sm: "40px", md: "100px" },
            fontSize: { xs: "22px", sm: "26px", md: "28px" },
            marginBottom: "10px",
            animation: `${slideInAnimation} 2s ease-in-out`
          }}
        >Education
        </Typography>
        <Typography
          sx={{
            color: "#EBEBEB",
            marginLeft: { xs: "30px", sm: "40px", md: "100px" },
            marginRight: { xs: "20px", sm: "40px", md: "100px" },
            fontSize: { xs: "16px", md: "18px" },
            marginBottom: "50px",
            animation: `${slideInAnimation} 2s ease-in-out` 
          }}>
             <strong>B-Tech in Information Technology :</strong>&nbsp; Veer Surendra Sai University of Technology <em style={{fontWeight:"300"}}> ( CGPA: 8.81 )</em><br></br>
             <strong>Intermediate Education :</strong>&nbsp; D.A.V Public School, Pokhariput <em style={{fontWeight:"300"}}> ( 96.6% )</em><br></br>
          <strong>Matriculation :</strong>&nbsp; D.A.V Public School, Pokhariput <em style={{fontWeight:"300"}}> ( 98.2% )</em>
        </Typography>
      </Stack>
      <Stack>
        <Typography
          sx={{
            color: "#EBEBEB",
            textAlign: "center",
            fontSize: { xs: "34px", sm: "34px", md: "40px" },
            marginBottom: "50px",
            animation: `${slideInAnimation1} 2s ease-in-out`
          }}>
          Technical Skills
        </Typography>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: {xs:"20px",md:"100px"},
          marginRight: {xs:"20px",md:"100px"}
        }}>
        <SkillCard />
      </Stack>
    </Stack>
  );
}

export default About;
