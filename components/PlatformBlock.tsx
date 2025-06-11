export enum PlatformBlockSize {
    SMALL = 'w-full max-w-[40%]',
    SMALL_MEDIUM = 'w-full max-w-[50%]',
    MEDIUM = 'w-full max-w-[60%]',
    LARGE = 'w-full max-w-[80%]',
    FULL = 'w-full',
}

export default function PlatformBlock({ children, divider = false, size = PlatformBlockSize.FULL }: { children: React.ReactNode, divider?: boolean, size?: PlatformBlockSize }) {
    return (
        <div className={`p-8 ${size} ${divider ? 'border-r-[.5px] border-border-primary' : ''}`}>
            {children}
        </div>
    )
}