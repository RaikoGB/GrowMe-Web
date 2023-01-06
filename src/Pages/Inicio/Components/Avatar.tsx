import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
// importar imagenes 
import enfjIMG from '../../../Assets/16/ENFJ.png';
import enfpIMG from '../../../Assets/16/ENFP.png';
import entjIMG from '../../../Assets/16/ENTJ.png';
import entpIMG from '../../../Assets/16/ENTP.png';
import esfjIMG from '../../../Assets/16/ESFj.png';
import esfpIMG from '../../../Assets/16/ESFP.png';
import estjIMG from '../../../Assets/16/ESTJ.png';
import estpIMG from '../../../Assets/16/ESTP.png';
import infjIMG from '../../../Assets/16/INFJ.png';
import infpIMG from '../../../Assets/16/INFP.png';
import intjIMG from '../../../Assets/16/INTJ.png';
import intpIMG from '../../../Assets/16/INTP.png';
import isfjIMG from '../../../Assets/16/ISFJ.png';
import isfpIMG from '../../../Assets/16/ISFP.png';
import istjIMG from '../../../Assets/16/ISTJ.png';
import istpIMG from '../../../Assets/16/ISTP.png';
// otras importaciones
import growApi from '../../../Services/Api/growApi';
import DataMBTI from '../../../Helpers/Types/mbti';
import Imagebg from '../../../Assets/bgAvatar.jpg';

// todo: agregar fondo tematico?

const Avatar: React.FunctionComponent = () => {

  const { user } = useSelector((state: any) => state.auth.user);

  const [list, setList] = useState<DataMBTI>();

  useEffect(() => {
    async function obtenerData(UserId: string): Promise<void> {
      try {
        const resp = await growApi.get('/MBTI/', { data: { UserId } });
        setList(resp.data.mbti);
      } catch (error) { }
    }
    try {
      void obtenerData(user);
    } catch (error) {
      console.log({ error });
    }
  }, [setList, user]);

  return (
    <>
      <Box sx={style}>
        <Box sx={stylebg}>
          {(() => {
            // switch (user.Personalidad) {
            switch (list?.Personalidad) {
              case 'ENFJ':
                return <img alt='avatar' src={enfjIMG} width={252} height={320}></img>
              case 'ENFP':
                return <img alt='avatar' src={enfpIMG} width={252} height={320}></img>
              case 'ENTJ':
                return <img alt='avatar' src={entjIMG} width={252} height={320}></img>
              case 'ENTP':
                return <img alt='avatar' src={entpIMG} width={252} height={320}></img>
              case 'ESFJ':
                return <img alt='avatar' src={esfjIMG} width={252} height={320}></img>
              case 'ESFP':
                return <img alt='avatar' src={esfpIMG} width={252} height={320}></img>
              case 'ESTJ':
                return <img alt='avatar' src={estjIMG} width={252} height={320}></img>
              case 'ESTP':
                return <img alt='avatar' src={estpIMG} width={252} height={320}></img>
              case 'INFJ':
                return <img alt='avatar' src={infjIMG} width={252} height={320}></img>
              case 'INFP':
                return <img alt='avatar' src={infpIMG} width={252} height={320}></img>
              case 'INTJ':
                return <img alt='avatar' src={intjIMG} width={252} height={320}></img>
              case 'INTP':
                return <img alt='avatar' src={intpIMG} width={252} height={320}></img>
              case 'ISFJ':
                return <img alt='avatar' src={isfjIMG} width={252} height={320}></img>
              case 'ISFP':
                return <img alt='avatar' src={isfpIMG} width={252} height={320}></img>
              case 'ISTJ':
                return <img alt='avatar' src={istjIMG} width={252} height={320}></img>
              case 'ISTP':
                return <img alt='avatar' src={istpIMG} width={252} height={320}></img>
              default:
                return <img alt='avatar' src={esfjIMG} width={252} height={320}></img>
            }
          })()}
        </Box>
      </Box>
    </>
  );
};

export default Avatar;

const style = {
  display: 'flex',
  justifyContent: 'center'
};

const stylebg = {
  display: 'flex',
  justifyContent: 'center',
  height: 320,
  width: 320,
  backgroundImage: `url(${Imagebg})`
};