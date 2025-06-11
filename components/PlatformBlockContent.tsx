export default function PlatformBlockContent({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`p-6 bg-background-tertiary rounded-2xl w-full mt-6 ${className}`}>
            {children}
        </div>
    )
}