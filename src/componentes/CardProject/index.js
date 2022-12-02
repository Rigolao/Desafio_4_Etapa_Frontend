import {
  Box,
  Button,
  CardActions,
  DialogTitle,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from "@mui/material";
import React, {useState} from "react";
import "./CardProject.css";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import {useFormik} from "formik";
import * as yup from "yup";
import SaveIcon from "@mui/icons-material/Save";
import {useLocation} from "react-router-dom";
import {editarProjeto} from "../Services/editarProjeto";
import {deletarProjeto} from "../Services/deletarProjeto";
import axios from "axios";
import moment from "moment/moment";


const validationSchema = yup.object({
  titulo: yup.string().required("Esse campo é obrigatório"),
  sobre: yup.string().required("Esse campo é obrigatório").max(250, "O máximo 250 caracteres"),
  dataInicio: yup.string().required("Esse campo é obrigatório"),
  dataTermino: yup.string().required("Esse campo é obrigatório")
})

const CardProject = (props) => {

  const FormtdataInicio = () => (props.dataInicio) = moment(props.dataInicio, 'DD/MM/YYYY').format('YYYY-MM-DD')

  const formik = useFormik({
    initialValues: {
      titulo: (props.titulo),
      sobre: (props.sobre),
      dataInicio: (props.dataInicio),
      dataTermino: (props.dataTermino),
      publico: (props.publico),
      idProjeto: (props.idProjeto)
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      values.dataInicio = moment(values.dataInicio, 'YYYY-MM-DD').format('DD/MM/YYYY')
      values.dataTermino = moment(values.dataTermino, 'YYYY-MM-DD').format('DD/MM/YYYY')
      try {
        const resp = await axios.post("http://localhost:8081/projetos/cadastrarProjeto", {values}, {
          withCredentials: true,
          headers: {
            Authorization: sessionStorage.getItem('user')
          },
        })
        console.log(resp.data);
      } catch (error) {
        console.log(error.response)
      }
    }

  })

  const handleAtivo = (event, newStatus) => {
    if (newStatus !== null) {
      setStatus(newStatus);
    }
    console.log(status);
  }
  const [open, setOpen] = useState(false);

  const [status, setStatus] = useState(true);

  const handleClose = () => {
    formik.resetForm();
    setOpen(false)
  }
  const handClickOpen = () => {
    setOpen(true)
  }

  const handClickDelete = async (values) => {
    await deletarProjeto((props.idProjeto), values)
  }
  const location = useLocation().pathname;

  return (
    <Box className="card-container" component={Paper} elevation={1}>
      <div className="top"></div>

      <div className="card-bottom">
        <h3>{props.titulo}</h3>
        <p>
          {props.sobre}
        </p>
        <div>
          <div className="card-info-autor">
            <h4>{props.nome}</h4>
            <span>Autor(a)</span>
            {location !== "/dashboard/todosProjetos" &&
              <CardActions disableSpacing sx={{display: 'flex', justifyContent: 'end'}}>
                <IconButton>
                  <EditIcon onClick={handClickOpen}/>
                </IconButton>
                <IconButton aria-label="share">
                  <DeleteIcon onClick={handClickDelete}/>
                </IconButton>
              </CardActions>
            }
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <Paper
          sx={{width: '600px', height: 'auto'}}>
          <form
            onSubmit={formik.handleSubmit}
          >
            <DialogTitle id="alert-dialog-title">
              {"Cadastrar Projeto"}

            </DialogTitle>
            <DialogContent>
              <Stack mt={1} spacing={2}>
                <TextField
                  autoFocus
                  label="Titulo"
                  id="titulo"
                  name="titulo"
                  value={formik.values.titulo}
                  onChange={formik.handleChange}
                  error={formik.touched.titulo && Boolean(formik.errors.titulo)}
                  helperText={formik.touched.titulo && formik.errors.titulo}
                />
                <TextField
                  label="Sobre"
                  id="sobre"
                  name="sobre"
                  multiline
                  rows={4}
                  value={formik.values.sobre}
                  onChange={formik.handleChange}
                  error={formik.touched.sobre && Boolean(formik.errors.sobre)}
                  helperText={formik.touched.sobre && formik.errors.sobre}
                />
                <TextField
                  label="Data Inicio"
                  id="dataInicio"
                  name="dataInicio"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={formik.values.dataInicio}
                  onChange={formik.handleChange}
                  error={formik.touched.dataInicio && Boolean(formik.errors.dataInicio)}
                  helperText={formik.touched.dataInicio && formik.errors.dataInicio}
                />
                <TextField
                  label="Data Termino"
                  id="dataTermino"
                  name="dataTermino"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={formik.values.dataTermino}
                  onChange={formik.handleChange}
                  error={formik.touched.dataTermino && Boolean(formik.errors.dataTermino)}
                  helperText={formik.touched.dataTermino && formik.errors.dataTermino}
                />
                <Typography component='span' sx={{
                  color: "rgba(0, 0, 0, 0.5)"
                }}>Público</Typography>
                <ToggleButtonGroup
                  value={formik.values.publico}
                  exclusive
                  onChange={handleAtivo}
                >
                  <ToggleButton value={true}>Ativo</ToggleButton>
                  <ToggleButton value={false}>Inativo</ToggleButton>
                </ToggleButtonGroup>
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button
                variant="contained"
                type='submit'
                startIcon={<SaveIcon/>}
              >Salvar</Button>
            </DialogActions>
          </form>
        </Paper>
      </Dialog>
    </Box>
  );
};
export default CardProject;
