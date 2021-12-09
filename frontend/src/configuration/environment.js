const envType = {
  development: {
    redirectUri: 'https://dev-skillmatrix.azurewebsites.net',
    environment: 'development',
  },
  production: {
    redirectUri: 'https://prod-skillmatrix.azurewebsites.net',
    environment: 'production',
  },
  local: {
    redirectUri: 'http://localhost:3000',
    environment: 'local',
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
