import { FC } from 'react';

// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';

import './styles.css';

export enum EIcons {
  REACT = 'react',
  AIRPLAY = 'airplay',
  ANDROID = 'android',
}

interface IIconProps {
  name: string;
}

const Icon: FC<IIconProps> = ({ name }) => {
  return (
    <>
      {name === EIcons.REACT && <Unicons.UilReact />}
      {name === EIcons.AIRPLAY && <Unicons.UilAirplay />}
      {name === EIcons.ANDROID && <Unicons.UilAndroid />}
    </>
  );
};

export default Icon;
