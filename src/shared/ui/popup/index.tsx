import { FC, ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';

import './styles.css';

interface IPopupProps {
  title: string;
  show: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

const Popup: FC<IPopupProps> = ({ title, show, onClose, children }) => {
  const [visible, setVisible] = useState(false);

  const closeHandler = () => {
    setVisible(false);
    onClose && onClose();
  };

  useEffect(() => {
    setVisible(show);
  }, [show]);

  return (
    <div
      className={classNames({
        'overlay': true,
        'overlay--state-visible': visible,
      })}
      onClick={closeHandler}
    >
      <div className="popup">
        <div className="popup__header">
          <div className="popup__header__title">
            <span>{title}</span>
          </div>
          <span className="popup__close" onClick={closeHandler}>&times;</span>
        </div>
        <div className="popup__content">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
