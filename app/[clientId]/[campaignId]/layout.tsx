import ClientLayout from './ClientLayout';

interface ResourceLayoutProps {
    children: React.ReactNode;
    params: Promise<{
        clientId: string;
        campaignId: string;
    }>;
}

export default async function ResourceLayout({ children }: ResourceLayoutProps) {
    return <ClientLayout>{children}</ClientLayout>;
} 