import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

const ALLOWED_HOSTS = ['reactnative.dev', 'github.com'];

export default function WebViewNavigationGuard({
  uri = 'https://reactnative.dev/',
}) {
  return (
    <View className="flex-1">
      <WebView
        className="flex-1"
        source={{uri}}
        originWhitelist={['https://*']}
        onShouldStartLoadWithRequest={request => {
          try {
            const url = new URL(request.url);
            const allowed = ALLOWED_HOSTS.some(
              host => url.hostname === host || url.hostname.endsWith(`.${host}`),
            );
            console.log('Navigation request:', request.url, allowed);
            return allowed;
          } catch {
            return false;
          }
        }}
        onOpenWindow={({nativeEvent}) => {
          console.log('New-window request:', nativeEvent.targetUrl);
        }}
      />
    </View>
  );
}
