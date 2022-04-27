import React from 'react';

// context
import { UserContext } from '../../../context/UserContext';

// headers
import { GuestHeader } from './GuestHeader';
import { AdminHeader } from './AdminHeader';
import { UserHeader } from './UserHeader';

export const Header = () => {
  //   const { user } = useContext(UserContext);

  // skapa funktionalitet så att denna kollar mot context istället
  // refaktorisera denna koden när det är fixat 

  const userLevel = 1;

  const renderHeader = () => {
    if (userLevel === 3) {
      return <AdminHeader />;
    } else if (userLevel === 2) {
      return <UserHeader />;
    } else {
      return <GuestHeader />;
    }
  };

  return <>{renderHeader()}</>;
};
