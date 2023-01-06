/* eslint-disable no-unreachable */

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const SugestHabit: any = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    interface Habit {
        habit: string
    }

    const ANALISTAS = ["INTJ", "INTP", "ENTJ", "ENTP"];  // Se agrupan los tipos de personalidades
    const DIPLOMATICOS = ["INFJ", "INFP", "ENFJ", "ENFP"];
    const CENTINELAS = ["ISFJ", "ISFJ", "ESTJ", "ESFJ"];
    const EXPLORADORES = ["ISTP", "ISFP", "ESTP", "ESFP"];

    let flag: number
    // eslint-disable-next-line no-unused-vars
    const findPersonality = (pMIB: string): any => { /* <--Se pide una personalidad string de entrada */
        if (ANALISTAS.includes(pMIB)) {  // <-Se verifica que la personalidad 
            flag = 0;                  // este dentro de algun arreglo de personalidades 
            // Se cambia la bandera de estatus y se llama a la siguiente funcion 
        } else {
            if (DIPLOMATICOS.includes(pMIB)) { flag = 1 } else {
                if (CENTINELAS.includes(pMIB)) { flag = 2 } else {
                    if (EXPLORADORES.includes(pMIB)) { flag = 3 }
                }
            }
        }

        switch (flag) {
            case 0:
                return "Lectura" + "/" + "Estudio" + "/" + "Trabajar en proyectos personales";
            case 1:
                return ["Meditación", "Estudio", "Trabajar en proyectos personales"];
            case 2:
                return ["Lectura", "Meditación", "Escribir un diario"];
            case 3:
                return ["Ejercicio", "Prácticar una nueva habilidad", "Prácticar una lengua extranjera"];
            default:
                console.log("Unknown")
                break;
        }

    }

    return (
        findPersonality
    );
};