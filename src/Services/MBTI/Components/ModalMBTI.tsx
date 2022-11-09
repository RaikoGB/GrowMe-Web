import React from 'react';
import { Button } from '@mui/material';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import MBTI from '../helpers/MBTI'

const ModalMBTI: React.FunctionComponent = () => {
    const [open, setOpen] = React.useState(false);
    const TotalQ = 4;
    const MB = new MBTI();

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
            // EnviarCohen(Answer);
            handleClose()
        }
    }


    return (
        <>
            <div>
                <Button onClick={handleOpen} variant="text" startIcon={<SelfImprovementIcon />}>
                    Test de MBTI

                </Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="Modal MBTI"
                aria-describedby="Test MBTI"
            >
                <Box sx={style}>
                    <div>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {
                                // busca en la clse MBTI y toma de las preguntas seleccionadas para presentar una.
                                MB.getQselected(NumberQ)
                            }
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
                                <Button key="Nunca" onClick={(event) => NextQ({ event, index: 0 })}>
                                    {
                                        // busca en la clse MBTI y toma de la respues A para presentar.
                                        MB.getAselected(NumberQ)
                                    }
                                </Button>
                                <Button key="Casi Nunca" onClick={(event) => NextQ({ event, index: 1 })}>
                                    {
                                        // busca en la clse MBTI y toma de la respues B para presentar.
                                        MB.getBselected(NumberQ)
                                    }
                                </Button>
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
    )
}

export default ModalMBTI

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