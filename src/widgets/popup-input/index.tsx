import React, {useEffect, useRef, useState} from 'react';

import './styles.css';

import Popup from '../../shared/ui/popup';
import TextField from '../../shared/ui/text-field';
import Button from '../../shared/ui/button';

const PopupInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [visible, setVisibility] = useState(false);

  const openPopup = () => {
    setVisibility(true);
  };

  /**
   * Let's try to focus the input and make it managed (autoFocus will not work)
   */
  useEffect(() => {
    if (inputRef && visible) {
      /**
       * 100% managed variant for most browsers each time the popup open
       */
      setTimeout(() => {
        inputRef?.current?.focus();
      }, 100);
    }
  }, [visible, inputRef]);

  return (
    <div className="popup-input">
      <Button text="Open popup" onClick={openPopup} />

      <Popup title="Popup with input" onClose={() => setVisibility(false)} show={visible}>
        <TextField ref={inputRef} label="My text field" placeholder="Type your text here" autoFocus />
      </Popup>
    </div>
  );
};

export default PopupInput;
