import React from 'react';
import { Pressable, Text } from 'react-native';

const NetworkAwareButton = ({
  state,
  onPress,
  title = 'Continue',
  requireInternet = true,
}) => {
  const online =
    state?.isConnected === true &&
    (!requireInternet || state?.isInternetReachable !== false);

  return (
    <Pressable
      disabled={!online}
      onPress={onPress}
      className={`rounded-xl px-4 py-3 ${
        online
          ? 'bg-emerald-600 active:opacity-80'
          : 'bg-slate-300 dark:bg-slate-700'
      }`}
    >
      <Text
        className={`text-center font-bold ${
          online ? 'text-white' : 'text-slate-500 dark:text-slate-400'
        }`}
      >
        {online ? title : 'No Internet'}
      </Text>
    </Pressable>
  );
};

export default NetworkAwareButton;
