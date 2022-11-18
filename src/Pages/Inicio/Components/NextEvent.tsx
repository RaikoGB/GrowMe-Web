import React from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const NextEvent: React.FunctionComponent = () => {

    return (
        <Paper elevation={24}>
            <Box
                sx={{
                    display: 'grid',
                    gridAutoColumns: '1fr',
                    gap: 1,
                    height: 370
                }}
            >
                <Box sx={{ gridRow: '1', bgcolor: 'primary.light' }}>
                    <Typography mt={10} variant="h1" align="center">
                        Dia {new Date().getDay()}
                    </Typography>
                    <Typography variant="h3" align="center" gutterBottom>
                        Mes {new Date().getMonth()}
                    </Typography>
                </Box>
                <Box sx={{ gridRow: '1' }}>
                    <Typography mt={5} variant="h5" align="center" gutterBottom>
                        Siguiente evento
                    </Typography>
                    <Typography variant="h2" align="center">
                        Fecha
                    </Typography>
                    <Typography variant="h4" align="center" gutterBottom>
                        Hora
                    </Typography>
                    <Typography ml={2} variant="body1" gutterBottom>
                        Descripcion
                    </Typography>
                </Box>
            </Box>
        </Paper>
    )
}

export default NextEvent