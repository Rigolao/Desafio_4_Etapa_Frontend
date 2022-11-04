import MenuLateral from "../../componentes/MenuLateral";
import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import {useMediaQuery} from "@mui/material";
import theme from "../../theme";

const Dashboard = (props) => {
    const [open, setOpen] = useState(false)
    const smDown = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <>
           <MenuLateral open={open} onClose={!open}>
               {smDown && <IconButton onClick={() => setOpen(true)}>
                   <MenuIcon/>
               </IconButton>}
               <Outlet/>
           </MenuLateral>
        </>
    );
};

export default Dashboard;
