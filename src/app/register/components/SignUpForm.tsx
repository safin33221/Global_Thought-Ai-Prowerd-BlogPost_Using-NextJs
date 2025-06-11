"use client"
import React from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import registerUser from '@/app/actions/auth/register';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const schema = z.object({
    name: z.string(),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Minimum 6 characters" }),
});

type FormData = z.infer<typeof schema>;

const SignUpForm = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = async (data: FormData) => {
        const result = await registerUser(data)
  
        if (result?.acknowledged === true) {
            toast.success('user register success. Login Now!')
            router.push('/login')
        } else {
            toast.error(result && 'message' in result ? result.message : 'Registration failed')
        }


    };
    return (
        <div className="flex items-center justify-center p-16 rounded-4xl shadow-cyan-50    backdrop-blur-lg bg-transparent">

            <div className="w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6  text-center">Welcome  👋</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                        <label className="text-sm font-medium text-gray-200">Name</label>
                        <input
                            type="name"
                            {...register("name")}
                            placeholder="Your Name"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-200">Email</label>
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
                        <label className="text-sm font-medium text-gray-200">Password</label>
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
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-200 transition"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-300">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-700 hover:underline">
                        SignIn
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignUpForm;