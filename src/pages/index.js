import Socials from "./../../components/socials";
import HeroContent from "../../components/HeroContent";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack sx={{ background: "#F3AF00", minHeight: "100vh" }}>
      <HeroContent />
      {/* <Socials />  */}

    </Stack>
  )
}
