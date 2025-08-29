export const getCampaignOverview = async (clientId: string) => {
    const response = await fetch(
        `http://localhost:3001/api/clients/${clientId}/campaign-overview`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};