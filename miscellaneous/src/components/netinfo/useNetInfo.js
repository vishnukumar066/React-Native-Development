import { useCallback, useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

const useNetInfo = () => {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);

    try {
      const nextState = await NetInfo.refresh();

      setState(nextState);

      return nextState;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let mounted = true;

    // Initial network state
    NetInfo.fetch()
      .then(nextState => {
        if (mounted) {
          setState(nextState);
        }
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });

    // Listen for network changes
    const unsubscribe = NetInfo.addEventListener(nextState => {
      if (mounted) {
        setState(nextState);
      }
    });

    return () => {
      mounted = false;
      unsubscribe();
    };
  }, []);

  const isOnline =
    state?.isConnected === true && state?.isInternetReachable !== false;

  const isOffline =
    state?.isConnected === false || state?.isInternetReachable === false;

  return {
    state,
    loading,
    isOnline,
    isOffline,
    refresh,
  };
};

export default useNetInfo;
