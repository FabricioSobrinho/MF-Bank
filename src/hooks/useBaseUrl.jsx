// GlobalState.js
import { useState } from 'react';

export const useBaseUrl = () => {
  const [baseUrl, setBaseUrl] = useState('https://mf-bank-api-production.up.railway.app');

  return { baseUrl, setBaseUrl };
};

