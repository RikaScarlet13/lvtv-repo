// src/components/UserRoles.tsx

import React, { useEffect, useState } from "react";
import axios from "axios";

interface UserRolesResponse {
    roles: string[];
}

const UserRoles: React.FC = () => {
    const [roles, setRoles] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await axios.get<UserRolesResponse>(
                    "/api/user/roles",
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`, // Adjust this based on your auth setup
                        },
                    }
                );
                setRoles(response.data.roles);
                setLoading(false);
            } catch (error) {
                if (error instanceof Error) {
                    // Now we can safely access error.message
                    setError(error.message);
                } else {
                    // Handle the case where error is not an Error object
                    setError(String(error));
                }
                setLoading(false);
            }
        };

        fetchRoles();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>User Roles</h2>
            <ul>
                {roles.map((role, index) => (
                    <li key={index}>{role}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserRoles;
