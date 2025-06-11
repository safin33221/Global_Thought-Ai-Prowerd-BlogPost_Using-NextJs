
"use client";

import { User } from "@/types/types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


export function useCurrentUserDetails() {
    const { data: session, status } = useSession();
    const [userDetails, setUserDetails] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    ;

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (session?.user?.email) {
                try {
                    const res = await fetch(`/api/users/${session?.user?.email}`);
          
                    if (!res.ok) throw new Error("Failed to fetch user details");
                    const data = await res.json();
                    setUserDetails(data);
                } catch (err) {
                    if (err instanceof Error) {
                        setError(err.message);
                    } else {
                        toast.error("An unknown error occurred");
                    }
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
