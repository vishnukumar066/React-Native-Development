import React from 'react';
import { Text, View } from 'react-native';

import ConnectionTypeBadge from './ConnectionTypeBadge';

const NetworkStatusCard = ({ state }) => {
  if (!state) {
    return (
      <View className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
        <Text className="text-base font-semibold text-slate-900 dark:text-white">
          Checking network...
        </Text>
      </View>
    );
  }

  const connected = state.isConnected === true;

  const reachable = state.isInternetReachable === true;

  return (
    <View className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900">
      <View className="mb-4 flex-row items-center justify-between">
        <Text className="text-lg font-bold text-slate-900 dark:text-white">
          Network Status
        </Text>

        <ConnectionTypeBadge type={state.type} />
      </View>

      <View className="gap-3">
        <StatusRow
          label="Connected"
          value={
            state.isConnected == null ? 'Unknown' : connected ? 'Yes' : 'No'
          }
        />

        <StatusRow
          label="Internet Reachable"
          value={
            state.isInternetReachable == null
              ? 'Unknown'
              : reachable
                ? 'Yes'
                : 'No'
          }
        />

        <StatusRow label="Connection Type" value={state.type} />
      </View>
    </View>
  );
};

const StatusRow = ({ label, value }) => {
  return (
    <View className="flex-row items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
      <Text className="text-sm text-slate-500 dark:text-slate-400">
        {label}
      </Text>

      <Text className="text-sm font-semibold text-slate-900 dark:text-white">
        {value}
      </Text>
    </View>
  );
};

export default NetworkStatusCard;
