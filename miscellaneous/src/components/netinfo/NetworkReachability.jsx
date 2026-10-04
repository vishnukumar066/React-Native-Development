import React, { useState } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';

import NetInfo from '@react-native-community/netinfo';

const NetworkReachability = ({ state }) => {
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  const checkNow = async () => {
    try {
      setLoading(true);

      const nextState = await NetInfo.refresh();

      setResult(nextState.isInternetReachable);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="rounded-2xl bg-white p-4 dark:bg-slate-900">
      <Text className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
        Internet Reachability
      </Text>

      <Text className="mb-4 text-sm text-slate-500 dark:text-slate-400">
        Current: {String(state?.isInternetReachable ?? 'unknown')}
      </Text>

      {result !== null && (
        <Text className="mb-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
          Manual check: {String(result)}
        </Text>
      )}

      <Pressable
        disabled={loading}
        onPress={checkNow}
        className="items-center rounded-xl bg-blue-600 px-4 py-3 active:opacity-80"
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="font-bold text-white">Check Internet</Text>
        )}
      </Pressable>
    </View>
  );
};

export default NetworkReachability;
