import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import growApi from '../../../Services/Api/growApi';
import moment from 'moment';
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
  const user = useSelector((state: any) => state.auth.user);

  // const [list, setList] = useState<cohenDatas>();
  const [list, setList] = useState([]);
  // const [chartData, setChartData] = useState({});

  useEffect(() => {
    async function obtenerlista(UserId: string): Promise<void> {
      try {
        const resp = await growApi.get(`/cohen/${UserId}`, { data: { UserId } });
        setList(resp.data);
      } catch (error) {
        console.log("🚀 ~ file: ProgresoCohen.tsx:42 ~ useEffect ~ error", error)
      }
    }
    try {
      void obtenerlista(user.uid);
    } catch (error) {
      console.log("🚀 ~ file: ProgresoCohen.tsx:46 ~ error", error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, setList]);

  // recibir los datos como MBTI y pasar el objeto xcompleto, se necesita una interface y un archivo ts que asigne el objeto
  const Data = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    labels: list.map(y => moment(y.fechaRes).format('YYYY-MM-DD')),
    datasets: [{
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      data: list.map(x => x.stress),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }]
  }

  return (
    <>
      <Box sx={style}>
        <Line
          options={options}
          data={Data}
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


