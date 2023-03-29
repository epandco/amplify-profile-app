// RequireAuth.js
import { useLocation, Navigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import {Outlet} from "react-router";


export function RequireAuth ({ children }) {
    // const user = await Auth.currentAuthenticatedUser();
    // const session = await Auth.currentSession();
    const location = useLocation();
    const { route } = useAuthenticator((context) => [context.route]);

    const isLoggedIn = () => {
        if (route !== 'authenticated') {
            return false
        }
        return true;
    };

    if (!isLoggedIn()) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
    // const location = useLocation();
    // const { route } = useAuthenticator((context) => [context.route]);
    // if (route !== 'authenticated') {
    //     return <Navigate to="/SignIn" state={{ from: location }} replace />;
    // }
    // return children;
}

// export default RequireAuth;