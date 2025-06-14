"use client"
import { User } from '@/types/types';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import Loader from '@/app/components/Loader';
import toast from 'react-hot-toast';


const Users = () => {
    const { data: users, isLoading, refetch } = useQuery<User>({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('/api/users')
            return res.data
        }
    })




    const handleRoleChange = async (id: string, newRole: User["role"]) => {
        console.log(id, newRole);
        try {
            const res = await axios.put(`/api/users/update-by-id/${id}`, { role: newRole })
            if (res.status === 200) {
                refetch()
                toast.success("Role updated")
            }

        } catch (error) {
            if (error) {

                toast.error(error?.message);
            }

        }

    };


    const handleDelete = async (id: string) => {
        console.log(id);
        try {
            const res = await axios.delete(`/api/users/update-by-id/${id}`,)
            console.log(res);
            if (res.status === 200 ) {
                refetch()
                toast.success("Deleted user")
            }

        } catch (error) {
            if (error) {

                toast.error(error?.message);
            }

        }
    };

    if (isLoading || !users) return <Loader />
    return (
        <div>
            <div className="max-w-6xl mx-auto p-6  rounded-2xl">
                <h2 className="text-2xl font-bold mb-6">User Management</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden dark:bg-card">
                        <thead className="bg-muted text-left">
                            <tr>
                                <th className="px-4 py-3">No</th>
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Email</th>
                                <th className="px-4 py-3">Role</th>
                                {/* <th className="px-4 py-3">Status</th> */}
                                <th className="px-4 py-3 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((user, idx) => (
                                <tr key={user?.id} className="border-t hover:bg-secondary">
                                    <td className="px-4 py-3 font-medium">{idx + 1}</td>
                                    <td className="px-4 py-3 font-medium">{user?.name}</td>
                                    <td className="px-4 py-3">{user?.email}</td>
                                    <td className="px-4 py-3 capitalize">{user?.role}</td>
                                    {/* <td className={`px-4 py-3 capitalize ${user?.status === "active" ? "text-green-600" : "text-red-600"}`}>
                                        {user?.status}
                                    </td> */}
                                    <td className="px-4 py-3 text-center">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <MoreVertical className="w-4 h-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                {
                                                    user?.role === 'USER' ? (
                                                        <DropdownMenuItem onClick={() => handleRoleChange(user?._id, "ADMIN")}>
                                                            Make Admin
                                                        </DropdownMenuItem>
                                                    ) : (
                                                        <DropdownMenuItem onClick={() => handleRoleChange(user?._id, "USER")}>
                                                            Make User
                                                        </DropdownMenuItem>
                                                    )
                                                }


                                                {/* <DropdownMenuItem onClick={() => handleRoleChange(user?.id, "viewer")}>
                                                    Make Viewer
                                                </DropdownMenuItem> */}
                                                {/* <DropdownMenuItem onClick={() => handleToggleStatus(user?.id)}>
                                                    {user?.status === "active" ? "Suspend User" : "Activate User"}
                                                </DropdownMenuItem> */}
                                                <DropdownMenuItem onClick={() => handleDelete(user?._id)} className="text-red-600">
                                                    Delete User
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </td>
                                </tr>
                            ))}
                            {users?.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="text-center text-muted-foreground py-6">
                                        No users found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;