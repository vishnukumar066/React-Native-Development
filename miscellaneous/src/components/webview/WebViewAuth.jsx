import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function WebViewAuth({
  uri = 'https://example.com/protected',
}) {
  return (
    <View className="flex-1">
      <WebView
        className="flex-1"
        source={{uri}}
        basicAuthCredential={{
          username: 'demo-user',
          password: 'demo-password',
        }}
      />
    </View>
  );
}
