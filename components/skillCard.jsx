import { Stack, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/system";

const BackBox = styled(Stack)(({ theme }) => ({
    backfaceVisibility: "hidden",
    transformStyle: "preserve-3d",
    transition: "transform 700ms",
    height: "380px",
    width: "275px",
    borderRadius: "5px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    overflow: "hidden",    
    paddingTop:"20px",
    "&::before": {
        position: "absolute",
        content: '""',
        display: "block",
        width: "250px",
        height: "500px",
        background: "#f3af00",
        animation: `${rotation_481} 7000ms infinite linear`,
    },
}));

const rotation_481 = keyframes`
0% {
    transform: rotateZ(0deg);
  }

  0% {
    transform: rotateZ(360deg);
  }
}

`;
const SkillCard = ({ title, items }) => {
    return (
        <BackBox>
            <Stack gap={0.8} sx={{
                marginBottom: "20px",
                backgroundColor: "#485461",
                backgroundImage: "linear-gradient(315deg, #485461 0%, #28313b 74%)",
                display: "flex",
                flexDirection: "column",
                minWidth: "230px",
                borderRadius: "5px",
                // justifyContent: "space-around",
                padding: "40px 20px 20px 20px",
                alignItems: "center",
                zIndex: 2,
                minHeight: "335px",
                color:"#f2f2f2",
                '&:hover':{
                    transform: "scale(1.1)",
                    transition: "transform 1s ease-in-out",
                    cursor: "pointer",
                }
            }}>
                <Typography variant="h5" sx={{ fontSize: "25px", fontWeight: "600" }}>
                    {title}
                </Typography>
                {items.map((item, index) => (
                    <Typography key={index} sx={{ fontSize: "20px" }}>
                        {item}
                    </Typography>
                ))}
            </Stack>
        </BackBox>
    );
};

const skillCard = () => {
    const languages = [
        "Javascript",
        "Python",
        "C++",
        "C",
        "HTML",
        "CSS",
    ];

    const frameworks = [
        "React.js",
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "Bootstrap",
        "Material-UI",
        "Chakra-UI",
        "Express.js",
    ];

    const developerTools = [
        "Git",
        "Github",
        "Docker",
        "Figma",
        "VS Code",
        "Postman",
        "Selenium",
    ];

    const databases = [
        "MySQL",
        "MongoDB",
        "Firebase",
        "PostgreSQL",
        "Prisma",
        "Oracle Database",
    ];

    return (
        <Stack>
            <Stack
                gap={4}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
            >
                <SkillCard title="Languages" items={languages} />
                <SkillCard title="Frameworks" items={frameworks} />
                <SkillCard title="Developer Tools" items={developerTools} />
                <SkillCard title="Databases" items={databases} />
            </Stack>
        </Stack>
    );
};

export default skillCard;
