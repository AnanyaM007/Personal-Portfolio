import React, { useState } from "react";
import { Link, IconButton, Stack } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { keyframes } from "@emotion/react";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(null);
    const [changeAnim, setChangeAnim] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
        setChangeAnim(true);
    };

    const slideDownAnimation = keyframes`
    from {
      transform: translateY(-130%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `;

    const slideUpAnimation = keyframes`
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-130%);
      opacity: 0;
    }
  `;

    const slideRightAnimation = keyframes`
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

    const menuItems = [
        {
            icon: <AiFillHome />,
            href: "/",
        },
        {
            icon: <BsFillPersonFill />,
            href: "/about",
        },
        {
            icon: <MdWork />,
            href: "/experience",
        },
        {
            icon: <FaLaptopCode />,
            href: "/projects",
        },
        {
            icon: <IoCall />,
            href: "/contact",
        },
    ];

    return (
        <>
            <IconButton
                sx={{
                    zIndex: 1,
                    background: "#3d3d3d",
                    color: "#B9C1C4",
                    borderRadius: "50%",
                    width: { xs: "40px", sm: "60px" },
                    height: { xs: "40px", sm: "60px" },
                    animation: `${slideRightAnimation} 1s ease-in-out`,
                    "&:hover": {
                        background: "#f3af00",
                        color: "#3d3d3d",
                        border: "solid 2px #3d3d3d"
                    },
                }}
                onClick={handleMenuClick}
            >
                {isOpen ? <CloseIcon sx={{ fontSize: { xs: "20px", sm: "28px" },}} /> : <MenuIcon sx={{ fontSize: { xs: "20px", sm: "28px" },}} />}
            </IconButton>

            {isOpen && (
                <Stack
                    gap={4}
                    sx={{
                        position: "absolute",
                        top: 120,
                        right: "40px",
                        padding: "10px",
                        zIndex: 2
                    }}
                >
                    {menuItems.map((menuItem, index) => (
                        <Link
                            key={menuItem.href}
                            href={menuItem.href}
                            underline="none"
                            width= {{ xs: "40px", sm: "60px" }}
                            height= {{ xs: "40px", sm: "60px" }}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            sx={{
                                borderRadius: "50%",
                                boxShadow:
                                    "inset 0 50px 0 0 #454545, inset 0 -30px 0 0 #454545",
                                    fontSize: { xs: "20px", sm: "28px" },
                                color: "#f2f2f2",
                                animation: `${slideDownAnimation} 0.5s ease-in-out ${index * 0.2
                                    }s forwards`,
                                opacity: 0,
                                "&:hover": {
                                    color: "#454545",
                                    transitionDuration: "0.8s",
                                    boxShadow:
                                        "inset 0 50px 0 0 #f3af00, inset 0 -30px 0 0 #f3af00",
                                },
                            }}
                        >
                            {menuItem.icon}
                        </Link>
                    ))}
                </Stack>
            )}
            {!isOpen && (
                <Stack
                    gap={4}
                    sx={{
                        position: "absolute",
                        top: 120,
                        right: "40px",
                        padding: "10px",
                        zIndex: 2,
                    }}
                >
                    {menuItems.map((menuItem, index) => (
                        <Link
                            key={menuItem.href}
                            href={menuItem.href}
                            underline="none"
                            width= {{ xs: "40px", sm: "60px" }}
                            height= {{ xs: "40px", sm: "60px" }}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            sx={{
                                borderRadius: "50%",
                                boxShadow:
                                    "inset 0 50px 0 0 #454545, inset 0 -30px 0 0 #454545",
                                fontSize: { xs: "20px", sm: "28px" },
                                color: "#f2f2f2",
                                animation: changeAnim ? `${slideUpAnimation} 0.4s ease-in-out ${(menuItems.length - index - 1) * 0.2}s backwards` : "none",
                                opacity: 0,
                                "&:hover": {
                                    color: "#454545",
                                    transitionDuration: "0.8s",
                                    boxShadow:
                                        "inset 0 50px 0 0 #f3af00, inset 0 -30px 0 0 #f3af00",
                                },
                            }}
                        >
                            {menuItem.icon}
                        </Link>
                    ))}
                </Stack>
            )}
        </>
    );
};

export default Menu;
