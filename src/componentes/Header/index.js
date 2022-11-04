import React from 'react';
import {Paper, Stack, useMediaQuery} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../../theme";



const Header = (props) => {
    const smDown = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <Stack component={Paper} textAlign='start' paddingLeft='20px' marginBottom='20px' direction='row'>
            {smDown && <IconButton sx={{marginRight:'10px'}}>
                <MenuIcon/>
            </IconButton>}
            <h1>{props.titulo}</h1>
        </Stack>
    );
}

export default Header;