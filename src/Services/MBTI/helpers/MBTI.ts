import PyR from './PyR.json';

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
            // console.log(Random);
            // console.log(this.Qselected[index].toString());
        }
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
