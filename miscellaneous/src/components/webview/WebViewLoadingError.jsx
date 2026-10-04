import React, {useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function WebViewLoadingError({
  uri = 'https://reactnative.dev/',
}) {
  const [key, setKey] = useState(0);

  return (
    <View className="flex-1 overflow-hidden rounded-2xl bg-white">
      <WebView
        key={key}
        source={{uri}}
        startInLoadingState
        renderLoading={() => (
          <View className="flex-1 items-center justify-center bg-slate-50">
            <ActivityIndicator size="large" />
            <Text className="mt-3 text-slate-600">Loading webpage...</Text>
          </View>
        )}
        renderError={(errorName) => (
          <View className="flex-1 items-center justify-center bg-slate-50 px-6">
            <Text className="text-xl font-bold text-slate-900">WebView error</Text>
            <Text className="mt-2 text-center text-slate-600">{String(errorName)}</Text>
            <TouchableOpacity
              className="mt-5 rounded-xl bg-slate-900 px-5 py-3"
              onPress={() => setKey(value => value + 1)}>
              <Text className="font-semibold text-white">Try Again</Text>
            </TouchableOpacity>
          </View>
        )}
        onError={({nativeEvent}) => {
          console.warn('WebView error:', nativeEvent);
        }}
        onHttpError={({nativeEvent}) => {
          console.warn('HTTP error:', nativeEvent.statusCode, nativeEvent.url);
        }}
      />
    </View>
  );
}
