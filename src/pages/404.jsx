import { Button, Link, Stack, Box } from "@mui/material";
import NavbarL from "../../components/navbarL";

const NotFoundPage = () => {
    return (
        <>
            <div style={{ backgroundColor: "#121212", minHeight: "100dvh" }}>
<NavbarL />
                <Stack alignItems={"center"}>
                    <Box component={"img"} src={"404.gif"} width={{ xs: "320px", sm: "350px", md: "420px" }} />
                    <Link href="/"><Button
                        sx={{
                            background: "#f3af00",
                            color: "#454545",
                            textTransform: "none",
                            border: "solid 1px #454545",
                            fontSize: "16px",
                            width: "150px",
                            marginTop:"30px"
                        }}
                    >Back to home</Button></Link>
                </Stack>
            </div>
        </>
    );
}

export default NotFoundPage;

