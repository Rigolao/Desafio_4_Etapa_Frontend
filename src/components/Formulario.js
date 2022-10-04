import React, {useState} from "react";
import {Box, InputAdornment, Link, Stack, styled, Typography, useTheme} from "@mui/material";
import {Button, TextField} from "@mui/material";
import Center from "./Center";
import theme from "../theme";
import useViewport from "../hooks/useViewport";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

function Formulario() {

    const [showPassword, setShowPassword] = useState(false);

    const handleClick = e => {
        setShowPassword(!showPassword);
    }

    const theme = useTheme();

    return (
        <GridLayout>
            { useViewport().width > 900
                ? (
                    <Center>
                        <LeftColor/>
                    </Center>
                )
                : <Box/>
            }
            <Center>
                <Box sx={{
                    width: "368px",
                    height: "472px",
                    margin: "30px"
                }}>
                    <form method="post">
                        <Stack spacing={2}>
                            <h1 style={{fontSize: "34px", fontWeight: "bold", textAlign: "left"}}>Faça seu login</h1>
                            <TextField  label="CPF" required variant="filled"/>
                            <TextField type={showPassword ? 'text' : 'password'}
                                       label="Senha" required variant="filled"
                                       InputProps={{
                                           endAdornment: (
                                               <InputAdornment position="end" onClick={handleClick}>
                                                   {showPassword
                                                       ? <VisibilityOffOutlinedIcon/>
                                                       : <RemoveRedEyeOutlinedIcon/>
                                                   }
                                               </InputAdornment>
                                           ),
                                       }}/>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                <Button sx={{backgroundColor: "#6C63FF", widht: "100px", height: "55px"}}
                                        variant="contained">Entrar</Button>
                                <Link variant="ancora">Esqueci minha senha</Link>
                            </Stack>
                            <Stack spacing={6}>
                                <Typography style={{fontSize: "12px", textAlign: "left"}}><strong>Não tem uma
                                    conta? </strong><Link variant="ancora">Cadastra-se <ArrowRightAltOutlinedIcon/></Link></Typography>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
            </Center>
        </GridLayout>
    );
}

export const GridLayout = styled(Box)({
    display: "grid",
    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: "1fr",
    },
    gridTemplateRows: "1fr",
    width: "100%",
    height: "100vh",
    padding: "1rem"
})

export const LeftColor = styled(Box)({
    backgroundColor: "#6C63FF",
    height: "100%",
    width: "100%",
    borderRadius: "20px",
})

export default Formulario;