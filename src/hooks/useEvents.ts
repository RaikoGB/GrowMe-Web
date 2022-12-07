import { useSelector } from 'react-redux';
import growApi from '../Services/Api/growApi';
import moment from 'moment';
import DataMBTI from '../Helpers/Types/mbti';

export const useEvents: any = () => {

    const { user } = useSelector((state: any) => state.auth);

    const EnviarCohen = async (Answer: number): Promise<void> => {
        try {
            const now = moment().format("YYYY-MM-DD");
            const resp = await growApi.post('/cohen/create', { user, Answer, now });
            console.log(resp)
        } catch (error) {
            console.log({ error });
        }
    };

    const EnviarMBTI = async (Personalidad: DataMBTI): Promise<void> => {
        console.log(Personalidad);
        // TODO: la llamada correcta es checar si existe, luego hacer el respectivo create or update. Sumar los datos antiguos con los nuevos, re obtener la personalidad.
        try {
            const resp = await growApi.post('/cohen/create', { Personalidad });
            console.log(resp)
        } catch (error) {
            console.log({ error });
        }
    };

    const createActivities = async (Answer: number): Promise<void> => {
        try {
            const resp = await growApi.post('/activities/create', { user });
            console.log(resp)
        } catch (error) {
            console.log({ error });
        }
    };

    const createEvents = async (Answer: number): Promise<void> => {
        try {
            const resp = await growApi.post('/events/create', { user });
            console.log(resp)
        } catch (error) {
            console.log({ error });
        }
    };

    const createHabits = async (Answer: number): Promise<void> => {
        try {
            const resp = await growApi.post('/habits/create', { user });
            console.log(resp)
        } catch (error) {
            console.log({ error });
        }
    };

    const updateActivities = async (Answer: number): Promise<void> => {
        try {
            const resp = await growApi.post('/activities/update', { user });
            console.log(resp)
        } catch (error) {
            console.log({ error });
        }
    }

    const updateEvents = async (Answer: number): Promise<void> => {
        try {
            const resp = await growApi.post('/events/update', { user });
            console.log(resp)
        } catch (error) {
            console.log({ error });
        }
    }
    const updateHabits = async (Answer: number): Promise<void> => {
        try {
            const resp = await growApi.post('/habits/update', { user });
            console.log(resp)
        } catch (error) {
            console.log({ error });
        }

    }

    return {
        //* Métodos
        EnviarCohen,
        createActivities,
        createEvents,
        createHabits,
        updateActivities,
        updateHabits,
        updateEvents,
        EnviarMBTI
    }
}