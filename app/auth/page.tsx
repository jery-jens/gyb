'use client';

import Input from "@/components/ui/Input";
import Logo from "@/components/ui/Logo";
import Submit from "@/components/ui/Submit";
import ThemedText from "@/components/ui/ThemedText";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Login() {
    const router = useRouter();
    const [code, setCode] = useState('');
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let campaignId = '';

        if (code === 'tesla') {
            campaignId = 'arcane';
        } else {
            campaignId = '001';
        }

        try {
            router.push(`/${code}/${campaignId}/dashboard`);
        } catch (error) {
            console.error('Sign in failed:', error);
        }
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center relative z-10">
            <div className="flex flex-col items-center max-w-80 w-full">
                <Logo className="mb-8" />

                <div className="w-full p-6 rounded-2xl bg-background-secondary border-[.5px] border-border-primary">
                    <ThemedText type="title" className="mb-2">
                        Welcome back.
                    </ThemedText>

                    <ThemedText type="body" className="mb-8">
                        Sign in to your account to continue.
                    </ThemedText>

                    <form onSubmit={handleSubmit}>
                        <Input 
                            required 
                            type="password" 
                            placeholder="Your entry code" 
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />

                        <Submit className="mt-4">
                            Sign in
                        </Submit>
                    </form>
                </div>
            </div>
        </div>
    )
}