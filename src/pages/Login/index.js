import React, {useState} from "react";
import {Alert, Box, Button, InputAdornment, Link, Stack, styled, TextField, Typography, useTheme,} from "@mui/material";
import Center from "../../componentes/Center";
import theme from "../../theme";
import useViewport from "../../hooks/useViewport.js";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import * as PropTypes from "prop-types";
import imagem from "../../imagens/planeta.svg";
import {useNavigate} from "react-router-dom";
import {Formik, useFormik} from "formik";
import * as yup from 'yup';

function CloseIcon(props) {
    return null;
}

CloseIcon.propTypes = {fontSize: PropTypes.string};


const validationSchema = yup.object({
    cpf: yup.string().required("Esse campo é obrigatório").min(14, "CPF inválido"),
    senha: yup.string().required("Esse campo é obrigatório")
})

function Login(props) {
    const [showPassword, setShowPassword] = useState(false);

    const handleClick = (e) => {
        setShowPassword(!showPassword);
    };

    const theme = useTheme();

    const Navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            cpf: '',
            senha: ''
        },
        onSubmit: (values) => (
            console.log(JSON.stringify(values))
        ),
        validationSchema: validationSchema
    })


    return (
        <GridLayout>
            {useViewport().width > 900 ? (
                <Center>
                    <LeftColor>
                        <Center>
                            <img src={imagem} style={{width: "50%", height: "auto"}}/>
                        </Center>
                    </LeftColor>
                </Center>
            ) : (
                <Box/>
            )}
            <Center>
                <Box
                    sx={{
                        width: "368px",
                        height: "472px",
                        margin: "30px",
                    }}
                >
                    <Formik>
                        {(errors) => (

                            <form
                                onSubmit={formik.handleSubmit}
                            >
                                <Stack spacing={2}>
                                    <h1
                                        style={{
                                            fontSize: "34px",
                                            fontWeight: "bold",
                                            textAlign: "left",
                                        }}
                                    >
                                        Faça seu login
                                    </h1>
                                    <TextField
                                        label="CPF"
                                        id="cpf"
                                        name="cpf"
                                        variant="filled"
                                        value={formik.values.cpf}
                                        onChange={formik.handleChange}
                                        inputProps={{maxLength: 14}}
                                        error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                                        helperText={formik.touched.cpf && formik.errors.cpf}

                                    />
                                    {errors.cpf && <Alert severity='error'/>}
                                    <TextField
                                        type={showPassword ? "text" : "password"}
                                        label="Senha"
                                        id="senha"
                                        name="senha"
                                        variant="filled"
                                        value={formik.values.senha}
                                        onChange={formik.handleChange}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end" onClick={handleClick}>
                                                    {showPassword ? (
                                                        <VisibilityOffOutlinedIcon/>
                                                    ) : (
                                                        <RemoveRedEyeOutlinedIcon/>
                                                    )}
                                                </InputAdornment>
                                            ),
                                        }}
                                        error={formik.touched.senha && Boolean(formik.errors.senha)}
                                        helperText={formik.touched.senha && formik.errors.senha}
                                    />
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Button
                                            sx={{
                                                backgroundColor: "#6C63FF",
                                                widht: "100px",
                                                height: "55px",
                                            }}
                                            variant="contained"
                                            type="submit"
                                            value="Submit"
                                        >
                                            Entrar
                                        </Button>
                                        <Link variant="ancora">Esqueci minha senha</Link>
                                    </Stack>
                                    <Stack spacing={6}>
                                        <Typography style={{fontSize: "12px", textAlign: "left"}}>
                                            <strong>Não tem uma conta? </strong>
                                            <Link
                                                variant="ancora"
                                                onClick={() => {
                                                    Navigate("/cadastro");
                                                }}
                                            >
                                                Cadastra-se
                                                <ArrowRightAltOutlinedIcon/>
                                            </Link>
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </form>
                        )}
                    </Formik>
                </Box>
            </Center>
        </GridLayout>
    );
}

export const GridLayout = styled(Box)({
    display: "grid",
    [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "1.2fr 0.8fr",
    },
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
    },
    gridTemplateRows: "1fr",
    width: "100%",
    height: "100vh",
    padding: "1rem",
    gap: "1rem",
});

export const LeftColor = styled(Box)({
    backgroundColor: "#6C63FF",
    height: "100%",
    width: "100%",
    borderRadius: "20px",
    color: "white",
    fontSize: "48px",
});

export default Login;
