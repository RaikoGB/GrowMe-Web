/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useSelector } from 'react-redux';
import growApi from '../Services/Api/growApi';
import moment from 'moment';
import DataMBTI from '../Helpers/Types/mbti';

export const useEvents: any = () => {
    const user = useSelector((state: any) => state.auth);

    const EnviarCohen = async (stress: number, UserId: String): Promise<void> => {
        try {
            const fechaRes = moment().format('YYYY-MM-DD');
            console.log("🚀 ~ file: useEvents.ts:13 ~ EnviarCohen ~ fechaRes", fechaRes);
            const resp = await growApi.post('/cohen/create', { UserId, stress, fechaRes });
            console.log("🚀 ~ file: useEvents.ts:15 ~ EnviarCohen ~ resp", resp);
        } catch (error) {
            console.log("🚀 ~ file: useEvents.ts:17 ~ EnviarCohen ~ error", error);
        }
    };

    const EnviarMBTI = async (personaity: DataMBTI, UserId: string): Promise<void> => {
        console.log("🚀 ~ file: useEvents.ts:22 ~ EnviarMBTI ~ personaity", personaity)
        if (user.MBTI !== true) {
            try {
                const Personalidad = personaity.Personalidad;
                const E = personaity.E;
                const I = personaity.I;
                const N = personaity.N;
                const S = personaity.S;
                const T = personaity.T;
                const F = personaity.F;
                const J = personaity.J;
                const P = personaity.P;
                const resp = await growApi.post('/mbti/create', { UserId, Personalidad, E, I, N, S, T, F, J, P });
                console.log("🚀 ~ file: useEvents.ts:35 ~ EnviarMBTI ~ resp", resp)
            } catch (error) {
                console.log("🚀 ~ file: useEvents.ts:37 ~ EnviarMBTI ~ error", error)
            }
        }
        else {
            try {
                const res = await growApi.get(`/mbti/${UserId}`, { data: { UserId } });
                console.log("🚀 ~ file: useEvents.ts:44 ~ EnviarMBTI ~ res", res)
                const E = personaity.E + res.data.E;
                const I = personaity.I + res.data.I;
                const N = personaity.N + res.data.N;
                const S = personaity.S + res.data.S;
                const T = personaity.T + res.data.T;
                const F = personaity.F + res.data.F;
                const J = personaity.J + res.data.J;
                const P = personaity.P + res.data.P;
                let Personalidad = "";
                if (E >= I) {
                    Personalidad = Personalidad.concat("E");
                } else {
                    Personalidad = Personalidad.concat("I");
                }
                if (S >= N) {
                    Personalidad = Personalidad.concat("S");
                } else {
                    Personalidad = Personalidad.concat("N");
                }
                if (T >= F) {
                    Personalidad = Personalidad.concat("T");
                } else {
                    Personalidad = Personalidad.concat("F");
                }
                if (J >= P) {
                    Personalidad = Personalidad.concat("J");
                } else {
                    Personalidad = Personalidad.concat("P");
                }
                const resp = await growApi.post('/mbti/update', { UserId, Personalidad, E, I, N, S, T, F, J, P });
                console.log("🚀 ~ file: useEvents.ts:76 ~ EnviarMBTI ~ resp", resp)
            } catch (error) {
                console.log("🚀 ~ file: useEvents.ts:77 ~ EnviarMBTI ~ error", error)
            }
        }
    };

    const createActivities = async (UserId: String, title: String, notes: String, dificulty: number, Date: number): Promise<void> => {
        const endDate = moment(Date).format('YYYY-MM-DD');
        try {
            const resp = await growApi.post('/activities/create', { UserId, title, notes, dificulty, endDate });
            console.log("🚀 ~ file: useEvents.ts:34 ~ createActivities ~ resp", resp)
        } catch (error) {
            console.log("🚀 ~ file: useEvents.ts:38 ~ createActivities ~ error", error)
        }
    };

    const createEvents = async (UserId: String, title: String, notes: String, Date: number, sDate: number): Promise<void> => {
        const endEvent = moment(Date).format('YYYY-MM-DD HH:mm:ss');
        const startEvent = moment(sDate).format('YYYY-MM-DD HH:mm:ss');
        try {
            const resp = await growApi.post('/events/create', { UserId, title, notes, endEvent, startEvent });
            console.log("🚀 ~ file: useEvents.ts:47 ~ createEvents ~ resp", resp);
        } catch (error) {
            console.log("🚀 ~ file: useEvents.ts:49 ~ createEvents ~ error", error);
        }
    };

    const createHabits = async (UserId: String, title: String, notes: String, dificulty: number, EndDate: number, dateTime: number, Time: number): Promise<void> => {
        const Schedule = moment(dateTime).format('HH:mm:ss');
        try {
            const resp = await growApi.post('/habits/create', { UserId, title, notes, dificulty, EndDate, Schedule, Time });
            console.log("🚀 ~ file: useEvents.ts:56 ~ createHabits ~ resp", resp)
        } catch (error) {
            console.log("🚀 ~ file: useEvents.ts:108 ~ createHabits ~ error", error)
        }
    };

    const updateActivities = async (id: number, title: String, notes: String, dificulty: number, Date: number): Promise<void> => {
        const endDate = moment(Date).format('YYYY-MM-DD');
        const UserId = user.uid;
        try {
            const resp = await growApi.post('/activities/update', { UserId, id, title, notes, dificulty, endDate });
            console.log("🚀 ~ file: useEvents.ts:118 ~ updateActivities ~ resp", resp);
        } catch (error) {
            console.log("🚀 ~ file: useEvents.ts:120 ~ updateActivities ~ error", error);
        }
    }

    const DeleteActivities = async (id: number): Promise<void> => {
        const UserId = user.uid;
        try {
            const resp = await growApi.post('/activities/delete', { UserId, id, });
            console.log("🚀 ~ file: useEvents.ts:128 ~ DeleteActivities ~ resp", resp);
        } catch (error) {
            console.log("🚀 ~ file: useEvents.ts:130 ~ DeleteActivities ~ error", error);
        }
    }

    const DeleteHabits = async (id: number): Promise<void> => {
        const UserId = user.uid;
        try {
            const resp = await growApi.post('/habits/delete', { UserId, id, });
            console.log("🚀 ~ file: useEvents.ts:136 ~ DeleteHabits ~ resp", resp)
        } catch (error) {
            console.log("🚀 ~ file: useEvents.ts:138 ~ DeleteHabits ~ error", error)
        }
    }

    const DeleteEvents = async (id: number): Promise<void> => {
        const UserId = user.uid;
        try {
            const resp = await growApi.post('/events/delete', { UserId, id, });
            console.log("🚀 ~ file: useEvents.ts:145 ~ DeleteEvents ~ resp", resp)
        } catch (error) {
            console.log("🚀 ~ file: useEvents.ts:148 ~ DeleteEvents ~ error", error)
        }
    }

    const updateEvents = async (id: number, title: String, notes: String, Date: number, sDate: number): Promise<void> => {
        const UserId = user.uid;
        const endEvent = moment(Date).format('YYYY-MM-DD HH:mm:ss');
        const startEvent = moment(sDate).format('YYYY-MM-DD HH:mm:ss');
        try {
            const resp = await growApi.post('/events/update', { UserId, id, title, notes, endEvent, startEvent });
            console.log("🚀 ~ file: useEvents.ts:139 ~ updateEvents ~ resp", resp)
        } catch (error) {
            console.log("🚀 ~ file: useEvents.ts:141 ~ updateEvents ~ error", error)
        }
    }

    const updateHabits = async (id: number, title: String, notes: String, dificulty: number, EndDate: number, dateTime: number, Time: number): Promise<void> => {
        const UserId = user.uid;
        const Schedule = moment(dateTime).format('HH:mm:ss');
        try {
            const resp = await growApi.post('/habits/update', { UserId, id, title, notes, dificulty, EndDate, Schedule, Time });
            console.log("🚀 ~ file: useEvents.ts:149 ~ updateHabits ~ resp", resp)
        } catch (error) {
            console.log("🚀 ~ file: useEvents.ts:151 ~ updateHabits ~ error", error)
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
        EnviarMBTI,
        DeleteActivities,
        DeleteHabits,
        DeleteEvents
    }
}