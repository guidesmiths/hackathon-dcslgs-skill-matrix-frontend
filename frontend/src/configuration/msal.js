import axios from 'axios';
import { graphConfig } from './authConfig';

async function callMsGraph(accessToken) {
  const options = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  return axios.get(graphConfig.graphMeEndpoint, options)
    .then(response => response.data)
    // eslint-disable-next-line no-console
    .catch(error => console.error(error));
}

export default callMsGraph;
