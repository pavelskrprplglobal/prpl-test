import React, {FC} from 'react';
import classNames from 'classnames';

import './styles.css';

export enum EButtonThemes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger',
}

export type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  theme?: EButtonThemes;
};

const Button: FC<IButtonProps> = ({
  text,
  theme = EButtonThemes.PRIMARY,
  ...props
}) => (
  <button
    className={classNames({
      'button': true,
      'button--state-primary': theme === EButtonThemes.PRIMARY,
      'button--state-secondary': theme === EButtonThemes.SECONDARY,
      'button--state-danger': theme === EButtonThemes.DANGER,
    })}
    {...props}
  >
    {text}
  </button>
);

export default Button;
