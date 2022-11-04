import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Button } from '@mui/material';
import { questionsCohen } from '../helpers/CohenTEST';

const TotalQ = 13;

const QCard: React.FC = () => {
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
                // se invierte la puntuacion de las preguntas 4,5,6,7,9,10,13
                setNumberQ(NumberQ + 1);
            }
            else {
                setNumberQ(NumberQ + 1);
                setAnswer(Answer + index)
            }
        }
        else {
            // EnviarCohen(Answer);
            console.log("Se termino de recolectar los datos de Cohen la puntacion es: ", Answer);
        }
    }

    return (
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
                    <Button key="Nunca" onClick={(event) => NextQ({ event, index: 0 })}>1</Button>
                    <Button key="Casi Nunca" onClick={(event) => NextQ({ event, index: 1 })}>2</Button>
                    <Button key="De vez en cuando" onClick={(event) => NextQ({ event, index: 2 })}>3</Button>
                    <Button key="A menudo" onClick={(event) => NextQ({ event, index: 3 })}>4</Button>
                    <Button key="Muy a menudo" onClick={(event) => NextQ({ event, index: 4 })}>5</Button>
                </ButtonGroup>
                <br />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {NumberQ} / {TotalQ}
                </Typography>
            </Box>
        </div>
    )
}

export default QCard