// Imports
import * as React from 'react';
import { useRouter } from 'next/router';
import { useContext } from 'react';

// Context
import { UserContext } from '../../../context/UserContext';

// Helpers
import { RoutingPath } from '../../../helpers/RoutingPath';

// UnAuthWrapper för att dölja överflödiga sidor för en inloggad användare, primärt sidor för inlogg och registering 

export const UnAuthWrapper = ({ children }) => {
  const router = useRouter();
  const { user } = useContext(UserContext);

  React.useEffect(() => {
    if (user) {
      router.push(RoutingPath.Home);
    }
  });

  return <>{children}</>;
};
