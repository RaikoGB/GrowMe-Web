import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import cohenData from '../../../Helpers/Types/cohenData';
import growApi from '../../../Services/Api/growApi';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProgresoCohen: React.FunctionComponent = () => {
  // Para info
  const { user } = useSelector((state: any) => state.auth.user);

  const [list, setList] = useState<cohenData>();

  useEffect(() => {
    async function obtenerlista(UserId: string): Promise<void> {
      try {
        const resp = await growApi.get('/cohen/', {
          data: { UserId }
        });
        setList(resp.data.cohen);
      } catch (error) { }
    }
    try {
      void obtenerlista(user);
    } catch (error) {
      console.log({ error });
    }
  }, [setList, user]);


  return (
    <>
      <Box sx={style}>
        <Line
          options={options}
          data={{
            datasets: [
              {
                label: "Progreso por Semana",
                data: [list?.fechaRes, list?.stress],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
            ],
          }}
          height={320}
          width={300} ></Line>
      </Box>
    </>
  );
};

export default ProgresoCohen;

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Progreso en Resilencia',
    },
  },
};

const style = {
  display: 'flex',
  justifyContent: 'center'
};

// recibir los datos como MBTI y pasar el objeto xcompleto, se necesita una interface y un archivo ts que asigne el objeto
/* export const Data = {
  datasets: [
    {
      label: 'Dataset 1',
      data: [{ x: '2016-12-25', y: 20 }, { x: '2016-12-26', y: 10 }],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [{ x: '2016-12-25', y: 50 }, { x: '2016-12-26', y: 30 }],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ]
}
*/