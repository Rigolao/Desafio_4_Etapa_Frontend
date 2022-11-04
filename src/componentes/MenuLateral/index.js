import React from "react";
import "./MenuLateral.css";
import {
    Avatar,
    Box,
    Divider,
    Drawer,
    Grid,
    Icon,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import Imagem from "../../imagens/cientista.svg";
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import AvatarIcon from "@mui/icons-material/AccountCircle";
import {Link, useLocation} from 'react-router-dom';
import {Link as LinkMUI} from '@mui/material';


export default (props) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm")); //Se eu entrar na condição menor que x tamnho retorna true

    const location = useLocation().pathname;

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
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Avatar
                            component={Link} to="/perfil"
                            sx={{height: theme.spacing(12), width: theme.spacing(12)}}
                            src={Imagem}
                        />
                    </Box>

                    <Divider/>

                    <Box flex={1}>
                        <List component="nav">

                            <LinkMUI component={Link} to="inicial" variant={"nav-link"} >
                                <ListItemButton selected={location === "/perfil/inicial"}>
                                    <ListItemIcon>
                                        <HomeIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Página Inicial"/>
                                </ListItemButton>
                            </LinkMUI>

                            <LinkMUI component={Link} to="projetos" variant={"nav-link"}>
                                <ListItemButton selected={location === "/perfil/projetos"}>
                                    <ListItemIcon>
                                        <FolderIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Projetos"/>
                                </ListItemButton>
                            </LinkMUI>

                            <LinkMUI component={Link} to="perfil" variant={"nav-link"}>
                                <ListItemButton selected={location === "/perfil"}>
                                    <ListItemIcon>
                                        <AvatarIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Perfil"/>
                                </ListItemButton>
                            </LinkMUI>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box marginLeft={smDown ? 0: theme.spacing(28)}>
                {props.children}
            </Box>
        </>
    );
};
