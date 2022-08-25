import React from "react";

import { useAuthStore } from "../stores";

/**
 * Higher Order Component (HoC)
 */
 function withAuth(WrappedComponent) {
    function AuthenticatedComponent(props) {
      
      // stores
      const [isAuthenticated, checkAuthentication, fetchUserAccess] = useAuthStore(
        React.useCallback(
          (s) => [s.isAuthenticated, s.checkAuthentication, s.service.fetchUserAccess],
          []
        )
      );
      
      React.useLayoutEffect(() => {
        checkAuthentication();
      }, [checkAuthentication]);

      React.useLayoutEffect(() => {
        if (isAuthenticated) {
          fetchUserAccess();
        }
      }, [isAuthenticated, fetchUserAccess]); // onAuthStateChange
  
      return <WrappedComponent {...props} />;
    }
    return AuthenticatedComponent;
  }
  
  export default withAuth;
  