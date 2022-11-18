import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { ModalEventos } from '../Modals/ModalEventos';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import growApi from '../../../Services/Api/growApi';
import events from '../../../Helpers/Types/events';
import { useSelector } from 'react-redux';

const ListEvents: React.FunctionComponent = () => {
    // Para el check box
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    // Para la lista
    const { user } = useSelector((state: any) => state.auth.user);
    console.log(user);

    const [list, setList] = useState([]);

    useEffect(() => {
        async function obtenerlista(UserId: string): Promise<void> {
            try {
                const resp = await growApi.get('/events/', { data: { UserId } });
                setList(resp.data.events);
            } catch (error) { }
        }
        try {
            void obtenerlista(user);
        } catch (error) {
            console.log({ error });
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
                                    <IconButton edge="end" aria-label="comments">
                                        <EditIcon />
                                        {
                                            // falta poner modal aqui que pida el item.id
                                        }
                                    </IconButton>
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