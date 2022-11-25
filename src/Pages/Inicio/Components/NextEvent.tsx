import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import growApi from '../../../Services/Api/growApi';
import { useSelector } from 'react-redux';
import events from '../../../Helpers/Types/events';

const NextEvent: React.FunctionComponent = () => {

    const { user } = useSelector((state: any) => state.auth.user);
    console.log(user);

    const [list, setList] = useState<events>();

    useEffect(() => {
        async function obtenerData(UserId: string): Promise<void> {
            try {
                const resp = await growApi.get('/events/next', { data: { UserId } });
                setList(resp.data.events);
                // todo: poner en la el api server SELECT fields FROM table ORDER BY endDate DESC LIMIT 1;
            } catch (error) { }
        }
        try {
            void obtenerData(user);
        } catch (error) {
            console.log({ error });
        }
    }, [setList, user]);

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
                        {list?.title}
                    </Typography>
                    <Typography variant="h2" align="center">
                        {list?.EnDate.toString()}
                    </Typography>
                    <Typography variant="h4" align="center" gutterBottom>
                        {list?.Time}
                    </Typography>
                    <Typography ml={2} variant="body1" gutterBottom>
                        {list?.notes}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    )
}

export default NextEvent