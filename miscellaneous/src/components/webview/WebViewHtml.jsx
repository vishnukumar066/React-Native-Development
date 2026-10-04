import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

const DEFAULT_HTML = `
<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #f8fafc; }
    .card { padding: 20px; border-radius: 16px; background: white; }
    button { padding: 12px 16px; border: 0; border-radius: 10px; background: #102542; color: white; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Inline HTML</h1>
    <p>This page is supplied by the React Native app.</p>
    <button onclick="document.body.style.background='#dbeafe'">Change background</button>
  </div>
</body>
</html>
`;

export default function WebViewHtml({html = DEFAULT_HTML, baseUrl}) {
  return (
    <View className="flex-1 overflow-hidden rounded-2xl">
      <WebView
        originWhitelist={['*']}
        source={{html, ...(baseUrl ? {baseUrl} : {})}}
        javaScriptEnabled
        domStorageEnabled
      />
    </View>
  );
}
