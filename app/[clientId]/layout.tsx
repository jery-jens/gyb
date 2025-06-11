interface UserLayoutProps {
    children: React.ReactNode;
    params: Promise<{
        clientId: string;
    }>;
}

export default async function UserLayout({ children, params }: UserLayoutProps) {
    const resolvedParams = await params;
    return (
        <>
            {children}
        </>
    );
}