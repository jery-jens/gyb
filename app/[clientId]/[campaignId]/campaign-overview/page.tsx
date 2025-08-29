import CampaignOverviewContent from "./CampaignOverviewContent";

export default async function CampaignOverviewPage({ params }: { params: Promise<{ clientId: string, campaignId: string }> }) {
    const { clientId, campaignId } = await params;
    return <CampaignOverviewContent clientId={clientId} campaignId={campaignId} />;
} 