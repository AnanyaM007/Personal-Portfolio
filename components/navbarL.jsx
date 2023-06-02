import { Stack } from "@mui/material";
import Menu from "./menu";
import Image from "next/image";
import pic from "./../public/logoLight.png";

const NavbarL = () => {
    return (
        <>
            <Stack flexDirection={"row"} justifyContent={"space-between"} padding={"40px 50px"}>
                <Image src={pic} alt="IMAGE" height={50} />
                <Menu />
            </Stack>
        </>
    );
}

export default NavbarL;