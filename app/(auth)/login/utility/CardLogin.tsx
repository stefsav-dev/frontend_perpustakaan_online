"use client";

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLogin } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginCard() {

    const router = useRouter();
    const {mutate: login, isPending, error} = useLogin();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(formData, {
            onSuccess: () => {
                router.push('/');
                router.refresh();
            },
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

    return (
        <>
        <div className="flex min-h-screen items-center justify-center bg-white">
            <Card className="w-full max-w-sm shadow-lg">
                <CardHeader>
                    <CardTitle>Login to your Account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account.
                    </CardDescription>
                    <CardAction>
                        <Button variant="link">Sign Up</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <label htmlFor="email">Email</label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    href="#"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                {error && (
                    <div className="text-sm text-red-500 bg-red-50 p-3 rounded-md">
                        {typeof error === 'object' && 'error' in error 
                        ? (error as any).error 
                        : 'Login gagal. Periksa email dan password Anda.'}
                    </div>
                )}
                <CardFooter className="flex-col gap-2">
                    <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={isPending}
                        >
                        {isPending ? 'Sedang masuk...' : 'Login'}
                    </Button>
                </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </div>
        </>
    )
}