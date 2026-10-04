import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function WebViewMedia({uri = 'https://example.com/'}) {
  return (
    <View className="flex-1">
      <WebView
        className="flex-1"
        source={{uri}}
        mediaPlaybackRequiresUserAction={false}
        allowsFullscreenVideo
        allowsInlineMediaPlayback
        allowsPictureInPictureMediaPlayback
        allowsAirPlayForMediaPlayback
        ignoreSilentHardwareSwitch
        javaScriptEnabled
      />
    </View>
  );
}
