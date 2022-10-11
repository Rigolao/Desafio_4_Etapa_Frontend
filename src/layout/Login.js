import React, {useState} from "react";
import {
    Alert, AlertTitle, Box, Collapse, InputAdornment, Link, Stack, styled, Typography, useTheme
} from "@mui/material";
import {Button, TextField} from "@mui/material";
import Center from "../componente/Center";
import theme from "../theme";
import useViewport from "../hooks/useViewport";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import IconButton from "@mui/material/IconButton";
import {Close} from "@mui/icons-material";
import * as PropTypes from "prop-types";

function CloseIcon(props) {
    return null;
}

CloseIcon.propTypes = {fontSize: PropTypes.string};

function Login(props) {

    const [showPassword, setShowPassword] = useState(false);

    const handleClick = e => {
        setShowPassword(!showPassword);
    }

    const theme = useTheme();

    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState(false);
    const [open, setOpen] = useState(false);
    const [tipoSeveridade, setTipoSeveridade] = useState('error');
    const [tipoMsg, setTipoMsg] = useState('')

    const handleChange = (e) => {
        setCpf(e.target.value);
    }
    const handleSenhaChange = (e) => {
        setSenha(e.target.value);
    }

    const handleSubmit = (e) => {
        if (cpf == '45176048884' && senha == '1234') {
            setErro(false);
            setOpen(true);
            setTipoMsg("Verificação aprovada!")
            setTipoSeveridade('success');
        } else {
            setErro(true);
            setOpen(true);
            setTipoMsg("CPF ou senha incorreto!")
            setTipoSeveridade('error');
        }
        e.preventDefault();
    }


    return (<GridLayout>
        {useViewport().width > 900 ? (<Center>
            <LeftColor/>
        </Center>) : <Box/>}
        <Center>
            <Box sx={{
                width: "368px", height: "472px", margin: "30px"
            }}>
                <form onSubmit={(e) => {
                    handleSubmit(e)
                }} method="post">
                    <Stack spacing={2}>
                        <h1 style={{fontSize: "34px", fontWeight: "bold", textAlign: "left"}}>Faça seu login</h1>
                        <TextField label="CPF" required variant="filled" onChange={(e) => {
                            handleChange(e)
                        }} error={erro}/>
                        <TextField type={showPassword ? 'text' : 'password'}
                                   label="Senha" required variant="filled" onChange={(e) => {
                            handleSenhaChange(e)
                        }}
                                   InputProps={{
                                       endAdornment: (<InputAdornment position="end" onClick={handleClick}>
                                           {showPassword ? <VisibilityOffOutlinedIcon/> :
                                               <RemoveRedEyeOutlinedIcon/>}
                                       </InputAdornment>),
                                   }}
                                   error={erro}

                        />
                        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                            <Button sx={{backgroundColor: "#6C63FF", widht: "100px", height: "55px"}}
                                    variant="contained" type="submit" value="Submit">Entrar</Button>
                            <Link variant="ancora">Esqueci minha senha</Link>
                        </Stack>
                        <Stack spacing={6}>
                            <Typography style={{fontSize: "12px", textAlign: "left"}}><strong>Não tem uma
                                conta? </strong><Link
                                variant="ancora">Cadastra-se <ArrowRightAltOutlinedIcon/></Link></Typography>
                        </Stack>
                        <Collapse in={open}>
                            <Alert severity={tipoSeveridade} action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <Close/>
                                </IconButton>}
                            >
                                {tipoMsg}
                            </Alert>
                        </Collapse>
                    </Stack>
                </form>
            </Box>
        </Center>
    </GridLayout>);
}

export const GridLayout = styled(Box)({
    display: "grid", [theme.breakpoints.up('md')]: {
        gridTemplateColumns: "1fr 1fr",
    }, [theme.breakpoints.down('md')]: {
        gridTemplateColumns: "1fr",
    }, gridTemplateRows: "1fr", width: "100%", height: "100vh", padding: "1rem"
})

export const LeftColor = styled(Box)({
    backgroundColor: "#6C63FF", height: "100%", width: "100%", borderRadius: "20px",
})

export default Login;