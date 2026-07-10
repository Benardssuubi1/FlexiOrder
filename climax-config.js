// climax-config.js
(function () {
  var _isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  window.CLIMAX_CONFIG = {
    API_URL: _isLocal ? 'http://127.0.0.1:5000' : 'https://flexiorder-api.onrender.com',
    API_KEY: '@6Foodies'
  };
  console.log('Config loaded:', window.CLIMAX_CONFIG.API_URL);
})();
  
