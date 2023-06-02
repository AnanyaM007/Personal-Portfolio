import React from "react";
import { Typography, Stack } from "@mui/material";
import NavbarL from "./../../components/navbarL";
import SkillCard from "../../components/skillCard";


const About = () => {
  return (
    <Stack marginBottom={10} className="about">
      <NavbarL />
      <Stack >
        <Typography variant="h4" sx={{ color: "#EBEBEB", textAlign: "center", fontSize: "40px", marginBottom: "30px", marginTop: "30px" }}>About Me</Typography>
        <Typography sx={{ color: "#EBEBEB", marginLeft: "100px", marginRight: "100px", fontSize: "23px", marginBottom: "70px" }}>Skilled in UI/UX design and full-stack web development, adept at creating user-centered digital experiences. Collaborative and creative, translating user needs into visually appealing designs. Proficient in front-end technologies and full-stack development, bringing concepts to life with functional web applications. Passionate about staying up-to-date with industry trends, delivering innovative solutions that exceed expectations.</Typography>
      </Stack>
      <Stack>
        <Typography variant="h4" sx={{ color: "#EBEBEB", textAlign: "center", fontSize: "40px", marginBottom: "30px" }}>Technical Skills</Typography>

      </Stack>
      <Stack sx={{ display: "flex", justifyContent: "center", paddingLeft: "100px", marginRight: "100px" }}><SkillCard /></Stack>

    </Stack>
  );
}

export default About;
