import React, {useRef} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function WebViewJavaScriptInjection({
  uri = 'https://reactnative.dev/',
}) {
  const ref = useRef(null);

  const changePage = () => {
    ref.current?.injectJavaScript(`
      document.body.style.backgroundColor = '#eff6ff';
      document.body.style.fontFamily = 'sans-serif';
      true;
    `);
  };

  return (
    <View className="flex-1">
      <View className="bg-white p-3">
        <TouchableOpacity
          className="self-start rounded-xl bg-blue-600 px-4 py-3"
          onPress={changePage}>
          <Text className="font-semibold text-white">Run JavaScript now</Text>
        </TouchableOpacity>
      </View>

      <WebView
        ref={ref}
        className="flex-1"
        source={{uri}}
        injectedJavaScriptBeforeContentLoaded={`
          window.__RN_APP = true;
          true;
        `}
        injectedJavaScript={`
          document.documentElement.style.scrollBehavior = 'smooth';
          true;
        `}
      />
    </View>
  );
}
