import { cn } from "@/lib/utils";

export default function Input({ className, type, placeholder, required, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input type={type} placeholder={placeholder} required={required} className={cn(className || "", "w-full border-[.5px] border-input-border rounded-lg p-3 bg-input-background text-title-primary placeholder:text-sm placeholder:text-body-primary outline-none focus:outline-none focus:bg-background-secondary transition-all duration-300 h-10 tracking-tight")} {...props} />
    )
}