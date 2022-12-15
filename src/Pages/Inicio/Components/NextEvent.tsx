import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import growApi from '../../../Services/Api/growApi';
import { useSelector } from 'react-redux';
import events from '../../../Helpers/Types/events';
import moment from 'moment';

const NextEvent: React.FunctionComponent = () => {

    const user = useSelector((state: any) => state.auth.user);

    const [list, setList] = useState([]);

    useEffect(() => {
        async function obtenerData(UserId: string): Promise<void> {
            try {
                const resp = await growApi.get(`/events/next/${UserId}`, { data: { UserId } });
                setList(resp.data);
            } catch (error) {
                console.log("🚀 ~ file: NextEvent.tsx:25 ~ obtenerData ~ error", error);
            }
        }
        try {
            void obtenerData(user.uid);
        } catch (error) {
            console.log("🚀 ~ file: NextEvent.tsx:31 ~ useEffect ~ error", error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setList, user]);

    return (
        <>
            <Paper elevation={24} sx={{ height: 370 }}>
                <Box
                    sx={{
                        display: 'grid',
                        gridAutoColumns: '1fr',
                        gap: 1,
                        height: 370
                    }}
                >
                    <Box sx={{ gridRow: '1', bgcolor: 'primary.light' }}>
                        <Typography mt={10} variant="h2" align="center">
                            Dia {moment().date()}
                        </Typography>
                        <Typography variant="h4" align="center" gutterBottom>
                            Mes {moment().month() + 1}
                        </Typography>
                    </Box>
                    <Box sx={{ gridRow: '1' }}>
                        {Array.isArray(list)
                            ? list.map((item: events) => (
                                <>
                                {/* todo: Cambiar formato mostrado de las fechas a uno Legible */}
                                    <Typography mt={5} variant="h4" align="center" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="h3" align="center">
                                        {item.startEvent.toString()}
                                    </Typography>
                                    <Typography variant="h5" align="center" gutterBottom>
                                        {item.endEvent.toString()}
                                    </Typography>
                                    <Typography ml={2} variant="body1" gutterBottom>
                                        {item.notes}
                                    </Typography>
                                </>
                            ))
                            : null}
                    </Box>
                </Box>
            </Paper>
        </>
    )
}

export default NextEvent