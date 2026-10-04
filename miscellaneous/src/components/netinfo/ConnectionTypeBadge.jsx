import React from 'react';
import { Text, View } from 'react-native';

const CONNECTION_LABELS = {
  wifi: 'Wi-Fi',
  cellular: 'Mobile Data',
  ethernet: 'Ethernet',
  bluetooth: 'Bluetooth',
  vpn: 'VPN',
  wimax: 'WiMAX',
  other: 'Other',
  none: 'No Connection',
  unknown: 'Unknown',
};

const ConnectionTypeBadge = ({ type = 'unknown' }) => {
  const label = CONNECTION_LABELS[type] ?? type;

  return (
    <View className="self-start rounded-full bg-slate-100 px-3 py-1.5 dark:bg-slate-800">
      <Text className="text-xs font-semibold text-slate-700 dark:text-slate-200">
        {label}
      </Text>
    </View>
  );
};

export default ConnectionTypeBadge;
