// Auth0 configuration for Decap CMS
window.CMS_AUTH0_CONFIG = {
  domain: 'dev-nmho0zk6sei064zj.auth0.com',
  clientID: '99l6LspfWBVRYVrV6o2JGBSPIgVwJbQl',
  redirectUri: window.location.origin + '/admin/',
  audience: 'planetofsoundrockschool-netlify',
  responseType: 'token id_token',
  scope: 'openid profile email'
};
