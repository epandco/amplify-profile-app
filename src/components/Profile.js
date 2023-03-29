import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

export function Profile () {
    // const [user, setUser] = useState(null);
    //
    // useEffect(() => {
    //     fetchUser();
    // }, []);
    //
    // const fetchUser = async () => {
    //     try {
    //         const userData = await Auth.currentAuthenticatedUser();
    //         setUser(userData);
    //     } catch (error) {
    //         console.error('Error fetching user data:', error);
    //     }
    // };

    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            {/*<p><strong>Username:</strong> {user.username}</p>*/}
            {/*<p><strong>Email:</strong> {user.attributes.email}</p>*/}
            {/* You can add more attributes here */}
        </div>
    );
}