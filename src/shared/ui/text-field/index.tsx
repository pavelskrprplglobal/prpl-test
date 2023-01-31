import React, {FC, useEffect, useRef} from 'react';

import './styles.css';

export type ITextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  ref?: React.Ref<HTMLInputElement>,
};

const TextField: FC<ITextFieldProps> = React.forwardRef<HTMLInputElement, ITextFieldProps>(
  ({ label, name, autoFocus, ...props },
   ref
  ) => {
  return (
    <div className="text-field">
      <label htmlFor={name}>{label}</label>
      <input ref={ref} id={name} {...props} />
    </div>
  );
});

export default TextField;
