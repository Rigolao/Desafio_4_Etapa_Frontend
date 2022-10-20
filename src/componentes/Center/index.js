import React from "react";
import {Box} from "@mui/material";

function Center(props){
    return(
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%",}}>
            {props.children}
        </Box>
    );
}

export default Center;