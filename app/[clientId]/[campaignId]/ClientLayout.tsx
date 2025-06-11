'use client';

import Sidebar from "@/components/ui/Sidebar";

interface ClientLayoutProps {
    children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
    return (
        <main className="flex min-h-screen">
            <Sidebar />
            
            <div className="w-full min-h-screen py-4">
                <div className="w-full h-full bg-background-secondary border-[.5px] border-border-primary rounded-2xl">
                    {children}
                </div>
            </div>
        </main>
    );
} 