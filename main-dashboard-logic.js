// main-dashboard-logic.js

// 1. Wait for everything to load
document.addEventListener('DOMContentLoaded', () => {
    console.log("Dashboard logic loaded!");
    fetchData();
});

// 2. Function to fetch data from your Render API
async function fetchData() {
    const config = window.CLIMAX_CONFIG;
    if (!config) {
        console.error("Config not found!");
        return;
    }

    try {
        // Try fetching your 'venue' data
        const response = await fetch(`${config.API_URL}/venue`, {
            method: 'GET',
            headers: { 'x-api-key': config.API_KEY }
        });

        if (response.ok) {
            console.log("System is Online");
            // Add your code here to update your UI status to 'Online'
        } else {
            console.error("Server error:", response.status);
        }
    } catch (error) {
        console.error("Connection failed:", error);
    }
}

async function sendOrder(orderData) {
    const config = window.CLIMAX_CONFIG;
    
    try {
        const response = await fetch(`${config.API_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': config.API_KEY
            },
            body: JSON.stringify(orderData)
        });

        if (!response.ok) throw new Error("Failed to send order");
        alert("Order Sent Successfully!");
    } catch (error) {
        console.error("Order Error:", error);
    }
}
