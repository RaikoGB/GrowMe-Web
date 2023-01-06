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

const Recomendaciones: React.FunctionComponent = () => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <>
      <Container>
        <Typography variant="h2">Recomendaciones para los habitos mas dificiles</Typography>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Ejercicio</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Empezar a hacer ejercicio puede ser un desafío, especialmente si no estás acostumbrado a hacerlo. Sin embargo, hay muchas maneras de hacer que el proceso sea más fácil y más agradable. Si estás tratando de tomar el hábito de hacer ejercicio, aquí hay algunas recomendaciones que pueden ayudarte:
            </Typography>
            <Typography>
              1.-Empieza lento: No trates de hacer una hora de ejercicio intenso de inmediato. Empieza con sesiones cortas de ejercicio y aumenta gradualmente la duración y la intensidad a medida que te sientas más cómodo.
            </Typography>
            <Typography>
              2.-Encuentra una actividad que disfrutes: El ejercicio no tiene que ser aburrido. Encuentra una actividad que realmente disfrutes, como caminar, bailar, jugar al fútbol o hacer yoga. Si te diviertes mientras haces ejercicio, será más fácil tomarlo como un hábito.
            </Typography>
            <Typography>
              3.-Haz ejercicio con un amigo: El ejercicio puede ser más divertido si lo haces con otras personas. Trata de encontrar un amigo o un compañero de entrenamiento con quien puedas hacer ejercicio regularmente. Además, tener un compañero de entrenamiento te ayudará a mantenerte motivado.
            </Typography>
            <Typography>
              4.-Encuentra un momento del día que te funcione: El ejercicio puede ser más fácil si lo incorporas en tu rutina diaria. Encuentra un momento del día que te funcione y trata de hacer ejercicio en ese mismo momento todos los días. Por ejemplo, si te levantas temprano, podrías hacer ejercicio por la mañana. Si prefieres hacer ejercicio por la noche, trata de hacerlo después de cenar.
            </Typography>
            <Typography>
              5.-Compra equipo cómodo: Invertir en un par de zapatillas de entrenamiento cómodas y un soporte para el sudor puede hacer que el ejercicio sea más agradable. Asegúrate de comprar ropa cómoda también, ya que esto puede ayudarte a sentirte más a gusto mientras haces ejercicio.
            </Typography>
            <Typography>
              6.-Haz un seguimiento de tu progreso: Mantener un registro de tu progreso puede ser una excelente manera de motivarte y ver cómo has mejorado con el tiempo. Lleva un diario de ejercicios o utiliza una aplicación para hacer un seguimiento de tus sesiones de entrenamiento.
            </Typography>
            <Typography>
              7.-Ten paciencia: El cambio no sucede de la noche a la mañana. Ten paciencia y no te desanimes si no ves resultados inmediatos. Recuerda que el ejercicio es un proceso a largo plazo y que tardarás un poco de tiempo en ver cambios significativos en tu cuerpo y tu salud. Sé constante y sigue adelante, y pronto comenzarás a ver los beneficios del ejercicio.
            </Typography>
            <Typography>
              8.-Consulta con un profesional: Si tienes alguna condición de salud o preocupación, es importante que consultes con un médico o un entrenador personal antes de empezar a hacer ejercicio. Ellos pueden ayudarte a establecer un plan de ejercicios seguro y adecuado para ti.
            </Typography>
            <Typography>
              9.-No te rindas: A veces, el ejercicio puede ser difícil o desalentador, especialmente al principio. Pero no te rindas. Recuerda por qué empezaste a hacer ejercicio y mantén eso en mente cuando sientas la tentación de saltarte una sesión de entrenamiento.
            </Typography>
            <Typography>
              10.-Disfruta del proceso: Finalmente, trata de disfrutar del proceso de hacer ejercicio. No te sientas presionado para hacer ejercicio todos los días o para alcanzar metas inalcanables. Haz ejercicio porque es algo bueno para ti y porque te hace sentir bien. Si disfrutas del proceso, será más fácil tomar el hábito de hacer ejercicio y mantenerlo a largo plazo.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Leer</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Leer es una excelente manera de aprender cosas nuevas, expandir nuestros conocimientos y disfrutar de historias y personajes interesantes. Si estás tratando de tomar el hábito de la lectura, aquí hay algunas recomendaciones que pueden ayudarte:
            </Typography>
            <Typography>
              1.-Empieza con libros que te interesen: No trates de leer un libro solo porque es bueno para ti. En lugar de eso, elige libros que realmente te interesen y que te hagan querer seguir leyendo. Si te gustan los thrillers, elige uno de esos. Si te gusta la ciencia ficción, elige un libro de ese género. Al elegir libros que te interesen, será más fácil tomar el hábito de la lectura.
            </Typography>
            <Typography>
              2.-Establece un objetivo de lectura: Tener un objetivo de lectura puede ser una excelente manera de mantenerte motivado y enfocado. Establece un objetivo de leer un cierto número de páginas o de libros por semana o mes, y trata de cumplir con ese objetivo.
            </Typography>
            <Typography>
              3.-Encuentra un lugar cómodo para leer: El lugar donde lees puede afectar tu experiencia de lectura. Trata de encontrar un lugar cómodo y tranquilo donde puedas sumergirte en tu libro sin distracciones.
            </Typography>
            <Typography>
              4.-en un libro a mano: Siempre es bueno tener un libro a mano para cuando tengas unos minutos libres. Lleva un libro contigo a la espera del autobús o en tu mochila mientras vas al trabajo o a la escuela
            </Typography>
            <Typography>
              5.-Utiliza diferentes formatos: Si no te gusta leer en papel, no te preocupes. Hay muchas opciones de formatos digitales disponibles, como libros electrónicos o audiolibros. Si tienes problemas de visión o simplemente prefieres escuchar tu libro en lugar de leerlo, los audiolibros pueden ser una excelente opción.
            </Typography>
            <Typography>
              6.-Únete a un club de lectura: Si te gusta discutir libros con otras personas, considera unirte a un club de lectura. Esto te ayudará a mantenerte motivado y te dará la oportunidad de conocer a personas con intereses similares.
            </Typography>
            <Typography>
              7.-Encuentra una actividad que te guste hacer mientras lees: A veces, leer puede ser más agradable si lo haces junto con otra actividad que te guste. Trata de encontrar una actividad que te guste hacer mientras lees, como tomar una taza de café o té o disfrutar de una barrita de cereales mientras te sumerges en tu libro.
            </Typography>
            <Typography>
              8.-No te sientas presionado: No te sientas presionado para terminar un libro si no te está gustando. Si no estás disfrutando de un libro, no te sientas obligado a terminarlo. Hay tantos libros disponibles, así que encuentra uno que te guste.
            </Typography>
            <Typography>
              9.-Disfruta del proceso: Finalmente, trata de disfrutar del proceso de leer. No te sientas presionado para leer todos los días o para alcanzar metas inalcanables. Lee porque es algo que te gusta y porque te hace sentir bien. Si disfrutas del proceso, será más fácil tomar el hábito de la lectura y mantenerlo a largo plazo.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Estudio</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Estudiar puede ser un desafío, especialmente si tienes mucho material que cubrir o si tienes dificultades para concentrarte. Sin embargo, hay muchas técnicas de estudio que pueden ayudarte a aprovechar al máximo tu tiempo y tu esfuerzo. Si estás tratando de mejorar tus técnicas de estudio, aquí hay algunas recomendaciones que pueden ayudarte:
            </Typography>
            <Typography>
              1.-Encuentra un lugar de estudio cómodo y tranquilo: El lugar donde estudias puede afectar tu capacidad para concentrarte y retener la información. Trata de encontrar un lugar de estudio cómodo y tranquilo, lejos de distracciones como la televisión o el ruido.
            </Typography>
            <Typography>
              2.-Utiliza diferentes métodos de estudio: No todos somos iguales y no todos aprendemos de la misma manera. Utiliza una variedad de métodos de estudio para ver cuál funciona mejor para ti. Algunas opciones pueden incluir leer, escribir, escuchar o hablar en voz alta.
            </Typography>
            <Typography>
              3.-Toma descansos regulares: Trabajar durante períodos prolongados de tiempo sin descanso puede ser contraproducente. Toma descansos regulares mientras estudias para darle tiempo a tu cerebro a procesar la información y para evitar el agotamiento.
            </Typography>
            <Typography>
              4.-Haz resúmenes: Resumir la información que estás estudiando puede ser una excelente manera de ayudarte a comprenderla mejor y a recordarla más fácilmente. Trata de hacer resúmenes breves y concisos de lo que has aprendido.
            </Typography>
            <Typography>
              5.-Utiliza flashcards: Las flashcards son pequeñas tarjetas que tienen una palabra o concepto en un lado y su definición en el otro. Son una excelente manera de ayudarte a recordar información importante.
            </Typography>
            <Typography>
              6.-Haz ejercicios o problemas: Practicar lo que has estudiado es una excelente manera de ayudarte a comprender y recordar la información. Trata de hacer ejercicios o resolver problemas relacionados con lo que has estudiado.
            </Typography>
            <Typography>
              7.-Pide ayuda: Si tienes dificultades para comprender algo o si simplemente necesitas un poco de ayuda, no tengas miedo de pedir ayuda. Pide ayuda a un profesor, un tutor o a un compañero de clase.
            </Typography>
            <Typography>
              8.-Disfruta del proceso: Finalmente, trata de disfrutar del proceso de estudiar. No te sientas presionado para estudiar todos los días o para alcanzar metas inalcanables. Estudia porque
            </Typography>
            <Typography>
              9.-Utiliza técnicas de estudio visuales, como diagramas o mapas conceptuales. Enseña lo que has aprendido a otra persona
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Meditación</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Meditar puede ser una excelente manera de reducir el estrés, mejorar la concentración y aumentar la sensación de bienestar general. Si estás tratando de tomar el hábito de la meditación, aquí hay algunas recomendaciones que pueden ayudarte:
            </Typography>
            <Typography>
              1.-Encuentra un lugar cómodo y tranquilo: El lugar donde meditas puede afectar tu experiencia de meditación. Trata de encontrar un lugar cómodo y tranquilo donde puedas sentarte o acostarte sin distracciones.
            </Typography>
            <Typography>
              2.-Establece un horario regular: Trata de meditar en el mismo momento todos los días para que se convierta en un hábito más fácilmente. Puedes meditar por la mañana para comenzar el día con una mente clara o por la noche para relajarte antes de dormir.
            </Typography>
            <Typography>
              3.-Usa una aplicación de meditación o una guía: Las aplicaciones de meditación o las guías de meditación pueden ser una excelente manera de aprender a meditar y de mantenerte motivado. Hay muchas opciones disponibles, así que elige una que te guste y que se adapte a tus necesidades.
            </Typography>
            <Typography>
              4.-Enfócate en tu respiración: La respiración es una excelente manera de enfocarte mientras meditas. Trata de enfocarte en tu respiración mientras inhalas y exhalas y trata de no juzgar tus pensamientos. Si te distraes, simplemente vuelve a enfocarte en tu respiración.
            </Typography>
            <Typography>
              5.-No te sientas presionado: La meditación no es una competencia. No te sientas presionado para lograr una mente completamente vacía o para meditar durante períodos prolongados de tiempo. La meditación es un proceso y tomará tiempo para que te sientas cómodo y para que veas los beneficios. Si te sientes presionado, simplemente vuelve a enfocarte en tu respiración y trata de disfrutar del proceso.
            </Typography>
            <Typography>
              6.-No te rindas: A veces, la meditación puede ser difícil o desalentadora, especialmente al principio. Pero no te rindas. Recuerda por qué empezaste a meditar y mantén eso en mente cuando sientas la tentación de dejar de hacerlo.
            </Typography>
            <Typography>
              7.-Experimenta con diferentes técnicas de meditación: Hay muchas técnicas de meditación diferentes disponibles, como la meditación de atención plena, la meditación de mantras o la meditación trascendental. Experimenta con diferentes técnicas para ver cuál funciona mejor para ti.
            </Typography>
            <Typography>
              8.-Busca apoyo: Si te sientes abrumado o necesitas ayuda para empezar a meditar, busca apoyo. Pide ayuda a un amigo, a un miembro de la familia o a un profesional de la salud mental. Ellos pueden ayudarte a establecer una rutina de meditación y a mantenerte motivado.
            </Typography>
            <Typography>
              9.-Disfruta del proceso: Finalmente, trata de disfrutar del proceso de meditar. No te sientas presionado para meditar todos los días o para alcanzar metas inalcanables. Medita porque es algo bueno para ti y porque te hace sentir bien. Si disfrutas del proceso, será más fácil tomar el hábito de la meditación y mantenerlo a largo plazo.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Gestión de tiempo</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              La gestión del tiempo es una habilidad importante que puede ayudarnos a hacer más cosas en menos tiempo y a sentirnos menos estresados y abrumados. Si estás tratando de mejorar tus técnicas de gestión del tiempo, aquí hay algunas recomendaciones que pueden ayudarte:
            </Typography>
            <Typography>
              1.-Utiliza una agenda o una aplicación de tareas: Una agenda o una aplicación de tareas pueden ser una excelente manera de organizar tus tareas y compromisos y de asegurarte de no olvidar nada.
            </Typography>
            <Typography>
              2.-Establece metas realistas: Trata de establecer metas realistas y alcanzables en lugar de tratar de hacer demasiado. Si te sientes abrumado, divide tus tareas en pasos más pequeños y más manejables.
            </Typography>
            <Typography>
              3.-Utiliza tu tiempo de manera efectiva: Trata de utilizar tu tiempo de manera efectiva en lugar de desperdiciarlo. Evita distracciones como el teléfono móvil o las redes sociales mientras trabajas y enfócate en tu trabajo.
            </Typography>
            <Typography>
              4.-Aprende a decir no: A veces, es necesario decir no a compromisos o tareas que no son una prioridad. Aprende a decir no de manera respetuosa y a enfocarte en lo que es realmente importante para ti.
            </Typography>
            <Typography>
              5.-Delega tareas: No tienes que hacer todo tú mismo. Aprende a delegar tareas a otros cuando sea necesario. Esto te ayudará a ahorrar tiempo y a sentirte menos abrumado.
            </Typography>
            <Typography>
              6.-Utiliza la técnica de Pomodoro: La técnica de Pomodoro consiste en trabajar durante períodos de 25 minutos seguidos y luego tomar un descanso de 5 minutos. Esta técnica puede ayudarte a mantenerte enfocado y a aprovechar al máximo tu tiempo.
            </Typography>
            <Typography>
              7.-Descansa y relájate: La gestión del tiempo no es solo sobre trabajar más. Es importante tomarse el tiempo para descansar y relajarse también. Asegúrate de tomar descansos regulares y de hacer actividades que te ayuden a relajarte y a recargar energías.
            </Typography>
            <Typography>
              8.-Sé flexible: No puedes controlar todo lo que sucede en tu vida. Aprende a ser flexible y a adaptarte a los cambios cuando surjan.
            </Typography>
            <Typography>
              9.-Evalúa y ajusta: Finalmente, evalúa regularmente cómo estás utilizando tu tiempo y ajusta tus hábitos de gestión del tiempo en consecuencia. Si algo no está funcionando, trata de encontrar una solución o busca nuevas maneras de hacer las cosas.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
};

export default Recomendaciones;

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