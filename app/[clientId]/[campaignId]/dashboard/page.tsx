import { DashboardContent } from './DashboardContent';

interface DashboardPageProps {
    params: Promise<{
        clientId: string;
        campaignId: string;
    }>;
}

export default async function DashboardPage({ params }: DashboardPageProps) {
    const resolvedParams = await params;
    return <DashboardContent clientId={resolvedParams.clientId} campaignId={resolvedParams.campaignId} />;
} 