import { Stack, Typography } from "@mui/material";
import NavbarL from './../../components/navbarL';
import { keyframes } from "@emotion/react";

const Experience = () => {

  const experiences = [
    {
      sNo: "01",
      name: "Frontend Developer and UI/UX Designer",
      company: "Codeur Technologies",
      duration: "March 2023 - Present",
      desc: "Worked on developing the main attendance website as well as contributed in developing the main website of Blueprint",
      tech: ["React", "Typescript", "NextJS", "JavaScript", "HTML5", "CSS3", "Tailwind", "Flask", "Figma"],
      icons: ["react.png", "ts.png", "next.png", "js.png", "html.png", "css.png", "tailwindcss.png", "flask.png", "figma.png"]
    },
    {
      sNo: "02",
      name: "UI/UX Designer",
      company: "Surabhi",
      duration: "May 2023 - Present",
      desc: "Designed the entire website of Surabhi using design principles and latest trends to improve user experience",
      tech: ["Figma", "Canva", "Django"],
      icons: ["figma.png", "canva.png", "django.png"]
    },
    {
      sNo: "03",
      name: "Full Stack Developer",
      company: "Wasper Tech.",
      duration: "September 2022 - February 2023",
      desc: "Developed frontend of the Official Website of Wasper Tech and the Wasper main admin dashboard",
      tech: ["React", "JavaScript", "Tailwind", "Firebase"],
      icons: ["react.png", "js.png", "tailwindcss.png", "firebase.png"]
    },
    {
      sNo: "04",
      name: "Frontend Developer and UI/UX Designer",
      company: "Graduate Us",
      duration: "January 2023 - Present",
      desc: "Designed the admin dashboard and created prototypes using Figma as well as developed multiple pages using Next.js finally hosting on a live domain",
      tech: ["NextJS", "JavaScript", "Material-UI", "Firebase", "MongoDB", "Figma"],
      icons: ["next.png", "js.png", "mui.png", "firebase.png", "mongodb.png", "figma.png"]
    },
    {
      sNo: "05",
      name: "Frontend Developer",
      company: "Cache Digitech",
      duration: "January 2023 - March 2023",
      desc: "Developed the entire website from scratch and linked it to database",
      tech: ["JavaScript", "HTML5", "CSS3", "Firebase"],
      icons: ["js.png", "html.png", "css.png", "firebase.png"]
    },
    {
      sNo: "06",
      name: "Technical Team Member and Assistant Coordinator",
      company: "Enigma VSSUT",
      duration: "May 2022 - Present",
      desc: "Worked on developing multiple projects including Ritrovo, a community website",
      tech: ["React", "Typescript", "NextJS", "JavaScript", "HTML5", "CSS3", "Tailwind", "Material-UI", "Figma"],
      icons: ["react.png", "ts.png", "next.png", "js.png", "html.png", "css.png", "tailwindcss.png", "mui.png", "figma.png"]
    },
  ];

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

  return (
    <>
      <Stack
        sx={{
          minHeight: "100dvh",
          background: "#121212",
          color: '#fff',
          paddingBottom: "50px"
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
        <Stack>
          {experiences.map((exp, index) => (
            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              key={index}
              alignItems={"center"}
              marginLeft={{ md: 17 }}
              marginBottom={5}
              sx={{
                animation: `${slideUpAnimation} 2s ease-in-out` ,
              }}
            >
              <Typography sx={{
                fontWeight: "900",
                fontSize: { xs: "50px", sm: "70px", md: "120px" },
                WebkitTextStrokeColor: "#b8b8b8",
                WebkitTextStrokeWidth: "1px",
                color: "#121212"
              }}>{exp.sNo}</Typography>
              <Stack marginLeft={5} marginRight={5} maxWidth={"900px"}>
                <Typography sx={{
                  fontSize: { xs: "20px", sm: "25px", md: "30px" },

                }}>{exp.name}</Typography>
                <Typography sx={{
                  fontSize: { xs: "15px", sm: "18px", md: "20px" },
                  fontWeight: "300",
                  color: "#b8b8b8"
                }}><em>{exp.company} | {exp.duration}</em></Typography>
                <Typography sx={{
                  fontSize: { xs: "15px", sm: "18px", md: "20px" },
                }}>{exp.desc}</Typography>
                <Stack direction={"row"} flexWrap={"wrap"} marginTop={2}>
                  {exp.tech.map((tech, index) => (
                    <Stack
                      key={index}
                      direction={"row"}
                      alignItems={"center"}
                      marginRight={2}
                      marginBottom={2}
                    >
                      <img src={`/${exp.icons[index]}`} alt={tech} width={30} height={30} />

                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default Experience;