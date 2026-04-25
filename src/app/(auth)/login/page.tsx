"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from "@/lib/auth-client";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, Mail, Loader2, ArrowRight, } from "lucide-react";

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {
        setIsLoading(true);
        try {
            const { error } = await signIn.email({
                email: data.email,
                password: data.password,
                callbackURL: "/dashboard"
            });

            if (error) {
                toast.error(error.message || "Failed to sign in");
            } else {
                toast.success("Welcome back!");
                router.push("/dashboard");
                router.refresh();
            }
        } catch (err) {
            toast.error("An unexpected error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4 selection:bg-purple-500/30">
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md z-10"
            >
                <div className="bg-(--card) border border-white/10 card-shadow p-8 rounded-2xl backdrop-blur-sm">
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-16 h-16 bg-linear-to-tr from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
                            <Lock className="text-white w-8 h-8" />
                        </div>
                        <h1 className="text-3xl font-bold text-foreground tracking-tight">Admin Portal</h1>
                        <p className="text-gray-500 mt-2 text-sm">Welcome back! Please enter your details.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-(--foreground)/80 ml-1">Email Address</label>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </span>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    type="email"
                                    className="w-full bg-background border border-white/10 rounded-xl py-3 pl-12 pr-4 text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all placeholder:text-gray-600"
                                    placeholder="admin@example.com"
                                />
                            </div>
                            {errors.email?.message && (
                                <p className="text-xs text-red-500 ml-1 mt-1">{(errors.email.message as string)}</p>
                            )}
                        </div>

                        <div className="space-y-1">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-sm font-medium text-(--foreground)/80">Password</label>
                                <button type="button" className="text-xs text-purple-500 hover:text-purple-400 transition-colors">Forgot password?</button>
                            </div>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors">
                                    <Lock className="w-5 h-5" />
                                </span>
                                <input
                                    {...register("password", { required: "Password is required" })}
                                    type="password"
                                    className="w-full bg-background border border-white/10 rounded-xl py-3 pl-12 pr-4 text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all placeholder:text-gray-600"
                                    placeholder="••••••••"
                                />
                            </div>
                            {errors.password?.message && (
                                <p className="text-xs text-red-500 ml-1 mt-1">{(errors.password.message as string)}</p>
                            )}
                        </div>

                        <button
                            disabled={isLoading}
                            type="submit"
                            className="w-full bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98]"
                        >
                            {isLoading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/5"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-card px-4 text-gray-500">Security Verified</span>
                        </div>
                    </div>
                </div>

                <p className="text-center mt-8 text-gray-500 text-sm">
                    Don't have an account? <span className="text-purple-500 font-medium cursor-pointer hover:underline underline-offset-4">Contact Admin</span>
                </p>
            </motion.div>
        </div>
    );
}

