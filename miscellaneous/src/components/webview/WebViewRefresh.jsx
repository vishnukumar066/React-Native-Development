import React, {useState} from 'react';
import {RefreshControl, View} from 'react-native';
import {WebView} from 'react-native-webview';

/**
 * Uses the package's pullToRefreshEnabled on iOS.
 * Android projects can also use WebView's native behavior depending on version,
 * or implement a surrounding RefreshControl/native gesture architecture.
 */
export default function WebViewRefresh({uri = 'https://reactnative.dev/'}) {
  const [refreshing, setRefreshing] = useState(false);

  return (
    <View className="flex-1">
      <WebView
        className="flex-1"
        source={{uri}}
        pullToRefreshEnabled
        refreshControlLightMode={false}
        onLoadStart={() => setRefreshing(true)}
        onLoadEnd={() => setRefreshing(false)}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {}}
          />
        }
      />
    </View>
  );
}
