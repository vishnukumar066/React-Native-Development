import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

/**
 * Demonstrates source headers, custom user agent, cookies/session behavior.
 *
 * Important:
 * - Android custom headers on source are supported for GET only.
 * - Cookies may also require server-side Set-Cookie and sharedCookiesEnabled
 *   depending on the platform/session architecture.
 */
export default function WebViewCookiesHeaders({
  uri = 'https://example.com/',
  token = 'REPLACE_WITH_TOKEN',
}) {
  return (
    <View className="flex-1">
      <WebView
        className="flex-1"
        source={{
          uri,
          headers: {
            Authorization: `Bearer ${token}`,
            'X-App-Version': '1.0.0',
          },
        }}
        sharedCookiesEnabled
        userAgent="MyRNApp/1.0.0"
        applicationNameForUserAgent="MyRNApp/1.0.0"
        javaScriptEnabled
        domStorageEnabled
      />
    </View>
  );
}
