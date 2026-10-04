import React, {useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function WebViewCrashRecovery({
  uri = 'https://reactnative.dev/',
}) {
  const ref = useRef(null);
  const [status, setStatus] = useState('Running');

  return (
    <View className="flex-1">
      <View className="flex-row items-center justify-between bg-white p-3">
        <Text className="text-slate-700">Process: {status}</Text>
        <TouchableOpacity
          className="rounded-lg bg-slate-900 px-3 py-2"
          onPress={() => ref.current?.reload()}>
          <Text className="text-white">Reload</Text>
        </TouchableOpacity>
      </View>

      <WebView
        ref={ref}
        className="flex-1"
        source={{uri}}
        onRenderProcessGone={({nativeEvent}) => {
          setStatus(nativeEvent.didCrash ? 'Crashed' : 'Killed');
          setTimeout(() => ref.current?.reload(), 250);
        }}
        onContentProcessDidTerminate={() => {
          setStatus('iOS content process terminated');
          ref.current?.reload();
        }}
      />
    </View>
  );
}
