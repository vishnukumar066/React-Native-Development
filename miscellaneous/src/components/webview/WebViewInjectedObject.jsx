import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

const HTML = `
<!doctype html>
<html>
<body style="font-family:sans-serif;padding:24px">
  <h2>Injected object</h2>
  <pre id="output">Waiting...</pre>
  <script>
    window.onload = function () {
      const raw = window.ReactNativeWebView.injectedObjectJson?.();
      document.getElementById('output').textContent =
        raw ? JSON.stringify(JSON.parse(raw), null, 2) : 'No object';
    };
  </script>
</body>
</html>
`;

export default function WebViewInjectedObject() {
  return (
    <View className="flex-1">
      <WebView
        className="flex-1"
        originWhitelist={['*']}
        source={{html: HTML}}
        injectedJavaScriptObject={{
          appName: 'My RN App',
          version: '1.0.0',
          theme: 'dark',
          user: {id: 123, role: 'customer'},
        }}
      />
    </View>
  );
}
