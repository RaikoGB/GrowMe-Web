import { useSelector } from 'react-redux';
import growApi from '../Services/Api/growApi';
import moment from 'moment';
import DataMBTI from '../Helpers/Types/mbti';

export const useEvents: any = () => {

    const { user } = useSelector((state: any) => state.auth);

    const EnviarCohen = async (stress: number, userid: String): Promise<void> => {
        try {
            const fechaRes = moment().format('YYYY-MM-DD HH:mm:ss');
            const resp = await growApi.post('/cohen/create', { userid, stress, fechaRes });
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

    const createActivities = async (UserId: String, title: String, notes: String, dificulty: number, Date: number): Promise<void> => {
        // const EnDate = moment(Date).format('YYYY-MM-DD HH:mm:ss');
        const endDate = moment(Date).format('YYYY-MM-DD');
        console.log("🚀 ~ file: useEvents.ts:34 ~ createActivities ~ EnDate", endDate)
        try {
            const resp = await growApi.post('/activities/create', { UserId, title, notes, dificulty, endDate });
            console.log("🚀 ~ file: useEvents.ts:34 ~ createActivities ~ resp", resp)
        } catch (error) {
            console.log("🚀 ~ file: useEvents.ts:38 ~ createActivities ~ error", error)
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