"use client"
import React, { useRef, useState } from "react";
import { Pencil } from "lucide-react";
import Image from "next/image";

import Loader from "@/app/components/Loader";
import { useCurrentUserDetails } from "@/Hook/useCurrentUserDetails";
import { handleImageUpload } from "@/utils";
import axios from "axios";
import toast from "react-hot-toast";

const ProfilePage = () => {

    const fileInputRef = useRef<HTMLInputElement>(null);
    const { userDetails, isLoading } = useCurrentUserDetails();
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const handleEditClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
            setImageFile(file);

        }
        else {
            setPreviewUrl(null)
        }
    };
    const handleSaveChangePhoto = async () => {
        if(!imageFile) return toast.error("Image File not found")
        const url = await handleImageUpload(imageFile)

        const res = await axios.put(`/api/users/${userDetails?.email}`, { url })
        if (res.status === 201) {
            setPreviewUrl(null)
            setImageFile(null)
        }

    }

    if (isLoading) return <Loader />;

    return (
        <div className="min-h-fit mt-20 flex items-center justify-center p-4">
            <div className="w-full max-w-3xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-2xl shadow-xl p-6 relative transition-all duration-300">

                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                        <Image
                            src={previewUrl ? previewUrl : userDetails?.avatarUrl || "https://i.pravatar.cc/100"}
                            alt="Profile"
                            className="w-24 h-24 rounded-full object-cover ring-2 ring-blue-500"
                            width={96}
                            height={96}
                        />
                        <button
                            onClick={handleEditClick}
                            className="absolute bottom-0 right-0 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                            aria-label="Edit"
                        >
                            <Pencil size={14} className="text-gray-600 dark:text-gray-300" />
                        </button>

                        {/* Hidden file input */}
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold">{userDetails?.name}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{userDetails?.email}</p>
                    </div>
                </div>
                {previewUrl && (
                    <div className="mt-6 flex gap-4">
                        <button
                            className="flex-1 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold py-2 rounded-xl shadow-md transition"

                            onClick={() => {
                                handleSaveChangePhoto();
                            }}
                        >
                            Save Change
                        </button>
                        <button
                            className="flex-1 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100 font-semibold py-2 rounded-xl shadow-md transition"
                            onClick={() => setPreviewUrl(null)}
                        >
                            Cancel
                        </button>
                    </div>
                )}

                {/* ... rest of the code */}

                {/* Info Fields */}
                <div className="space-y-4  text-lg">
                    <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                        <span className="text-gray-500">Name</span>
                        <span className="font-medium">{userDetails?.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                        <span className="text-gray-500">Email account</span>
                        <span className="font-medium">{userDetails?.email}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                        <span className="text-gray-500">Mobile number</span>
                        <span className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:underline">
                            Add number
                        </span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                        <span className="text-gray-500">Location</span>
                        <span className="font-medium">USA</span>
                    </div>
                </div>

                {/* Save Button */}

            </div>
        </div>
    );
};

export default ProfilePage;
