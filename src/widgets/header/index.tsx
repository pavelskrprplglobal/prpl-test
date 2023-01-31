import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import './styles.css';
import Button from '../../shared/ui/button';
import { ERoutes, ROUTES } from '../../pages';
import Dropdown from '../../shared/ui/dropdown';
import PopupInput from '../popup-input';
import { EIcons } from '../../shared/ui/icon';
import { getUserData, getUserDataAsync } from '../../entities/user/model/user';

/**
 *
 * Imagine this is a user menu with some static items :)
 *
 */
const DropdownStaticItems = [
  {
    value: 'React',
    icon: EIcons.REACT,
  },
  {
    value: 'Airplay',
    icon: EIcons.AIRPLAY,
  },
];

const Header = React.memo(() => {
  const [isOpenBurger,setIsOpenBurger]=useState<boolean>(false)

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { isFetching } = getUserDataAsync()(dispatch);
  const userData = getUserData();

  const goHome = () => {
    navigate(ROUTES[ERoutes.HOME].path);
    setIsOpenBurger(false);
  };

  const goProfile = () => {
    navigate(ROUTES[ERoutes.PROFILE].path);
    setIsOpenBurger(false);
  };

  const handleToggle = () =>{
    setIsOpenBurger((prev) => !prev)
  }

  useEffect(() => {
    if (userData) {
      /**
       *
       * Just add our new item for the array for tests
       *
       */
      DropdownStaticItems.unshift({
        value: userData.name,
        icon: EIcons.ANDROID,
      });
    }
  }, [userData]);

  return (
    <header>
      <div className="header">
        <div className={`header__burger ${isOpenBurger?"open":""}`} onClick={handleToggle}>
          <span/>
          <span/>
          <span/>
        </div>

        <div className="header__container">
          <PopupInput />

          <nav className={classNames({
            'header__menu': true,
            'header__menu--state-open': isOpenBurger,
            'header__menu--state-close': !isOpenBurger
          })}>
            <div className="header__menu__right-side">
              <div className="header__menu__right-side__item">
                <Button text="Main page" onClick={goHome} />
              </div>
              <div className="header__menu__right-side__item">
                <Button text="Profile page" onClick={goProfile} />
              </div>
              <div className="header__menu__right-side__item">
                <Dropdown items={DropdownStaticItems} placeholder={isFetching ? 'Loading...' : 'Choose one'} />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
});

export default Header;
