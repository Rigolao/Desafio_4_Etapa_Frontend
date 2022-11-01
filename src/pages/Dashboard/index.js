import MenuLateral from "../../componentes/MenuLateral";
import CardAvatar from "../../componentes/CardAvatar";
import React from "react";
import CardProject from "../../componentes/CardProject";
import {Outlet} from "react-router-dom";

const Dashboard = (props) => {
    return (
        <>
            <MenuLateral/>
            <Outlet/>
        </>
    );
};

export default Dashboard;
