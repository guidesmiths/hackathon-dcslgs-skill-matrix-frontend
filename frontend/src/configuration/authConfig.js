import getEnvConfig from './environment';

export const msalConfig = {
  auth: {
    clientId: 'eed1e294-b493-4456-8e47-ac00cda98a5e',
    // This allows the redirection to login.microsoft
    authority:
      'https://login.microsoftonline.com/24adaeaa-5002-4f6e-aa57-b66c036ba791',

    redirectUri: getEnvConfig().redirectUri,

  },
  cache: {
    cacheLocation: 'localStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

export const loginRequest = {
  scopes: ['User.Read', 'profile', 'openid', 'email'],
};

export default msalConfig;
