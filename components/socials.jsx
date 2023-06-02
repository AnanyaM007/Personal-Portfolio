import { Stack, Link } from "@mui/material";
import Image from "next/image"; 
import Github from "./../public/github.png";
import Behance from "./../public/behance.png";
import Instagram from "./../public/insta.png";
import Dribbble from "./../public/dribbble.png";
import LinkedIn from "./../public/linkedin.png";

const Socials = () => {
    return (
        <>
            <Stack flexDirection={"row"} width={300} justifyContent={"space-between"}>

                <Link href="https://github.com/AnanyaM007" target="_blank" underline="none">
                    <Image src={Github} alt="Github" height={30} />
                </Link>

                <Link href="https://www.behance.net/ananyam007" target="_blank" underline="none">
                    <Image src={Behance} alt="Behance" height={30} />
                </Link>

                <Link href="https://www.instagram.com/ananyam._/" target="_blank" underline="none">
                    <Image src={Instagram} alt="Instagram" height={30} />
                </Link>

                <Link href="https://www.linkedin.com/in/ananyamohapatra007/" target="_blank" underline="none">
                    <Image src={LinkedIn} alt="LinkedIn" height={30} />
                </Link>

                <Link href="https://dribbble.com/ananyam007" target="_blank" underline="none">
                    <Image src={Dribbble} alt="Dribbble" height={30} />
                </Link>

            </Stack>
        </>
    );
}

export default Socials;