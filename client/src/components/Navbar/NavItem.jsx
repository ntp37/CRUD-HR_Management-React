import { createElement } from "react";
import { NavLink } from "react-router-dom";
import {Divider,List,ListItem,ListItemButton,ListItemText,ListItemIcon,} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {HomeOutlined,Speed,PersonOutlineOutlined,MailOutlined,
        ContactPageOutlined,HelpOutlineOutlined} from "@mui/icons-material";

const navItems = ["Home","Dashboard","Employee Management","Inbox","Contact","Help & Feedback",];
const linkItems = ["/","/dashboard","/employee","/inbox","/contact","/help"];
const iconItems = [HomeOutlined,Speed,PersonOutlineOutlined,MailOutlined,ContactPageOutlined,HelpOutlineOutlined];

export default function NavItem() {
  const navTheme = createTheme({
    typography: {
      fontFamily: ["Open Sans", "sans-serif"].join(","),
      fontWeightRegular: 500,
    },
  });

  return (
    <>
      <Divider />
      <List component="nav" id="navList">
        {navItems.map((item, itemIndex) => (
          <NavLink to={linkItems[itemIndex]} key={item}>
            <ListItem disablePadding sx={{backgroundColor: "inherit"}}>
              <ListItemButton sx={{backgroundColor: "inherit"}}>
                <ListItemIcon>
                  {createElement(iconItems[itemIndex], {
                    sx: { fontSize: 32, color: "#EFF6FF" },
                  })}
                </ListItemIcon>
                <ThemeProvider theme={navTheme}>
                  <ListItemText primary={item} sx={{ color: "#EFF6FF" }} />
                </ThemeProvider>
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </>
  );
}
