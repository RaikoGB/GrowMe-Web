import Container from '@mui/system/Container';
import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const FAQ: React.FunctionComponent = () => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <>
      <Container>
        <Typography variant="h2">Preguntas Frecuentes</Typography>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>1.	¿Qué es la gamificación de hábitos?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            La gamificación de hábitos es el proceso de hacer que la adopción y mantenimiento de hábitos se sienta como un juego. Esto se logra mediante el uso de recompensas, puntos, niveles y otras técnicas de motivación.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>2.	¿Por qué es importante tener hábitos saludables? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Los hábitos saludables, como ejercitarse regularmente, comer de manera saludable y dormir lo suficiente, son esenciales para mantener una buena salud y bienestar a largo plazo. Además, pueden ayudar a reducir el riesgo de enfermedades crónicas como la obesidad, la diabetes y las enfermedades cardíacas. Por otra parte otro tipo de hábitos ayudar con el estres y la ansiedad, cada uno de los habitos que tomas ayudan de pequeñas formas al buen desarrollo personal.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>3.	¿Cómo funciona la plataforma?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Nuestra plataforma le permite crear y personalizar su propio plan de hábitos para el desarrollo personal. Puede elegir entre una amplia variedad de hábitos saludables predefinidos o crear sus propios hábitos personalizados. A medida que completa los hábitos diariamente, mirando el desarrollo de sus hábitos y sus avances con un tema gamificado.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>4.	¿Es seguro utilizar la plataforma? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Sí, nuestra plataforma es segura y cumple con mantener sus datos seguros ademas de que no les pedimos o publicamos su informacion personal. Además, tomamos medidas adicionales para proteger la privacidad y seguridad de nuestros usuarios.
            </Typography>
          </AccordionDetails>
        </Accordion>
         <Accordion
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>5.	¿Cuánto cuesta utilizar la plataforma? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nada, nuestra plataforma es completamente gratuita de la misma forma que nuestra aplicacion.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel6'}
          onChange={handleChange('panel6')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>6.	¿Es necesario tener un dispositivo móvil para utilizar la plataforma? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            No es necesario tener un dispositivo móvil para utilizar nuestra plataforma, ya que también está disponible en línea a través de nuestro sitio web.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel7'}
          onChange={handleChange('panel7')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>7.	¿Cómo puedo contactar al equipo de soporte? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Puede contactar al equipo de soporte a través de nuestro formulario de contacto en línea o enviando un correo electrónico a nuestro equipo de soporte a support@GroeMeApp.com            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel8'}
          onChange={handleChange('panel8')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>8.	¿Ofrecen guías o consejos para ayudar a los usuarios a establecer hábitos saludables? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Sí, ofrecemos guías y recursos en nuestro sitio web para ayudar a los usuarios a establecer y mantener hábitos saludables            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel9'}
          onChange={handleChange('panel9')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>9.	¿Ofrecen recompensas o incentivos adicionales para motivar a los usuarios?  </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Si, ofrecemos recompesas varias, medallas y plantas que para motivar a los usuarios a seguir o tomar nuesvos hábitos.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel10'}
          onChange={handleChange('panel10')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>10.	¿La plataforma está disponible en idiomas diferentes? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Desafortunadamente no, actualmente la plataforma solo cuenta con el idioma español para sus usuario.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
};

export default FAQ;

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}));
