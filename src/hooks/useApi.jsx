import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const BASE_URL = `http://localhost:3000`;
const API_PREFIX = '/api';

async function getData({ path }) {
  try {
    const url = new URL(`${API_PREFIX}/${path}`, BASE_URL);
    const response = await fetch(url);
    const res = await response.json();
    if (res.error) {
      throw res.error;
    }

    return res;
  } catch (e) {
    throw e;
  }
}

export default function useApi({ onSuccess, onError }) {
  const { setIsLoading } = useContext(AppContext);

  const fetchData = async (path) => {
    setIsLoading(true);

    try {
      const res = await getData({ path });

      setIsLoading(false);

      if (res.error) {
        onError && onError(res);

        throw res.error;
      }

      onSuccess(res);
    } catch (e) {
      setIsLoading(false);

      onError && onError(e);

      throw e;
    }
  };

  return { fetchData };
}
