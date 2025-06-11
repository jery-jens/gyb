export default function PlatformRow({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`border-b-[.5px] border-border-primary flex ${className}`}>
            {children}
        </div>
    )
};