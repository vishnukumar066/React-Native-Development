import React, {useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {WebView} from 'react-native-webview';

const HTML = `
<!doctype html>
<html>
<body style="font-family:sans-serif;padding:24px">
  <h2>Web ↔ Native messaging</h2>
  <button onclick="send()">Send message to React Native</button>
  <button onclick="document.body.style.background='#dcfce7'">Change page</button>
  <script>
    function send() {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'WEB_BUTTON',
        payload: {message: 'Hello from webpage'}
      }));
    }
  </script>
</body>
</html>
`;

export default function WebViewMessaging() {
  const ref = useRef(null);
  const [lastMessage, setLastMessage] = useState('No message yet');

  const sendToWeb = () => {
    const payload = JSON.stringify({
      type: 'RN_COMMAND',
      payload: {message: 'Hello from React Native'},
    });

    ref.current?.postMessage(payload);
  };

  const onMessage = event => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      setLastMessage(JSON.stringify(data));
    } catch {
      setLastMessage(event.nativeEvent.data);
    }
  };

  return (
    <View className="flex-1 bg-slate-100">
      <View className="bg-white p-4">
        <Text className="font-bold text-slate-900">Last Web → RN message</Text>
        <Text className="mt-2 text-slate-600">{lastMessage}</Text>

        <TouchableOpacity
          className="mt-3 self-start rounded-xl bg-slate-900 px-4 py-3"
          onPress={sendToWeb}>
          <Text className="font-semibold text-white">Send RN → Web</Text>
        </TouchableOpacity>
      </View>

      <WebView
        ref={ref}
        className="flex-1"
        originWhitelist={['*']}
        source={{html: HTML}}
        onMessage={onMessage}
        injectedJavaScript={`
          window.addEventListener('message', function(event) {
            console.log('Message event:', event.data);
          });
          true;
        `}
      />
    </View>
  );
}
