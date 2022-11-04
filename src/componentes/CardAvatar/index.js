import React from "react";
import "./CardAvatar.css";
import {Avatar, Paper, Stack, Typography} from "@mui/material";
import LattesIcon from '../../imagens/lattes.svg'
import IconButton from "@mui/material/IconButton";

const CardAvatar = (props) => {
  return (
      <Stack
          maxWidth="230px"
          height="300px"
      >
        <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            component={Paper}
            elevation={2}
            sx={{backgroundColor: '#F2F2F2'}}
        >
          <Avatar
              sx={{height: '100px', width: '100px', margin: '10px'}}
          >JM</Avatar>
          <Stack

          >
            <Typography
                color='#4136F1'
                fontWeight='bold'
            >
              João Marques
            </Typography>

            <Typography
                fontSize={12}
                color='#595959'
            >
              Engenharia de Software
            </Typography>
          </Stack>

          <Stack
              direction='row'
              marginBottom='10px'
          >
            <IconButton>
              <img src={LattesIcon} alt='icone lattes'/>
            </IconButton>
          </Stack>
        </Stack>
        <Typography>Tags: #Matemática, #Biologia
          #Matemática, #Biologia
        </Typography>
      </Stack>
  );
};
export default CardAvatar;
