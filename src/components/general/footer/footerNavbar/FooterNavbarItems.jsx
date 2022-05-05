// imports
import React from 'react';

import { ActiveLink } from '../../../../utils/ActiveLink';

export const FooterNavbarItems = ({ items }) => {
  const renderFooterNavigation = () => {
    return items.map((item) => {
      return (
        <>
          {/* <p key={item.id}>{item.name}</p> */}
          <ActiveLink key={item.id} linkUrl={item.link} linkText={item.name} />
        </>
      );
    });
  };
  return <div>{renderFooterNavigation()}</div>;
};
