import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

/**
 * Basic URL WebView.
 * Demonstrates:
 * - source.uri
 * - JavaScript
 * - DOM storage
 * - loading callbacks
 */
export default function WebViewBasic({
  uri = 'https://reactnative.dev/',
  onLoad,
  onLoadStart,
  onLoadEnd,
}) {
  return (
    <View className="flex-1 overflow-hidden rounded-2xl bg-white">
      <WebView
        source={{uri}}
        javaScriptEnabled
        domStorageEnabled
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        startInLoadingState
      />
    </View>
  );
}
