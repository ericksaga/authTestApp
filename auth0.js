window.addEventListener('load', function() {
    var idToken;
    var accessToken;
    var expiresAt;
  
    var webAuth = new auth0.WebAuth({
      domain: 'dev-13mwkxti.auth0.com',
      clientID: 'QW7NbpnlNlFX8lGukxfqSPXVD2drpM1j',
      responseType: 'token id_token',
      scope: 'openid',
      redirectUri: window.location.href
    });
  
    var loginBtn = document.getElementById('btn-login');
  
    loginBtn.addEventListener('click', function(e) {
      e.preventDefault();
      webAuth.authorize();
    });
  
  });