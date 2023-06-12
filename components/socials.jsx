import { Stack, Link } from "@mui/material";
import { BsGithub, BsBehance, BsInstagram, BsDribbble } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { keyframes } from "@emotion/react";

const Socials = () => {
    const slideUpAnimation = keyframes`
    from {
        transform: translateY(110%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;
    return (
        <>
            <Stack gap={3} flexDirection={"row"} width={300} justifyContent={"space-between"} sx={{ animation: `${slideUpAnimation} 1.4s ease-in-out` }}>

                <Link href="https://github.com/AnanyaM007"
                    target="_blank"
                    underline="none"
                    sx={{
                        borderRadius: "50%",
                        padding: "10px 10px 3.5px 10px",
                        transition: "all 0.7s ease",
                        fontSize: "30px",
                        color: "#171212",
                        '&:hover': {
                            color: "#f2f2f2",
                            transitionDuration: "0.8s",
                            boxShadow: "inset 0 30px 0 0 #171212, inset 0 -30px 0 0 #171212"
                        }
                    }}>
                    <BsGithub />
                </Link>

                <Link href="https://www.behance.net/ananyam007"
                    target="_blank"
                    underline="none"
                    sx={{
                        borderRadius: "50%",
                        padding: "10px 10px 4px 10px",
                        transition: "all 0.7s ease",
                        fontSize: "30px",
                        color: "#171212",
                        '&:hover': {
                            color: "#f2f2f2",
                            transitionDuration: "0.8s",
                            boxShadow: "inset 0 30px 0 0 #053eff, inset 0 -30px 0 0 #171212"
                        }
                    }}>
                    <BsBehance />
                </Link>

                <Link href="https://www.instagram.com/ananyam._/"
                    target="_blank"
                    underline="none"
                    sx={{
                        borderRadius: "50%",
                        padding: "10px 10px 4px 10px",
                        transition: "all 0.7s ease",
                        fontSize: "30px",
                        color: "#171212",
                        '&:hover': {
                            color: "#f2f2f2",
                            transitionDuration: "0.8s",
                            boxShadow: "inset 0 30px 0 0 #d62976, inset 0 -30px 0 0 #e6683c"
                        }
                    }}>
                    <BsInstagram />
                </Link>

                <Link href="https://www.linkedin.com/in/ananyamohapatra007/" target="_blank" underline="none"
                    sx={{
                        borderRadius: "50%",
                        padding: "10px 10px 4px 10px",
                        transition: "all 0.7s ease",
                        fontSize: "30px",
                        color: "#171212",
                        '&:hover': {
                            color: "#f2f2f2",
                            transitionDuration: "0.8s",
                            boxShadow: "inset 0 30px 0 0 #0A66C2, inset 0 -30px 0 0 #0A66C2"
                        }
                    }}>
                    <FaLinkedinIn />
                </Link>

                <Link href="https://dribbble.com/ananyam007" target="_blank" underline="none"
                    sx={{
                        borderRadius: "50%",
                        padding: "10px 10px 4px 10px",
                        transition: "all 0.7s ease",
                        fontSize: "30px",
                        color: "#171212",
                        '&:hover': {
                            color: "#f2f2f2",
                            transitionDuration: "0.8s",
                            boxShadow: "inset 0 30px 0 0 #ea4c89, inset 0 -30px 0 0 #ea4c89"
                        }
                    }}>
                    <BsDribbble />
                </Link>

            </Stack>
        </>
    );
}

export default Socials;