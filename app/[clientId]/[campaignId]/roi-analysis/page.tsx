import { RoiAnalysisContent } from './RoiAnalysisContent';

interface RoiAnalysisPageProps {
    params: Promise<{
        clientId: string;
        campaignId: string;
    }>;
}

export default async function RoiAnalysisPage({ params }: RoiAnalysisPageProps) {
    const resolvedParams = await params;
    return <RoiAnalysisContent clientId={resolvedParams.clientId} campaignId={resolvedParams.campaignId} />;
} 