"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./components/SignUpForm";






export default function registerPage() {


    return (
        <motion.div
            className="w-full   "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Left Side - Image */}
            <div className="relative h-screen">
                <Image
                    src="/images/login.jpg"
                    alt="Background"
                    className="object-cover w-full h-full"
                    width={800}
                    height={400}
                />
                <div className="absolute inset-0 bg-black opacity-80"></div>

                <div className="absolute inset-0  flex items-center gap-5  md:gap-48 justify-center text-white flex-col md:flex-row ">
                    <div className="mx-5">
                        <h1 className="text-3xl md:text-6xl font-bold mb-4">Global Thought</h1>
                        <p className=" text-sm md:text-lg max-w-md">
                            Welcome to Global Thought – your platform to share ideas, thoughts, and inspirations.
                        </p>
                        <p className="mt-4 max-w-md text-sm text-gray-300 mb-8 md:mb-16">
                            Post your ideas, follow your favorite writers, and stay updated with daily insights.
                        </p>
                        <Link href='/' className="border px-4 py-2  w-fit rounded-lg mt-16 hover:bg-gray-600">
                            ← Back to Home
                        </Link>
                    </div>
                    <SignUpForm />
                </div>
            </div>

            {/* Right Side - Login Form */}
        </motion.div>
    );
}
