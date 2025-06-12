"use client"
import React from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Minimum 6 characters" }),
});

type FormData = z.infer<typeof schema>;
const SignInFrom = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = async (data: FormData) => {
        const { email, password } = data
        try {
            toast("Signing in...");
            // Call the signIn function from next-auth
            // You can pass additional options like redirect URL, etc.


            const response = await signIn("credentials", {
                email,
                password,
                callbackUrl: "/",
                redirect: false
            });
   
            // Check if the sign-in was successful
            if (!response) {
                toast.error("Failed to sign in. Please check your credentials and try again.");
            } else if (response.ok) {
                router.push("/")
               
                toast.success("Successfully signed in!");

            } else {
                toast.error("Invalid credentials. Please try again.");



            }
            // Optionally, you can redirect the user after successful sign-in
        } catch (error) {
        
            if(error){

                return toast.error("Failed to sign in. Please check your credentials and try again.");
            }

        }

    };
    return (
        <div className="flex items-center  justify-center rounded-2xl shadow-cyan-50  p-8 md:p-16 bg-transparent backdrop-blur-lg">

            <div className="w-full ">
                <h2 className="text-3xl font-bold mb-6  text-center">Welcome Back 👋</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Sign In
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-300">
                    Do not have an account?{" "}
                    <a href="/register" className="text-blue-600 hover:underline">
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignInFrom;