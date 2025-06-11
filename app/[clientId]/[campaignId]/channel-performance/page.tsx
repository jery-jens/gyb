import ChannelPerformanceContent from './ChannelPerformanceContent';

interface ChannelPerformancePageProps {
    params: Promise<{
        clientId: string;
        campaignId: string;
    }>;
}

export default async function ChannelPerformancePage({ params }: ChannelPerformancePageProps) {
    const resolvedParams = await params;
    return <ChannelPerformanceContent clientId={resolvedParams.clientId} campaignId={resolvedParams.campaignId} />;
} 