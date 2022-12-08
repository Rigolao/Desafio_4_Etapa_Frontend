import React, {useEffect, useState} from "react";
import "./MenuLateral.css";
import {
    Avatar,
    Box,
    Divider,
    Drawer,
    Link as LinkMUI,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import AvatarIcon from "@mui/icons-material/AccountCircle";
import PublicIcon from '@mui/icons-material/Public';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {logout} from "../Services/authService";
import axios from "axios";


export default (props) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm")); //Se eu entrar na condição menor que x tamnho retorna true

    const location = useLocation().pathname;

    const [cientista, setCientista] = useState([])

    useEffect(() => {
        const doFetch = async () => {
            axios
              .get("http://localhost:8081/cientistas/retornaPerfil/" + sessionStorage.getItem("cpf"), {
                  withCredentials: true,
                  headers: {
                      Authorization: sessionStorage.getItem('user')
                  }
              })
              .then((response) => setCientista(response.data))
              .catch((error) => console.log(error));
        }
        doFetch();
    }, []);

    return (
        <>
            <Drawer
                open={props.open}
                variant={smDown ? "temporary" : "permanent"}
                onClose={props.close}
            >
                <Box
                    width={theme.spacing(28)}
                    height="100%"
                    display="flex"
                    flexDirection="column"
                >
                    <Box
                        width="100%"
                        height={theme.spacing(20)}
                        display="flex"
                        flexDirection='column'
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Avatar
                            component={Link} to="/perfil"
                            sx={{height: theme.spacing(12), width: theme.spacing(12), marginTop: theme.spacing(2)}}
                        ></Avatar>
                        <h4>{cientista.nome}</h4>
                    </Box>

                    <Divider/>

                    <Box flex={1}>
                        <List component="nav">

                            <LinkMUI component={Link} to="perfil" variant={"nav-link"}>
                                <ListItemButton selected={location === "/dashboard/perfil"}>
                                    <ListItemIcon>
                                        <AvatarIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Perfil"/>
                                </ListItemButton>
                            </LinkMUI>

                            <LinkMUI component={Link} to="meusProjetos" variant={"nav-link"}>
                                <ListItemButton selected={location === "/dashboard/meusProjetos"}>
                                    <ListItemIcon>
                                        <FolderIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Meus Projetos"/>
                                </ListItemButton>
                            </LinkMUI>

                            <Divider/>

                            <LinkMUI component={Link} to="todosProjetos" variant={"nav-link"}>
                                <ListItemButton selected={location === "/dashboard/todosProjetos"}>
                                    <ListItemIcon>
                                        <PublicIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Todos Projetos"/>
                                </ListItemButton>
                            </LinkMUI>
                            <LinkMUI component={Link} to="todosCientista" variant={"nav-link"} >
                                <ListItemButton selected={location === "/dashboard/todosCientista"}>
                                    <ListItemIcon>
                                        <PersonSearchIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Todos Cientista"/>
                                </ListItemButton>
                            </LinkMUI>
                            <LinkMUI component={Link} to="/entrar" variant={"nav-link"}>
                                <ListItemButton onClick={logout} >
                                    <ListItemIcon >
                                        <LogoutIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Sair"/>
                                </ListItemButton>
                            </LinkMUI>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height='100vh' marginLeft={smDown ? 0: theme.spacing(28)}>
                {props.children}
            </Box>
        </>
    );
};
