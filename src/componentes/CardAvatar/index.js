import {Avatar, Box, Stack, Typography} from "@mui/material";
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './CardAvatar.css'
import Paper from "@mui/material/Paper";

const CardAvatar = (props) => {
  return (
    <>
      <Box className="card-contaier-avatar" component={Paper} elevation={1} >
        <div className='top'>
          <div className='imagem-container'>
            <Avatar>{props.avatar}</Avatar>
          </div>
        </div>

        <div className="bottom">
          <h3>{props.nome}</h3>
          <Stack className="card-info-container" direction='column' spacing={1}>
            <Stack className="card-info" spacing={1} direction='row'>
              <span>Email: </span><Typography>{props.email}</Typography>
            </Stack>
            <Stack className="card-info" spacing={1} direction='row'>
              <span>Telefone: </span><Typography>({props.ddd}) {props.telefone}</Typography>
            </Stack>
            <Stack className="card-info" spacing={1} direction='row'>
              <span>Area Atuação:</span><Typography>{props.areaAtuacaoCientista}</Typography>
            </Stack>
            <Stack className="card-info" spacing={1} direction='row'>
              <span>Area Formação:</span><Typography>{props.areaFormacao}</Typography>
            </Stack>
            <Stack className="card-info" spacing={1} direction='row'>
              <span>Lattes:</span><Typography>{props.lattes}</Typography>
            </Stack>
            <Stack className="card-info" spacing={1} direction='row'>
              <span>Redes Sociais:</span> <Typography>{props.redesSociais > 1 ? props.redesSociais.forEach((rede) => rede == 'G' ? <GitHubIcon/> : rede == 'L'? <LinkedInIcon/> : '') : ''}</Typography>
            </Stack>
          </Stack>
        </div>

      </Box>
    </>
  );
};
export default CardAvatar;
