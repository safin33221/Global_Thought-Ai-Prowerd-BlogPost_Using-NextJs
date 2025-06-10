
"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export function useCurrentUserDetails() {
    const { data: session, status } = useSession();
    const [userDetails, setUserDetails] = useState<any >(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
;

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (session?.user?.email) {
                try {
                    const res = await fetch(`/api/users/${session?.user?.email}`);
                    console.log(res);
                    if (!res.ok) throw new Error("Failed to fetch user details");
                    const data = await res.json();
                    setUserDetails(data);
                } catch (err: any) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            }
        };

        if (status === "authenticated") {
        }
        fetchUserDetails();
    }, [session, status]);

    return {
        userDetails,
        isLoading: loading,
        error,
    };
}
