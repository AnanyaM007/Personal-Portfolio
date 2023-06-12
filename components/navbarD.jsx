import { Stack, Link } from "@mui/material";
import Menu from "./menu";
import Image from "next/image";
import pic from "./../public/logoDark.png";
import { keyframes } from "@emotion/react";

const NavbarD = () => {
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
    return (
        <>
            <Stack flexDirection={"row"} justifyContent={"space-between"} padding={"40px 50px"}>
                <Link sx={{  animation: `${slideInAnimation} 1s ease-in-out` }} href="/"><Image src={pic} alt="IMAGE" height={50} /></Link>
                <Menu />
            </Stack>
        </>
    );
}

export default NavbarD;