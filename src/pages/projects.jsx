import { Stack, Typography } from "@mui/material";
import NavbarD from './../../components/navbarD';
import CodeIcon from "@mui/icons-material/Code";
import LinkIcon from '@mui/icons-material/Link';

const Projects = () => {

  const projects = [
    {
      name: "TimeTrek",
      desc: "Time Trek is a cutting-edge time management application that combines the functionality of a countdown timer and stopwatch with a clean and intuitive user interface.",
      tech: "Next.js, Typescript, Chakra-UI",
    },
    {
      name: "SynapC",
      desc: "time",
      tech: "Next.js, Javascript, Material-UI, MongoDB, Node.js",
    },
    {
      name: "Github-Info",
      desc: "The web app utilizes the GitHub API to fetch real-time data, offering up-to-date information on user profiles and repository details.",
      tech: "React.js, Javascript, Material-UI",
    },
    {
      name: "Portfolio",
      desc: "A place to explore my comprehensive collection of my skills, notable works and professional experiences along with a section to drop a message",
      tech: "Next.js, Javascript, Material-UI, Firebase",
    },
    {
      name: "Pokemon",
      desc: "Pokémon website featuring a sleek UI design, reveal animations, and a range of fun Pokémon games. Explore a complete Pokédex with data on all Pokémon species. ",
      tech: "HTML5, CSS3, Javascript, Firebase",
    },
    {
      name: "Crime Closet",
      desc: "An e-commerce website with a user-friendly Login/Sign-up page and Oauth Google sign-in. The platform implements the Razorpay API for seamless payments.",
      tech: "HTML5, CSS3, Javascript, Firebase, Google Ouath",
    },
    {
      name: "HeartBeats",
      desc: "A health care landing page created with animations and clean UI. The page provides information about health care services and allow users to inquire about services and read articles.",
      tech: "React.js, Javascript, Tailwind CSS",
    },
    {
      name: "International Space Station",
      desc: "time",
      tech: "HTML5, CSS3, Javascript",
    },
  ];

  return (
    <>
      <Stack sx={{
        minHeight: "100vh",
        background: "#F3AF00",
      }}>
        <NavbarD />
        <Typography sx={{
          fontSize: { xs: "33px", sm: "40px", md: "47px" },
          marginBottom: "30px",
          fontWeight: "700",
          marginLeft: "102px"
        }}>Projects</Typography>
        <Stack
          // pl={{ xs: 3, md: 10 }}
          justifyContent={"center"}
          alignItems={"center"}
          // pr={{ xs: 3, md: 10 }}
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
              ml={0}
              flexWrap={"wrap"}
              key={index}
              sx={{
                border: "3px solid #3d3d3d",
                width: "360px",
                height: "250px",
                borderRadius: "5px",
                color: "#3d3d3d"
              }}
            >
              <Stack direction={"row"} justifyContent={"space-between"} pr={1}>
                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "30px" },
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  {project.name}
                </Typography>
                <Stack gap={2} pt={1.3} direction={"row"}>
                  <CodeIcon />
                  <LinkIcon />
                </Stack>
              </Stack>
              <Typography
                sx={{
                  fontSize: { xs: "15px", md: "18px" },
                  fontWeight: "400",
                  marginBottom: "10px",
                }}
              >
                {project.desc}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "15px", md: "20px" },
                  fontWeight: "400",
                  marginBottom: "10px",
                }}
              >
                {project.tech}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
}

export default Projects;
