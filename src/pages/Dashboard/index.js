import MenuLateral from "../../componentes/MenuLateral";
import React from "react";
import {Outlet} from "react-router-dom";

const Dashboard = (props) => {

    return (
        <>
           <MenuLateral>
               <Outlet/>
           </MenuLateral>
        </>
    );
};

export default Dashboard;
