import { Stack } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Menu = () => {
    return (
        <>
            <Stack sx={{ background: "#3d3d3d", color: "#B9C1C4", width: "45px", height: "45px", borderRadius: "50%", justifyContent: "center", alignItems: "center" }}>
                <MenuIcon />
            </Stack>
        </>
    );
}

export default Menu;