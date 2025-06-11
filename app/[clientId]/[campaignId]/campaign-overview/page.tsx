import CampaignOverviewContent from "./CampaignOverviewContent";

interface CampaignOverviewPageProps {
    params: Promise<{
        clientId: string;
        campaignId: string;
    }>;
}

export default async function CampaignOverviewPage({ params }: CampaignOverviewPageProps) {
    const resolvedParams = await params;
    return <CampaignOverviewContent clientId={resolvedParams.clientId} campaignId={resolvedParams.campaignId} />;
} 