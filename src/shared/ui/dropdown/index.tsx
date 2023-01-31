import { useState, FC, useEffect, useRef } from 'react';
import classNames from 'classnames';

import './styles.css';
import Icon, { EIcons } from '../icon';
import useClickOutside from '../../hooks/use-click-outside';

interface IDropdownItem {
 value: string;
 icon?: EIcons;
}

interface IDropdownProps {
  items?: Array<IDropdownItem>;
  placeholder?: string;
  onChange?: (item: IDropdownItem) => void,
}

const Dropdown: FC<IDropdownProps> = ({ items = [], placeholder, onChange }) => {
  const ref = useRef(null);

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState<IDropdownItem | null>(null);

  useEffect(() => {
    if (selected) {
      onChange && onChange(selected);
    }
  }, [selected]);

  const handleClickOutside = () => {
    // Your custom logic here
    if (isActive) {
      setIsActive((prev) => !prev);
    }
  }

  useClickOutside(ref, handleClickOutside)

  return (
    <div
      className="dropdown"
      ref={ref}
    >
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="dropdown__button"
      >
        {selected ? (
          <>
            {
              selected.icon && (
                <div className="dropdown__content__item__icon">
                  <Icon name={selected.icon} />
                </div>
              )
            }
            <div className="dropdown__content__item__value">
              {selected.value}
            </div>
          </>
        ) : placeholder}
      </div>
      <div
        className={classNames({
          'dropdown__content': true,
          'dropdown__content--state-visible': isActive,
          'dropdown__content--state-hidden': !isActive,
        })}
      >
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.value}
              onClick={() => {
                setSelected(item);
                setIsActive(!isActive);
              }}
              className="dropdown__content__item"
            >
              {
                item.icon && (
                  <div className="dropdown__content__item__icon">
                    <Icon name={item.icon} />
                  </div>
                )
              }
              <div className="dropdown__content__item__value">
                {item.value}
              </div>
            </div>
          ))
        ) : (
          <div
            className="dropdown__content__item"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            ...
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
