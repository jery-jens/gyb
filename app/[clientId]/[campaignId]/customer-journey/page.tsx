import { CustomerJourneyContent } from './CustomerJourneyContent';

export default async function CustomerJourneyPage({ params }: { params: Promise<{ clientId: string, campaignId: string }> }) {
    const { clientId, campaignId } = await params;
    return <CustomerJourneyContent clientId={clientId} campaignId={campaignId} />;
} 