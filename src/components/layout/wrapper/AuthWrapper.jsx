// Imports
import * as React from 'react';
import { useRouter } from 'next/router';
import { useContext } from 'react';

// Context
import { UserContext } from '../../../context/UserContext';

// Helpers
import { RoutingPath } from '../../../helpers/RoutingPath';

// AuthWrapper för att dölja sidor som en gäst användare inte får tillgång till

export const AuthWrapper = ({ children }) => {
  const router = useRouter();
  const { user } = useContext(UserContext);

  React.useEffect(() => {
    if (!user) {
      router.push(RoutingPath.Login);
    }
  });
  return <>{children}</>;
};
