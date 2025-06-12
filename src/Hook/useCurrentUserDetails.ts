import { User } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
export function useCurrentUserDetails() {
    const { data: session } = useSession();

    const { data: userDetails = null, isLoading, refetch } = useQuery<User>({
        queryKey: ['user', session?.user?.email],
        enabled: !!session?.user?.email,
        queryFn: async () => {
            try {
                const res = await axios.get(`/api/users/${session?.user?.email}`);
                return res.data || {}; // Always return an object
            } catch (error) {
                if (error) {

                    toast.error("Failed to fetch user details");
                    return {}; // Fallback: return empty object
                }
            }
        }
    });

    return {
        userDetails,
        isLoading,
        refetch
    };
}