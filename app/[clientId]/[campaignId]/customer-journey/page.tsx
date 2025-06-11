import { CustomerJourneyContent } from './CustomerJourneyContent';

interface CustomerJourneyPageProps {
    params: Promise<{
        clientId: string;
        campaignId: string;
    }>;
}

export default async function CustomerJourneyPage({ params }: CustomerJourneyPageProps) {
    const resolvedParams = await params;
    return <CustomerJourneyContent clientId={resolvedParams.clientId} campaignId={resolvedParams.campaignId} />;
} 