import React from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

/**
 * Standard HTML <input type="file"> support.
 * The native WebView handles the picker; exact behavior depends on
 * platform WebView and app permissions.
 */
export default function WebViewFileUpload({uri = 'https://example.com/upload'}) {
  return (
    <View className="flex-1">
      <WebView className="flex-1" source={{uri}} />
      <Text className="bg-slate-100 p-2 text-xs text-slate-600">
        HTML file input is handled by the native WebView file picker.
      </Text>
    </View>
  );
}
