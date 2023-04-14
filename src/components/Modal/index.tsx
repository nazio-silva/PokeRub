import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { closeModal } from '../../slices/modalSlice';
import { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';

import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const Modal: React.FC = () => {

  const dispatch = useDispatch()
  const statusModal = useSelector((state: RootState) => state.modal.open)
  const userSelected = useSelector((state: RootState) => state.modal.userSelected)

  const { login, name, location, email, public_repos } = userSelected

  return (
    <div>
      <BootstrapDialog
        onClose={() => dispatch(closeModal())}
        aria-labelledby="customized-dialog-title"
        open={statusModal}
      >
        <Typography gutterBottom style={{ paddingLeft: 10, paddingTop: 10 }}>
          Detalhes
        </Typography>

        <DialogContent dividers>
          <Typography gutterBottom>
            Nome: {login}
          </Typography>

          <Typography gutterBottom>
            Nome de usuário: {name}
          </Typography>

          <Typography gutterBottom>
            E-mail: {email === null ? " - " : email}
          </Typography>

          <Typography gutterBottom>
            Localização: {location === null ? " - " : location}
          </Typography>
          <Typography gutterBottom>
            Repositórios: {public_repos}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => dispatch(closeModal())}>
            Fechar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default Modal;