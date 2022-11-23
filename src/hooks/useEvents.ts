import { useSelector } from 'react-redux';
import growApi from '../Services/Api/growApi';
import moment from 'moment';

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

    const createActivities = async (Answer: number): Promise<void> => {
        try {
            const now = moment().format("YYYY-MM-DD");
            const resp = await growApi.post('/cohen/create', { user, Answer, now });
            console.log(resp)
        } catch (error) {
            console.log({ error });
        }
    };

    const createEvents = async (Answer: number): Promise<void> => {
        try {
            const now = moment().format("YYYY-MM-DD");
            const resp = await growApi.post('/cohen/create', { user, Answer, now });
            console.log(resp)
        } catch (error) {
            console.log({ error });
        }
    };

    const createHabits = async (Answer: number): Promise<void> => {
        try {
            const now = moment().format("YYYY-MM-DD");
            const resp = await growApi.post('/cohen/create', { user, Answer, now });
            console.log(resp)
        } catch (error) {
            console.log({ error });
        }
    };


    return {

        //* Métodos
        EnviarCohen,
        createActivities,
        createEvents,
        createHabits
    }
}