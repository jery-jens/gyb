import ChannelPerformanceContent from './ChannelPerformanceContent';

export default async function ChannelPerformancePage({ params }: { params: Promise<{ clientId: string, campaignId: string }> }) {
    const { clientId } = await params;
    return <ChannelPerformanceContent clientId={clientId} />;
} 