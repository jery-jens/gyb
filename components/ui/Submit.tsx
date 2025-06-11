import { cn } from "@/lib/utils";

export default function Submit({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={cn(className || "", "w-full bg-button-background text-button-text tracking-tight rounded-lg p-3 h-10 flex items-center justify-center font-medium hover:opacity-80 transition-all duration-300")} {...props} />
    )
}