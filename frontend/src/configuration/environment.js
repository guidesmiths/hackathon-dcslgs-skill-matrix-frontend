const envType = {
  development: {
    redirectUri: 'https://dev-skillmatrix.azurewebsites.net',
  },
  production: {
    redirectUri: 'https://prod-skillmatrix.azurewebsites.net',
  },
  local: {
    redirectUri: 'http://localhost:3000',
  },
};

const getEnvConfig = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    return envType.local;
  }
  return envType[rootElement.dataset.environment] || envType.local;
};

export default getEnvConfig;
