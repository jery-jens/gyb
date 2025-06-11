import { CONFIG } from "@/lib/config";

export const getDashboard = async (clientId: string, campaignId: string) => {
    if (!process.env.NEXT_PUBLIC_API_KEY) {
        throw new Error('API key is not defined');
    }

    console.log(CONFIG)

    const response = await fetch(
        `${CONFIG.API_URL}${clientId}/dashboard/attribution/${campaignId}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': CONFIG.API_KEY as string
            },
        }
    );

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};