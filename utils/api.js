export async function newRequest(itemId) {
    console.log(itemId, 'itemId on new request')
    try {
        const response = await fetch('http://localhost:8080/api/newRequest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ itemId }),
        });

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        // throw new Error('Failed to post new request');
    }
};

export async function cancelRequest(itemId) {
    console.log(itemId, 'itemId on cancel')
    try {
        const response = await fetch('http://localhost:8080/api/cancelRequest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ itemId }),
        });

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        // throw new Error('Failed to cancel request');
    }
}