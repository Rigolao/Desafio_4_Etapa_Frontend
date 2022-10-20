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

export default () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm")); //Se eu entrar na condição menor que x tamnho retorna true
  return (
    <>
      <Drawer open={true} variant={smDown ? "temporary" : "permanent"}>
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
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src={Imagem}
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Página Inicial" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary="Projetos" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <AvatarIcon />
                </ListItemIcon>
                <ListItemText primary="Perfil" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh"></Box>
    </>
  );
};
