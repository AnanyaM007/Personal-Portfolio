import { Stack, Typography, Button, Box } from "@mui/material";
import NavbarD from './../../components/navbarD';
import { useState } from "react";
import { keyframes } from "@emotion/react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const projects = [
    {
      img: "timetrek.png",
      name: "TimeTrek",
      desc: "Time Trek is a cutting-edge time management application that combines the functionality of a countdown timer and stopwatch with a clean and intuitive user interface.",
      tech: ["next.png", "ts.png", "chakra-ui.png"],
      tech1: ["Next.js", "Typescript", "Chakra-UI"],
      github: "https://github.com/AnanyaM007/time-trek",
      link: "https://timetrek.netlify.app/",
    },
    {
      img: "synapc.png",
      name: "SynapC",
      desc: "A space where everyone feels welcome and included, explore new interests, learn new things and grow as a person.",
      tech: ["next.png", "js.png", "mui.png", "mongodb.png", "node.png"],
      tech1: ["Next.js", "Javascript", "MongoDB", "Node.js", "Material-UI"],
      github: "https://github.com/DisplayFlex-ar/SynapC",
      link: "https://synap-c.vercel.app/",
    },
    {
      img: "githubinfo.png",
      name: "Github-Info",
      desc: "The web app utilizes the GitHub API to fetch real-time data, offering up-to-date information on user profiles and repository details.",
      tech: ["react.png", "js.png", "mui.png"],
      tech1: ["Next.js", "Javascript", "Material-UI"],
      github: "https://github.com/AnanyaM007/github-info",
      link: "https://githubinformation.netlify.app/",
    },
    {
      img: "logoLight.png",
      name: "Portfolio",
      desc: "A place to explore my comprehensive collection of my skills, notable works and professional experiences along with a section to drop a message",
      tech: ["next.png", "js.png", "mui.png", "firebase.png"],
      tech1: ["Next.js", "Javascript", "Firebase", "Material-UI"],
      github: "https://github.com/AnanyaM007/personal-portfolio",
      link: "https://ananyamohapatra.netlify.app/",
    },
    {
      img: "pokemon.png",
      name: "Pokemon",
      desc: "Pokémon website featuring a sleek UI design, reveal animations, and a range of fun Pokémon games. Explore a complete Pokédex with data on all Pokémon species. ",
      tech: ["html.png", "css.png", "js.png", "firebase.png"],
      tech1: ["HTML5", "CSS3", "Javascript", "Firebase"],
      github: "https://github.com/Princerey/Pokemon",
      link: "https://pokemon-ar.netlify.app/",
    },
    {
      img: "crime.webp",
      name: "Crime Closet",
      desc: "An e-commerce website with a user-friendly Login/Sign-up page and Oauth Google sign-in. The platform implements the Razorpay API for seamless payments.",
      tech: ["html.png", "css.png", "js.png", "firebase.png"],
      tech1: ["HTML5", "CSS3", "Javascript", "Firebase"],
      github: "https://github.com/DisplayFlex-ar/CrimeCloset",
      link: "https://crimecloset.netlify.app/",
    },
    {
      img: "heartbeats.png",
      name: "HeartBeats",
      desc: "A health care landing page created with animations and clean UI. The page provides information about health care services and allow users to inquire about services and read articles.",
      tech: ["react.png", "js.png", "tailwind.png"],
      tech1: ["React.js", "Javascript", "Tailwind"],
      github: "https://github.com/AnanyaM007/HeartBeats",
      link: "https://hearheartbeats.netlify.app",
    },
    {
      img: "iss.png",
      name: "International Space Station",
      desc: "Utilizes the International Space Station API to fetch and update the latitude and longitude coordinates of the ISS every second.",
      tech: ["html.png", "css.png", "js.png"],
      tech1: ["HTML5", "CSS3", "Javascript"],
      github: "https://github.com/AnanyaM007/Space-Station",
      link: "https://intspacestation.netlify.app/",
    },
  ];

  const handleCardHover = (index) => {
    setHoveredIndex(index);
  };

  const handleCardLeave = () => {
    setHoveredIndex(-1);
  };

  const slideUpAnimation = keyframes`
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  `;

  return (
    <>
      <Stack
        sx={{
          minHeight: "100dvh",
          background: "#F3AF00",
        }}
      >
        <NavbarD />
        <Typography
          sx={{
            fontSize: { xs: "33px", sm: "40px", md: "50px" },
            marginBottom: "50px",
            fontWeight: "700",
            textAlign: "center"
          }}
        >
          Projects
        </Typography>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          direction={"row"}
          gap={7}
          flexWrap={"wrap"}
          pb={10}
          ml={2}
          mr={2}
        >
          {projects.map((project, index) => (
            <Stack
              pt={5}
              pl={3}
              pr={3}
              pb={5}
              ml={0}
              key={index}
              sx={{
                width: "360px",
                minHeight: "200px",
                borderRadius: "5px",
                background: "#3d3d3d",
                overflow: "hidden",
                position: "relative",
                justifyContent: "space-between",
              }}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
            >
              <Stack flexDirection={"row"} alignItems={"center"} gap={3}>
                <Box
                  component="img"
                  src={project.img}
                  width={"100px"}
                  sx={{
                    display: hoveredIndex === index ? "none" : "block",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "30px" },
                    fontWeight: "700",
                    marginBottom: "10px",
                    display: hoveredIndex === index ? "none" : "block",
                    color: "#f2f2f2",
                  }}
                >
                  {project.name}
                </Typography>
              </Stack>
              {hoveredIndex === index && (
                <Stack
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0, 0, 0, 0.8)",
                    animation: `${slideUpAnimation} 0.4s ease-in-out forwards`,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", md: "18px" },
                      fontWeight: "400",
                      color: "#FFF",
                      padding: "10px",
                      textAlign: "center",
                      opacity: 1,
                    }}
                  >
                    {project.desc}
                  </Typography>
                  <Stack flexDirection={"row"} gap={5} justifyContent={"space-evenly"} width={"100%"} marginTop={5}>
                    <Button
                      variant="contained"
                      href={project.github}
                      target="_blank"
                      sx={{
                        background: "#f3af00",
                        textTransform: "none",
                        color: "#3d3d3d",
                        boxShadow: "none",
                        cursor: "pointer",
                        width: "100px",
                        '&:hover': {
                          background: "#f2f2f2",
                          boxShadow: "none",
                        }
                      }}
                    >
                      Code
                    </Button>
                    <Button
                      variant="contained"
                      href={project.link}
                      target="_blank"
                      sx={{
                        background: "#f3af00",
                        textTransform: "none",
                        color: "#3d3d3d",
                        boxShadow: "none",
                        cursor: "pointer",
                        width: "100px",
                        '&:hover': {
                          background: "#f2f2f2",
                          boxShadow: "none",
                        }
                      }}
                    >
                      Link
                    </Button>
                  </Stack>
                </Stack>
              )}
              <Stack

                direction="row"
                alignItems="center"
                gap={2}
                flexWrap={"wrap"}
                marginTop={2}
              >
                {/* {project.tech.map((techImg, techIndex) => (

                  <Box
                    key={techIndex}
                    component="img"
                    src={techImg}
                    width={"40px"}
                    display={hoveredIndex === index ? "none" : "block"}
                    marginBottom="10px"
                  />
                ))} */}

                {project.tech1.map((techImg, techIndex) => (

                  <Typography
                    key={techIndex}
                    sx={{
                      background: "radial-gradient(circle at 10% 20%, rgb(254, 255, 165) 0%, rgb(255, 232, 182) 90%)",
                      borderRadius: "60px",
                      padding: "5px 20px",
                      fontSize: "17px",
                      display: hoveredIndex === index ? "none" : "block",
                    }}>
                    {techImg}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default Projects;