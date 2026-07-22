// climax-config.js
(function () {
  // CLOUD DEPLOYMENT CONFIGURATION
  // This configuration is set up for your Render cloud deployment
  // The system will automatically use your cloud API
  
  window.CLIMAX_CONFIG = {
    // Your Render cloud API URL - update this to your actual Render URL
    API_URL: 'https://flexiorder-api.onrender.com',
    
    // Your API secret key - must match API_SECRET_KEY in your Render environment variables
    API_KEY: '@6Foodies',
  };
  
  console.log('Cloud API Configuration loaded');
  console.log('API URL:', window.CLIMAX_CONFIG.API_URL);
  console.log('API Key:', window.CLIMAX_CONFIG.API_KEY ? 'configured' : 'missing');
})();
  
