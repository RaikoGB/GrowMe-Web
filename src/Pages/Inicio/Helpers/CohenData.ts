export interface CohenD {
    id: number
    estres: number
    fecha: Date
}


export const CohenData = {
    datasets: [
        {
            label: 'Dataset 1',
            data: [{x:'2016-12-25', y:20}, {x:'2016-12-26', y:10}],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: [{x:'2016-12-25', y:50}, {x:'2016-12-26', y:30}],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ]
}