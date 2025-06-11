import { isLoggedIn } from "@/lib/utils";
import { redirect } from "next/navigation";

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
    const loggedIn = await isLoggedIn();

    if (loggedIn) {
        return redirect('/dashboard');
    }   

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {children}

            <div className="absolute -bottom-[30%] left-0 right-0 mx-auto rounded-[100%] blur-3xl w-[80%] h-[60%] bg-gradient-primary"></div>
        </div>
    )
}