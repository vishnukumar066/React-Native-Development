import React, {useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function WebViewNavigation({
  uri = 'https://reactnative.dev/',
}) {
  const webViewRef = useRef(null);
  const [nav, setNav] = useState({canGoBack: false, canGoForward: false, url: uri});

  return (
    <View className="flex-1 bg-slate-100">
      <View className="flex-row items-center gap-2 border-b border-slate-200 bg-white px-3 py-3">
        <TouchableOpacity
          disabled={!nav.canGoBack}
          className={`rounded-lg px-3 py-2 ${nav.canGoBack ? 'bg-slate-900' : 'bg-slate-300'}`}
          onPress={() => webViewRef.current?.goBack()}>
          <Text className="font-bold text-white">←</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={!nav.canGoForward}
          className={`rounded-lg px-3 py-2 ${nav.canGoForward ? 'bg-slate-900' : 'bg-slate-300'}`}
          onPress={() => webViewRef.current?.goForward()}>
          <Text className="font-bold text-white">→</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="rounded-lg bg-slate-900 px-3 py-2"
          onPress={() => webViewRef.current?.reload()}>
          <Text className="font-bold text-white">↻</Text>
        </TouchableOpacity>
      </View>

      <Text numberOfLines={1} className="bg-slate-100 px-3 py-2 text-xs text-slate-500">
        {nav.url}
      </Text>

      <View className="flex-1 overflow-hidden rounded-t-2xl">
        <WebView
          ref={webViewRef}
          source={{uri}}
          onNavigationStateChange={setNav}
          javaScriptEnabled
          domStorageEnabled
        />
      </View>
    </View>
  );
}
