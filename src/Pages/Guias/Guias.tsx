import Box from '@mui/material/Box/Box';
import Typography from '@mui/material/Typography';
import React from 'react'
import img1 from '../../Assets/guias/1.png';
import img2 from '../../Assets/guias/2.png';
import img3 from '../../Assets/guias/3.png';
import img4 from '../../Assets/guias/4.png';
import img5 from '../../Assets/guias/5.png';
import img6 from '../../Assets/guias/6.png';
import img7 from '../../Assets/guias/7.png';
import { Container } from '@mui/material';

const Guias: React.FunctionComponent = () => {
    return (
        <>
            <Container >
                <Box sx={style}>
                    <Typography variant='h5'>
                        Pequeña guia de uso de la aplicación
                    </Typography>
                    <br></br>
                    <Box>
                        <img alt='avatar' src={img1} width={900} height={600}></img>
                    </Box>
                </Box>
                <br></br>
                <Box sx={style}>
                    <Typography>
                        Al iniciar sesion veras una pantalla principal desde donde podras realizar y ver todos tus actividades. Esta es tu pagina de inicio arriba puedes ver los cuatro tipos de progreso y a su derecha tu dia actual asi como el evento mas proximo en tu agenda. Debajo hallaras tres listas, cada una para un tipo diferentes de actividad. Y por ultimo en la pagina de navegacion puedes dirigirte a tu calendario.
                    </Typography>
                    <br></br>
                    <Box>
                        <img alt='avatar' src={img2} width={900} height={600}></img>
                    </Box>
                </Box>
                <br></br>
                <Box sx={style}>
                    <Typography>
                        La vista de progreso comienza mostrando tu avatar asignado de acuerdo a los resultados del test de personalidad, y que se ira actializando mientas mas los vayas realizando. Luego esta la granja donde podras ver el crecimiento de tus habitos mediante el crecimiento de las semillas que plantes.
                    </Typography>
                    <br></br>
                    <Box>
                        <img alt='avatar' src={img3} width={900} height={600}></img>
                    </Box>
                </Box>
                <br></br>
                <Box sx={style}>
                    <Typography>
                        El progreso por otro lado representa el estado de estres de resilencia de la persona, esti quiere decir que entre mas bajos los numeros semana a semana mejor. Todos tienen semanas malas y no es una razon para desanimarse.
                    </Typography>
                    <br></br>
                    <Box>
                        <img alt='avatar' src={img4} width={900} height={600}></img>
                    </Box>
                </Box>
                <br></br>
                <Box sx={style}>
                    <Typography>
                        Por ultimo en este apartado puedes ver tu coleccion de los seis ultimos premios que has conseguido.
                    </Typography>
                    <br></br>
                    <Box>
                        <img alt='avatar' src={img5} width={900} height={600}></img>
                    </Box>
                </Box>
                <br></br>
                <Box sx={style}>
                    <Typography>
                        Para agregar un nuevo hábito, actividad o evento es tan sencillo como apretar el boton mas en cada una de las columnas en llas te guaran los datos de cada uno. Recuerda solo tener aquellos que vayas a necesitar. Las actividades y los eventos se eliminaran una vez los marques como completados mientras que los habitos solo se veran actualizados.
                    </Typography>
                    <br></br>
                    <Box>
                        <img alt='avatar' src={img6} width={900} height={600}></img>
                    </Box>
                </Box>
                <br></br>
                <Box sx={style}>
                    <Typography>
                        La vista de calendario es una forma difertente de revisar tu agenda de acuerdo a lo que vayas agregando.
                    </Typography>
                    <br></br>
                    <Box>
                        <img alt='avatar' src={img7} width={900} height={600}></img>
                    </Box>
                </Box>
                <br></br>
                <Box sx={style}>
                    <Typography>
                        Por ultimo pero no menos importante, el boton de cuenta mostrara las opciones para acceder a los datos de tu cuenta y actualizarlos o cerrar tu sesion.
                    </Typography>
                </Box>
                <br></br>
            </Container>
        </>
    );
};

export default Guias;

const style = {
    display: 'flex',
    justifyContent: 'center'
};