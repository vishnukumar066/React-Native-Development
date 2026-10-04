import React from 'react';
import { Text, View } from 'react-native';

const NetworkAwareScreen = ({ state, children }) => {
  const offline =
    state?.isConnected === false || state?.isInternetReachable === false;

  if (offline) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-50 px-6 dark:bg-slate-950">
        <Text className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
          You're Offline
        </Text>

        <Text className="text-center text-sm leading-6 text-slate-500 dark:text-slate-400">
          Check your Wi-Fi or mobile data connection and try again.
        </Text>
      </View>
    );
  }

  return children;
};

export default NetworkAwareScreen;
