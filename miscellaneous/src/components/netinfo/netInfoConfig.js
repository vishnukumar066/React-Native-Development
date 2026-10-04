import NetInfo from '@react-native-community/netinfo';

export const configureNetInfo = () => {
  NetInfo.configure({
    reachabilityShouldRun: () => true,

    reachabilityRequestTimeout: 15000,

    reachabilityShortTimeout: 5000,

    reachabilityLongTimeout: 60000,
  });
};
