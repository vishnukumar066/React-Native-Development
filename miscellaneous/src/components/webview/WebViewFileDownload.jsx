import React from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

/**
 * onFileDownload is iOS-focused. The app must perform the actual download.
 * Android has DownloadManager integration built into react-native-webview.
 */
export default function WebViewFileDownload({uri = 'https://example.com/'}) {
  return (
    <View className="flex-1">
      <WebView
        className="flex-1"
        source={{uri}}
        onFileDownload={({nativeEvent}) => {
          console.log('iOS download URL:', nativeEvent.downloadUrl);
          // Hand nativeEvent.downloadUrl to your download implementation.
        }}
      />
      <Text className="bg-amber-50 p-3 text-xs text-amber-900">
        See README: Android and iOS downloads have different integration behavior.
      </Text>
    </View>
  );
}
