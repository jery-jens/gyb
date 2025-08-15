interface UserLayoutProps {
    children: React.ReactNode;
    params: Promise<{
        clientId: string;
    }>;
}

export default async function UserLayout({ children }: UserLayoutProps) {
    return (
        <>
            {children}
        </>
    );
}