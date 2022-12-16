import React from 'react';
import { Button } from '@mui/material';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { questionsCohen } from '../helpers/CohenTEST';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useEvents } from '../../../hooks/useEvents';
import { useSelector } from 'react-redux';

const ModalCohen: React.FunctionComponent = () => {

  const  user  = useSelector((state: any) => state.auth.user);
  const [open, setOpen] = React.useState(false);
  const TotalQ = 13;
  const { EnviarCohen } = useEvents();

  function handleOpen(): void {
    return setOpen(true);
  }
  function handleClose(): void {
    return setOpen(false);
  }

  const [NumberQ, setNumberQ] = React.useState(0);
  const [Answer, setAnswer] = React.useState(0);

  function NextQ({
    event,
    index
  }: {
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>;
    index: number;
  }): void {
    if (NumberQ <= TotalQ) {
      if (NumberQ === 3 || NumberQ === 4 || NumberQ === 5 || NumberQ === 6 || NumberQ === 8 || NumberQ === 9 || NumberQ === 12) {
        // todo: se invierte la puntuacion de las preguntas 4,5,6,7,9,10,13
        setNumberQ(NumberQ + 1);
        switch (index) {
          case 0:
            index = 4;
            break;
          case 1:
            index = 3;
            break;
          case 3:
            index = 1;
            break;
          case 4:
            index = 0;
            break;
        }
        setAnswer(Answer + index)
      }
      else {
        setNumberQ(NumberQ + 1);
        setAnswer(Answer + index)
      }
    }
    if (NumberQ === TotalQ) {
      void EnviarCohen(Answer, user.uid);
      handleClose();
    }
  }

  return (
    <>
      <div>
        <Button onClick={handleOpen} variant="text" startIcon={<SelfImprovementIcon />}>
          Test semanal de Resilencia
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Modal Cohen"
        aria-describedby="Test Cohen"
      >
        <Box sx={style}>
          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {questionsCohen[NumberQ]}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                  m: 1,
                },
              }}
            >
              <ButtonGroup variant="contained" size="large" aria-label="large button group">
                <Button key="Nunca" onClick={(event) => NextQ({ event, index: 0 })}>Nunca</Button>
                <Button key="Casi Nunca" onClick={(event) => NextQ({ event, index: 1 })}>Casi Nunca</Button>
                <Button key="De vez en cuando" onClick={(event) => NextQ({ event, index: 2 })}>De vez en cuando</Button>
                <Button key="A menudo" onClick={(event) => NextQ({ event, index: 3 })}>A menudo</Button>
                <Button key="Muy a menudo" onClick={(event) => NextQ({ event, index: 4 })}>Muy a menudo</Button>
              </ButtonGroup>
              <br />
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {NumberQ + 1} / {TotalQ + 1}
              </Typography>
            </Box>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ModalCohen;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

