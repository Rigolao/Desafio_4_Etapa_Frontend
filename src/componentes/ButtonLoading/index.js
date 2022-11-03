import React from 'react'
import {Box, Button, CircularProgress} from "@mui/material";

const ButtonLoading = (props) => {

    return (
        <Box sx={{position: 'relative'}}>
            <Button
                variant={props.variant}
                type={props.type}
                sx={props.loading && {backgroundColor: "#ccc"}}
            >
                {props.label}
            </Button>
            {props.loading && <CircularProgress
                size={24}
                sx={{
                    color: '#6a5acd',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                }}
            />}
        </Box>
    );
}


export default ButtonLoading