"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Minimum 6 characters" }),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = (data: FormData) => {
        toast.success("Logged in successfully!");
        console.log(data);
    };

    return (
        <motion.div
            className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Left Side - Image */}
            <div className="relative hidden md:flex ">
                <Image
                    src="/images/login.jpg"
                    alt="Background"
                    className="object-cover w-full h-full"
                    width={800}
                    height={400}
                />
                <div className="absolute inset-0 bg-black opacity-80"></div>

                <div className="absolute inset-0 p-12 flex flex-col justify-center text-white">
                    <h1 className="text-6xl font-bold mb-4">ThinkPost</h1>
                    <p className="text-lg max-w-md">
                        Welcome to ThinkPost – your platform to share ideas, thoughts, and inspirations.
                    </p>
                    <p className="mt-4 max-w-md text-sm text-gray-300">
                        Post your ideas, follow your favorite writers, and stay updated with daily insights.
                    </p>
                    <Link href='/'  className="border px-4 py-2 w-fit rounded-lg my-5 hover:bg-gray-600">
                        ← Back to Home
                    </Link>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex items-center justify-center p-8 bg-white">
                <Toaster position="top-right" />
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Welcome Back 👋</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div>
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                {...register("email")}
                                placeholder="you@example.com"
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                {...register("password")}
                                placeholder="********"
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Do not have an account?{" "}
                        <a href="/register" className="text-blue-600 hover:underline">
                            Register
                        </a>
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
