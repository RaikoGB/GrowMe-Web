import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { ModalEventos } from '../Modals/Create/ModalEventos';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import growApi from '../../../Services/Api/growApi';
import events from '../../../Helpers/Types/events';
import { useSelector } from 'react-redux';
import { useEvents } from '../../../hooks/useEvents';
import { ModalEventosUpdate } from '../Modals/update/ModalEventosUpdate';

const ListEvents: React.FunctionComponent = () => {
    // Para el check box
    const [checked, setChecked] = React.useState([0]);
    const { DeleteEvents } = useEvents();

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        DeleteEvents(value);
    };

    // Para la lista
    const user = useSelector((state: any) => state.auth.user);

    const [list, setList] = useState([]);

    useEffect(() => {
        async function obtenerlista(UserId: string): Promise<void> {
            try {
                const resp = await growApi.get(`/events/${UserId}`, { data: { UserId } });
                setList(resp.data);
                // console.log("🚀 ~ file: ListEvents.tsx:47 ~ obtenerlista ~ resp", resp)
            } catch (error) {
            console.log("🚀 ~ file: ListEvents.tsx:48 ~ obtenerlista ~ error", error)
            }
        }
        try {
            void obtenerlista(user.uid);
        } catch (error) {
            console.log("🚀 ~ file: ListEvents.tsx:54 ~ useEffect ~ error", error)
        }
    }, [setList, user]);

    return (
        <>
            <Paper elevation={6}>
                <Box>
                    <Card sx={{ display: 'flex', bgcolor: 'primary.light' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <ModalEventos />
                        </CardContent>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                            Eventos
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <br />
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper'
                    }}
                >
                    {Array.isArray(list)
                        ? list.map((item: events) => (
                            <ListItem
                                key={item.id}
                                secondaryAction={
                                    <ModalEventosUpdate ItemId={item.id} />
                                }
                                disablePadding
                            >
                                <ListItemButton
                                    role={undefined}
                                    onClick={handleToggle(item.id)}
                                    dense
                                >
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.includes(item.id)}
                                            tabIndex={-1}
                                            disableRipple
                                            // onChange={DeleteEvents(item.id)}
                                            inputProps={{
                                                'aria-labelledby': item.id.toLocaleString()
                                            }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        id={item.id.toLocaleString()}
                                        primary={item.title}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))
                        : null}
                </List>
            </Paper>
        </>
    );
};
export default ListEvents