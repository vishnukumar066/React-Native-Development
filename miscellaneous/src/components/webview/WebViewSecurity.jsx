import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

/**
 * Security-oriented configuration example.
 * Do not blindly copy these values for every site.
 */
export default function WebViewSecurity({uri = 'https://reactnative.dev/'}) {
  return (
    <View className="flex-1">
      <WebView
        className="flex-1"
        source={{uri}}
        javaScriptEnabled
        domStorageEnabled
        originWhitelist={['https://*']}
        mixedContentMode="never"
        thirdPartyCookiesEnabled={false}
        incognito={false}
        allowFileAccess={false}
        allowFileAccessFromFileURLs={false}
        allowUniversalAccessFromFileURLs={false}
        javaScriptCanOpenWindowsAutomatically={false}
      />
    </View>
  );
}
