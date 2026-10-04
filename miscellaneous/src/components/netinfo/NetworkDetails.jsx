import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const NetworkDetails = ({ state }) => {
  if (!state) {
    return null;
  }

  const details = [
    ['Type', state.type],
    ['Connected', String(state.isConnected)],
    ['Internet Reachable', String(state.isInternetReachable)],
    ['Expensive Connection', String(state.details?.isConnectionExpensive)],
    ['SSID', state.details?.ssid ?? 'N/A'],
    ['BSSID', state.details?.bssid ?? 'N/A'],
    ['Cellular Generation', state.details?.cellularGeneration ?? 'N/A'],
    ['Carrier', state.details?.carrier ?? 'N/A'],
    ['IP Address', state.details?.ipAddress ?? 'N/A'],
    ['Subnet', state.details?.subnet ?? 'N/A'],
    [
      'Frequency',
      state.details?.frequency != null
        ? `${state.details.frequency} MHz`
        : 'N/A',
    ],
    [
      'Link Speed',
      state.details?.linkSpeed != null
        ? `${state.details.linkSpeed} Mbps`
        : 'N/A',
    ],
    [
      'RX Link Speed',
      state.details?.rxLinkSpeed != null
        ? `${state.details.rxLinkSpeed} Mbps`
        : 'N/A',
    ],
  ];

  return (
    <ScrollView className="rounded-2xl bg-slate-950 p-4">
      <Text className="mb-4 text-lg font-bold text-white">Network Details</Text>

      {details.map(([key, value]) => (
        <View key={key} className="mb-3 flex-row justify-between gap-4">
          <Text className="flex-1 text-sm text-slate-400">{key}</Text>

          <Text className="flex-1 text-right text-sm font-medium text-white">
            {String(value)}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default NetworkDetails;
