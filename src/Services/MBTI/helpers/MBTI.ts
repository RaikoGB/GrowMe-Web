import PyR from './PyR.json';
import DataMBTI from '../../../Helpers/Types/mbti';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class MBTI {
    Qselected: string[] = [];
    Aselected: string[] = [];
    Bselected: string[] = [];
    QIndex: number[] = [];

    public constructor() {
        for (let index = 0; index < 5; index++) {
            const Random = Math.floor(Math.random() * (9 - 0 + 1));
            this.Qselected[index] = PyR.Q[Random];
            this.Aselected[index] = PyR.A[Random];
            this.Bselected[index] = PyR.B[Random];
            this.QIndex[index] = Random;
        }
    }

    public getPuntaje(Answer: number[]): DataMBTI {
        const res: DataMBTI = {
            Personalidad: "",
            E: 0,
            I: 0,
            N: 0,
            S: 0,
            T: 0,
            F: 0,
            J: 0,
            P: 0,
        };
        // Cada columna define diferentes aspectos del test, revisar pagina 5 del MBTI personality test para dudas
        const col1 = [0, 7, 14, 21, 28, 35, 42, 49, 56, 63];
        const col2 = [1, 8, 15, 22, 29, 36, 43, 50, 57, 64];
        const col3 = [2, 9, 16, 23, 30, 37, 44, 51, 58, 65];
        const col4 = [3, 10, 17, 24, 31, 38, 45, 52, 59, 66];
        const col5 = [4, 11, 18, 25, 32, 39, 46, 53, 60, 67];
        const col6 = [5, 12, 19, 26, 33, 40, 47, 54, 61, 68];
        const col7 = [6, 13, 20, 27, 34, 41, 48, 55, 62, 69];
        // Contadores para los resultados del test
        const col1Total = [0, 0];
        const col2Total = [0, 0];
        const col3Total = [0, 0];
        const col4Total = [0, 0];
        const col5Total = [0, 0];
        const col6Total = [0, 0];
        const col7Total = [0, 0];
        // asignar totales de cada columna
        for (let i = 0; i < this.QIndex.length; i++) {
            if (col1.includes(this.QIndex[i])) {
                if (Answer[i] === 0) {
                    col1Total[0]++;
                }
                else {
                    col1Total[1]++;
                }
            }
            if (col2.includes(this.QIndex[i])) {
                if (Answer[i] === 0) {
                    col2Total[0]++;
                }
                else {
                    col2Total[1]++;
                }
            }
            if (col3.includes(this.QIndex[i])) {
                if (Answer[i] === 0) {
                    col3Total[0]++;
                }
                else {
                    col3Total[2]++;
                }
            }
            if (col4.includes(this.QIndex[i])) {
                if (Answer[i] === 0) {
                    col4Total[0]++;
                }
                else {
                    col4Total[1]++;
                }
            }
            if (col5.includes(this.QIndex[i])) {
                if (Answer[i] === 0) {
                    col5Total[0]++;
                }
                else {
                    col6Total[1]++;
                }
            }
            if (col6.includes(this.QIndex[i])) {
                if (Answer[i] === 0) {
                    col6Total[0]++;
                }
                else {
                    col6Total[1]++;
                }
            }
            if (col7.includes(this.QIndex[i])) {
                if (Answer[i] === 0) {
                    col7Total[0]++;
                }
                else {
                    col7Total[1]++;
                }
            }
        }
        // Poner en el objeto Respuesta los datos totales correspondientes de acuerdo al test de MBTI
        res.E = col1Total[0];
        res.I = col1Total[1];
        res.S = col2Total[0] + col3Total[0];
        res.N = col2Total[1] + col3Total[1];
        res.T = col4Total[0] + col5Total[0];
        res.F = col4Total[1] + col5Total[1];
        res.J = col4Total[0] + col5Total[0];
        res.P = col4Total[1] + col5Total[1];
        // Definir los cuatro parametros de personalidad por letras
        if (res.E >= res.I) {
            res.Personalidad = res.Personalidad.concat("E");
        } else {
            res.Personalidad = res.Personalidad.concat("I");
        }
        if (res.S >= res.N) {
            res.Personalidad = res.Personalidad.concat("S");
        } else {
            res.Personalidad = res.Personalidad.concat("N");
        }
        if (res.T >= res.F) {
            res.Personalidad = res.Personalidad.concat("T");
        } else {
            res.Personalidad = res.Personalidad.concat("F");
        }
        if (res.J >= res.P) {
            res.Personalidad = res.Personalidad.concat("J");
        } else {
            res.Personalidad = res.Personalidad.concat("P");
        }
        // Regresar el objeto con los resultados
        return res;
    }

    public getAselected(index: number): string {
        return this.Aselected[index];
    }

    public getBselected(index: number): string {
        return this.Bselected[index];
    }

    public getQselected(index: number): string {
        return this.Qselected[index];
    }

}
