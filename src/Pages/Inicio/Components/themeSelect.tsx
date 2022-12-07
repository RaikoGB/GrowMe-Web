import {
    BottomNavigation,
    BottomNavigationAction,
    Box,
} from '@mui/material';
import { Container } from '@mui/system';
import Paper from '@mui/material/Paper';
import React from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InsightsIcon from '@mui/icons-material/Insights';
import SpaIcon from '@mui/icons-material/Spa';
import FaceIcon from '@mui/icons-material/Face';
import Avatar from './Avatar';
import Farm from './Farm';
import ProgresoCohen from './ProgresoCohen';
import Premios from './Premios';


const ThemeSelect: React.FunctionComponent = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState('Avatar');

    function handleChange(event: React.SyntheticEvent, newValue: string): void {
        setValue(newValue);
    }

    return (
        <>
            <Container>
                <Paper elevation={24} background-color="black">
                    <Box sx={{ height: 370 }}>
                        <Box sx={{ height: 320 }}>
                            {(() => {
                                switch (value) {
                                    case 'Avatar':
                                        return <Avatar />;
                                    case 'Granja':
                                        return <Farm />;
                                    case 'Progreso':
                                        return <ProgresoCohen />;
                                    case 'Premios':
                                        return <Premios />;
                                    default:
                                        return <Avatar />;
                                }
                            })()}
                        </Box>
                        <BottomNavigation
                            showLabels
                            value={value}
                            onChange={handleChange}
                        >
                            <BottomNavigationAction
                                label="Avatar"
                                value={'Avatar'}
                                icon={<FaceIcon />}
                            />
                            <BottomNavigationAction
                                label="Granja"
                                value={'Granja'}
                                icon={<SpaIcon />}
                            />
                            <BottomNavigationAction
                                label="Progreso"
                                value={'Progreso'}
                                icon={<InsightsIcon />}
                            />
                            <BottomNavigationAction
                                label="Premios"
                                value={'Premios'}
                                icon={<EmojiEventsIcon />}
                            />
                        </BottomNavigation>
                    </Box>
                </Paper>
            </Container>
        </>
    );
};

export default ThemeSelect;