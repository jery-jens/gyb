export const getCustomerJourney = async (clientId: string) => {
    const response = await fetch(
        `https://gyb-be.onrender.com/api/clients/${clientId}/customer-journey`,
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