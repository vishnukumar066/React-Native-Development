import React, {useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function WebViewMethods({uri = 'https://reactnative.dev/'}) {
  const ref = useRef(null);

  const run = action => {
    switch (action) {
      case 'back':
        ref.current?.goBack();
        break;
      case 'forward':
        ref.current?.goForward();
        break;
      case 'reload':
        ref.current?.reload();
        break;
      case 'stop':
        ref.current?.stopLoading();
        break;
      case 'focus':
        ref.current?.requestFocus();
        break;
      case 'clearCache':
        ref.current?.clearCache(true);
        break;
      case 'clearHistory':
        ref.current?.clearHistory();
        break;
      case 'clearFormData':
        ref.current?.clearFormData();
        break;
      default:
        break;
    }
  };

  const buttons = [
    ['back', 'Go Back'],
    ['forward', 'Go Forward'],
    ['reload', 'Reload'],
    ['stop', 'Stop Loading'],
    ['focus', 'Request Focus'],
    ['clearCache', 'Clear Cache'],
    ['clearHistory', 'Clear History'],
    ['clearFormData', 'Clear Form Data (Android)'],
  ];

  return (
    <View className="flex-1 bg-slate-100">
      <View className="flex-row flex-wrap gap-2 p-3">
        {buttons.map(([action, label]) => (
          <TouchableOpacity
            key={action}
            className="rounded-xl bg-slate-900 px-3 py-3"
            onPress={() => run(action)}>
            <Text className="text-xs font-semibold text-white">{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <WebView ref={ref} className="flex-1" source={{uri}} />
    </View>
  );
}
