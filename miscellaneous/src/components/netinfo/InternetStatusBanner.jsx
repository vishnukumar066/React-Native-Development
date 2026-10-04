import React from 'react';
import { Text, View } from 'react-native';

const InternetStatusBanner = ({ state, showWhenOnline = false }) => {
  if (!state) {
    return null;
  }

  const online =
    state.isConnected === true && state.isInternetReachable !== false;

  if (online && !showWhenOnline) {
    return null;
  }

  return (
    <View className={`px-4 py-3 ${online ? 'bg-emerald-600' : 'bg-red-600'}`}>
      <Text className="text-center text-sm font-bold text-white">
        {online ? 'You are back online.' : 'No internet connection.'}
      </Text>
    </View>
  );
};

export default InternetStatusBanner;
