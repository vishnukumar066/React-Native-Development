import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import useNetInfo from './useNetInfo';
import { SafeAreaView } from 'react-native-safe-area-context';
import InternetStatusBanner from './InternetStatusBanner';
import NetworkStatusCard from './NetworkStatusCard';
import NetworkReachability from './NetworkReachability';
import NetworkAwareButton from './NetworkAwareButton';
import NetworkDetails from './NetworkDetails';
import NetInfoActions from './NetInfoActions';
import NetworkAwareScreen from './NetworkAwareScreen';

const NetInfoDemoScreen = () => {
  const { state, loading, isOnline, isOffline, refresh } = useNetInfo();

  if (loading && !state) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-slate-50 dark:bg-slate-950">
        <Text className="text-base font-semibold text-slate-900 dark:text-white">
          Detecting network...
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <NetworkAwareScreen state={state}>
      <InternetStatusBanner state={state} />

      <ScrollView className="flex-1" contentContainerClassName="gap-4 p-4">
        <View>
          <Text className="text-3xl font-bold text-slate-900 dark:text-white">
            NetInfo Demo
          </Text>

          <Text className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Complete network connectivity example
          </Text>
        </View>

        {/* Current status */}
        <NetworkStatusCard state={state} />

        {/* Internet check */}
        <NetworkReachability state={state} />

        {/* Network dependent action */}
        <NetworkAwareButton
          state={state}
          title="Perform API Request"
          onPress={() => {
            console.log('API request started');
          }}
        />

        {/* Detailed information */}
        <NetworkDetails state={state} />

        {/* NetInfo API actions */}
        <View className="rounded-2xl bg-white p-4 dark:bg-slate-900">
          <Text className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
            NetInfo Actions
          </Text>

          <NetInfoActions />
        </View>

        {/* Summary */}
        <View className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
          <Text className="text-sm text-slate-600 dark:text-slate-300">
            Online: {String(isOnline)}
          </Text>

          <Text className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Offline: {String(isOffline)}
          </Text>
        </View>
      </ScrollView>
    </NetworkAwareScreen>
  );
};

export default NetInfoDemoScreen;
