import React, { useState, useEffect } from 'react';
// components/Protected.js
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';
import { useLocation } from 'react-router-dom';
import {useNavigate} from "react-router";
import '../Styles/ProfileStyles.css'
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createStatusUpdates } from '../graphql/mutations';
import { listStatusUpdates } from '../graphql/queries';

export function Profile () {
    // const { route } = useAuthenticator((context) => [context.route]);
    //
    // const message =
    //     route === 'authenticated' ? 'FIRST PROTECTED ROUTE!' : 'Loading...';
    // return <Heading level={1}>{message}</Heading>;

    const { route } = useAuthenticator((context) => [context.route]);
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(null);
    const [status, setStatus] = useState([]);
    const [statusUpdate, setStatusUpdate] = React.useState('');
    const maxCharacters = 250;

    useEffect(() => {
        if (location.pathname === '/profile') {
            fetchUserAndLoadUpdatedStatus();
        }
    }, [location]);

    async function fetchUserAndLoadUpdatedStatus() {
        const userData = await fetchUser();

        if (userData) {
            setUser(userData);
            const newStatus = await loadUpdatedStatus(userData);
            setStatus(newStatus);
        }
    }
    async function fetchUser() {
        try {
            const userData = await Auth.currentAuthenticatedUser();
            return userData;
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    async function loadUpdatedStatus(user) {
        const statusResponse = await API.graphql(
            graphqlOperation(listStatusUpdates, {
                filter: {
                    user_id: {
                        eq: user.attributes.sub.toString(),
                    },
                },
            })
        );

        const newStatus = statusResponse.data.listStatusUpdates.items.filter(
            (item) => !status.includes(item)
        );
        return newStatus;
    }

    const handleStatusUpdateChange = (e) => {
        if (e.target.value.length <= maxCharacters) {
            setStatusUpdate(e.target.value);
        }
    };

    const handleSubmitStatusUpdate = async () => {
        console.log('Submit status update:', statusUpdate);


        // Add your code to submit the status update to the backend here.
        const statusUpdateInput = {
            user_id: user?.attributes?.sub,
            status: statusUpdate,
            create_on: new Date().toISOString(),
        };

        try {
            console.log(statusUpdateInput);
            await API.graphql(graphqlOperation(createStatusUpdates, { input: statusUpdateInput }));
            const newStatus = await loadUpdatedStatus(user);
            setStatus(newStatus);
            setStatusUpdate('');
        } catch (error) {
            console.error('Error submitting status update:', error);
        }
    };

    return (
        <div className="profile-page">
            <div className="left-section">
                <h2>User Profile</h2>
                <div className="profile-picture-container">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="profile-placeholder"
                        className="profile-picture"
                    />
                </div>
                <div className="user-information">
                    {user ? (
                        <>
                            <p><strong>Name:</strong> {user.attributes.name}</p>
                            <p><strong>Email:</strong> {user.attributes.email}</p>
                             You can add more attributes here
                        </>
                    ) : (
                        <p>Loading user information...</p>
                    )}
                </div>
            </div>
            <div className="right-section">
                <h3>Status Update</h3>
                <div className="status-update-list">
                    {status
                        .sort((a, b) => new Date(b.create_on) - new Date(a.create_on))
                        .map((item) => (
                        <div key={item.id} className="status-update-item">
                            <p>{item.status}</p>
                            <p>
                                    {new Date(item.create_on).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
                <textarea
                    className="status-update-textarea"
                    placeholder="What's on your mind?"
                    value={statusUpdate}
                    onChange={handleStatusUpdateChange}
                ></textarea>
                <div className="status-update-controls">
                    <span>{statusUpdate.length}/{maxCharacters}</span>
                    <button
                        className="status-update-submit-button"
                        onClick={handleSubmitStatusUpdate}
                    >
                        Add Status Update
                    </button>
                </div>
            </div>
        </div>
    );
}