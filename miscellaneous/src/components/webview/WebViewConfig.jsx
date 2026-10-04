import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

/**
 * Configuration playground for less-common props.
 * Only enable options required by the actual website.
 */
export default function WebViewConfig({uri = 'https://reactnative.dev/'}) {
  return (
    <View className="flex-1">
      <WebView
        className="flex-1"
        source={{uri}}
        automaticallyAdjustContentInsets
        automaticallyAdjustsScrollIndicatorInsets
        allowsBackForwardNavigationGestures
        allowsLinkPreview
        bounces
        scrollEnabled
        nestedScrollEnabled
        directionalLockEnabled
        setBuiltInZoomControls
        setDisplayZoomControls={false}
        textZoom={100}
        overScrollMode="content"
        contentMode="recommended"
        contentInsetAdjustmentBehavior="automatic"
        cacheEnabled
        cacheMode="LOAD_DEFAULT"
        saveFormDataDisabled={false}
        incognito={false}
        textInteractionEnabled
        javaScriptEnabled
        domStorageEnabled
      />
    </View>
  );
}
