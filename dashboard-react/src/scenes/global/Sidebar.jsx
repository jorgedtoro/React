
import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
// import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";


const SidebarComp = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
        sx={{
            "& .pro-sidebar-inner": {
                background:`${colors.primary[400]} !important`
            },
            "& .pro-icon-wrapper": {
                background:"transparent !important"
            },
            "& .pro-inner-item":{
                padding: "5px 35px 5px 20px !important"
            },
            
            "& .pro-inner-item:hover":{
                color: "#6870fa !important"
            },
            "& .pro-menu-item.active":{
                color: "#6870fa !important"
            },

        }}>
            <Sidebar>
                <Menu>
                    {/* LOGO AND MENU ICON */}
                    
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                        margin: "10px 0 20px 0",
                        color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                        >
                            <Typography variant="h3" color={colors.grey[100]}>
                            ADMINIS
                            </Typography>
                            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                            <MenuOutlinedIcon />
                            </IconButton>
                        </Box>
                        )}
                    </MenuItem>
                   {!isCollapsed && (
                    <Box mb='25px'>
                        <Box display="flex" justifyContent="center" alignItems="center">
                        <img
                            alt="profile-user"
                            width="100px"
                            height="100px"
                            src={`../../assets/user.png`}
                            style={{ cursor: "pointer", borderRadius: "50%" }}
                        />
                        </Box>
                        <Box textAlign="center">
                            <Typography
                                variant="h2"
                                color={colors.grey[100]}
                                fontWeight="bold"
                                sx={{ m: "10px 0 0 0" }}
                            >
                                Div 21. Electrónica
                            </Typography>
                            <Typography variant="h5" color={colors.greenAccent[500]}>
                                VP Fancy Admin
                            </Typography>
                        </Box>
                    </Box>
                   )}

                </Menu>

                
            </Sidebar>
        </Box>
    )
}


export default SidebarComp;