import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { ModalActividades } from '../Modals/Create/ModalActividades';
import { ModalActividadesUpdate } from '../Modals/update/ModalActividadesUpdate';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import growApi from '../../../Services/Api/growApi';
import activities from '../../../Helpers/Types/activities';
import { useSelector } from 'react-redux';
import { useEvents } from '../../../hooks/useEvents';

const ListActivities: React.FunctionComponent = () => {
    // Para el check box
    const { DeleteActivities } = useEvents();
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
        DeleteActivities(value);
    };
    // Para la lista
    const user = useSelector((state: any) => state.auth.user);

    const [list, setList] = useState([]);

    useEffect(() => {
        async function obtenerlista(UserId: string): Promise<void> {
            try {
                const resp = await growApi.get(`/activities/${UserId}`, { data: { UserId } });
                setList(resp.data);
            } catch (error) {
                console.log("🚀 ~ file: ListActivities.tsx:49 ~ obtenerlista ~ error", error)
            }
        }
        try {
            void obtenerlista(user.uid);
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
                            <ModalActividades />
                        </CardContent>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Actividades
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
                    {
                        Array.isArray(list)
                            ? list.map((item: activities) => (
                                <ListItem
                                    key={item.id}
                                    secondaryAction={
                                        <ModalActividadesUpdate ItemId={item.id} />
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
                                                // onChange={DeleteActivities(item.id)}
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

export default ListActivities