import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function WebViewProgress({uri = 'https://reactnative.dev/'}) {
  const [progress, setProgress] = useState(0);

  return (
    <View className="flex-1">
      <View className="h-1 bg-slate-200">
        <View
          className="h-1 bg-blue-600"
          style={{width: `${Math.max(2, progress * 100)}%`}}
        />
      </View>
      <Text className="px-3 py-2 text-xs text-slate-500">
        Loading: {Math.round(progress * 100)}%
      </Text>

      <WebView
        className="flex-1"
        source={{uri}}
        onLoadProgress={({nativeEvent}) => setProgress(nativeEvent.progress)}
        onLoadEnd={() => setProgress(1)}
      />
    </View>
  );
}
