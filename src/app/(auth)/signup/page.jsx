"use client";
import { authClient } from '@/lib/auth-client';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SingUpPage = () => {
    const [passwordValue, setPasswordValue] = useState("");
    const router = useRouter();


    const onsubmit = async(e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        console.log(user);

        const {data, error} = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image
        })

        if (!error) {
            router.push("/login")
        }

        if (error) {
            toast.error(error.message)
        }
        if (data) {
            toast.success('Registration successful ✅')
        }
    }


    const handleGoogleSignIn = async () => {
       await authClient.signIn.social({
            provider: "google",
        });
    };
    return (
        <>
        <section className='bg-gray-50 dark:bg-slate-900 py-12'>
            <div className='max-w-lg mx-auto min-h-[80vh] flex justify-center items-center p-4'>
                <div className='w-full max-w-md p-6 sm:p-10 md:p-16 border shadow-sm rounded-lg dark:bg-slate-800'>


                    <h1 className="text-center mb-4 text-2xl font-bold">Create Your Account</h1>

                    <Form className="flex flex-col gap-4" onSubmit={onsubmit}>
                        <TextField isRequired name="name">
                            <Label>Full Name</Label>
                            <Input placeholder="Enter Your Name" />
                        </TextField>

                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label>Email</Label>
                            <Input placeholder="Enter your email" />
                            <FieldError />
                        </TextField>

                        <TextField isRequired name="image" type="text">
                            <Label>Image URL</Label>
                            <Input placeholder="Image URL" />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            minLength={6}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 6) return "Password must be at least 6 characters";
                                if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
                                if (!/[0-9]/.test(value)) return "Password must contain at least one number";
                                return null;
                            }}
                        >
                            <Label>Password</Label>
                            <Input placeholder="Enter your password" onChange={(e) => setPasswordValue(e.target.value)} />
                            <Description>Must be at least 6 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            name="confirmPassword"
                            type="password"
                            validate={(value) => {
                                if (!value) return "Please confirm your password";
                                if (value !== passwordValue) {
                                    return "Passwords do not match!";
                                }
                                return null;
                            }}
                        >
                            <Label className="block text-left text-sm font-semibold text-slate-200 mb-1">Confirm Password</Label>
                            <Input
                                placeholder="Re-enter your password"
                               
                            />
                            <FieldError className="text-red-400 text-xs mt-1" />
                        </TextField>

                        <div className="flex flex-col gap-2 mt-2">
                            <Button type="submit" className='w-full bg-[#198c19] hover:bg-[#21b121] py-2'>
                                Create Account
                            </Button>

                            <Button className="w-full" variant="tertiary" onClick={handleGoogleSignIn}>
                                <Icon icon="devicon:google" />
                                Sign in with Google
                            </Button>
                        </div>
                    </Form>

                    <p className="text-center mt-6 text-sm">
                        Already have an account? <Link href="/signin" className="text-blue-500 underline">Login</Link>
                    </p>
                </div>
            </div>
        </section>
        </>
    );
};

export default SingUpPage;