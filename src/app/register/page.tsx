"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./components/SignUpForm";




export default function LoginPage() {
    

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
                    <h1 className="text-6xl font-bold mb-4">Global Thought</h1>
                    <p className="text-lg max-w-md">
                        Welcome to Global Thought – your platform to share ideas, thoughts, and inspirations.
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
           <SignUpForm/>
        </motion.div>
    );
}
