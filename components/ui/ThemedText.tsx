import { cn } from "@/lib/utils";

export default function ThemedText({ children, type, className }: { children: React.ReactNode, type: 'heading' | 'title' | 'body', className?: string }) {
    return type === 'heading' ? (
        <h1 className={cn(className || "")}>{children}</h1>
    ) : type === 'title' ? (
        <h2 className={`${className || ""} font-medium text-title-primary text-xl leading-normal tracking-tight`}>{children}</h2>
    ) : (
        <p className={`${className || ""} font-normal text-sm leading-normal tracking-tight text-body-primary`}>{children}</p>
    )
}