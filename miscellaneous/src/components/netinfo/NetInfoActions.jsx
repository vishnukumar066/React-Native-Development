import React from 'react';
import { Alert, Pressable, Text, View } from 'react-native';

import NetInfo from '@react-native-community/netinfo';

const NetInfoActions = () => {
  const fetchCurrent = async () => {
    const state = await NetInfo.fetch();

    Alert.alert('Current Network', JSON.stringify(state, null, 2));
  };

  const refresh = async () => {
    const state = await NetInfo.refresh();

    Alert.alert(
      'Refresh Result',
      `Type: ${state.type}\nInternet: ${state.isInternetReachable}`,
    );
  };

  const checkWifi = async () => {
    const state = await NetInfo.fetch('wifi');

    Alert.alert('Wi-Fi State', JSON.stringify(state, null, 2));
  };

  const checkCellular = async () => {
    const state = await NetInfo.fetch('cellular');

    Alert.alert('Cellular State', JSON.stringify(state, null, 2));
  };

  return (
    <View className="gap-3">
      <Action title="Fetch Current Network" onPress={fetchCurrent} />

      <Action title="Refresh Network" onPress={refresh} />

      <Action title="Fetch Wi-Fi" onPress={checkWifi} />

      <Action title="Fetch Cellular" onPress={checkCellular} />
    </View>
  );
};

const Action = ({ title, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      className="rounded-xl bg-slate-900 px-4 py-3 active:opacity-80 dark:bg-slate-700"
    >
      <Text className="text-center font-bold text-white">{title}</Text>
    </Pressable>
  );
};

export default NetInfoActions;
