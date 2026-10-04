import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import WebViewBasic from './WebViewBasic';
import WebViewHtml from './WebViewHtml';
import WebViewLoadingError from './WebViewLoadingError';
import WebViewNavigation from './WebViewNavigation';
import WebViewProgress from './WebViewProgress';
import WebViewMessaging from './WebViewMessaging';
import WebViewJavaScriptInjection from './WebViewJavaScriptInjection';
import WebViewInjectedObject from './WebViewInjectedObject';
import WebViewNavigationGuard from './WebViewNavigationGuard';
import WebViewSecurity from './WebViewSecurity';
import WebViewCookiesHeaders from './WebViewCookiesHeaders';
import WebViewMedia from './WebViewMedia';
import WebViewRefresh from './WebViewRefresh';
import WebViewMethods from './WebViewMethods';
import WebViewEvents from './WebViewEvents';
import WebViewFileDownload from './WebViewFileDownload';
import WebViewAuth from './WebViewAuth';
import WebViewFileUpload from './WebViewFileUpload';
import WebViewConfig from './WebViewConfig';
import WebViewCrashRecovery from './WebViewCrashRecovery';

const DEMOS = [
  ['basic', '01 Basic URL'],
  ['html', '02 Inline HTML'],
  ['loading', '03 Loading + Error'],
  ['navigation', '04 Navigation'],
  ['progress', '05 Progress'],
  ['messaging', '06 JS ↔ Native'],
  ['inject', '07 JS Injection'],
  ['object', '08 Injected Object'],
  ['guard', '09 Navigation Guard'],
  ['security', '10 Security'],
  ['cookies', '11 Headers/Cookies'],
  ['media', '12 Media'],
  ['refresh', '13 Refresh'],
  ['methods', '14 Methods'],
  ['events', '15 Events'],
  ['download', '16 Download'],
  ['auth', '17 Basic Auth'],
  ['upload', '18 File Upload'],
  ['config', '19 Config'],
  ['crash', '20 Crash Recovery'],
];

export default function WebViewFeatureDemo() {
  const [active, setActive] = useState('basic');

  const renderDemo = () => {
    switch (active) {
      case 'basic':
        return <WebViewBasic />;
      case 'html':
        return <WebViewHtml />;
      case 'loading':
        return <WebViewLoadingError />;
      case 'navigation':
        return <WebViewNavigation />;
      case 'progress':
        return <WebViewProgress />;
      case 'messaging':
        return <WebViewMessaging />;
      case 'inject':
        return <WebViewJavaScriptInjection />;
      case 'object':
        return <WebViewInjectedObject />;
      case 'guard':
        return <WebViewNavigationGuard />;
      case 'security':
        return <WebViewSecurity />;
      case 'cookies':
        return <WebViewCookiesHeaders />;
      case 'media':
        return <WebViewMedia />;
      case 'refresh':
        return <WebViewRefresh />;
      case 'methods':
        return <WebViewMethods />;
      case 'events':
        return <WebViewEvents />;
      case 'download':
        return <WebViewFileDownload />;
      case 'auth':
        return <WebViewAuth />;
      case 'upload':
        return <WebViewFileUpload />;
      case 'config':
        return <WebViewConfig />;
      case 'crash':
        return <WebViewCrashRecovery />;
      default:
        return null;
    }
  };

  return (
    <>
      <View className="border-b border-slate-200 bg-white px-4 py-3">
        <Text className="text-xl font-bold text-slate-950">
          WebView Feature Lab
        </Text>
        <Text className="mt-1 text-xs text-slate-500">
          react-native-webview • choose a feature below
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="max-h-16 bg-green-300"
        contentContainerStyle={{ padding: 8, gap: 8 }}
        nestedScrollEnabled={true}
      >
        {DEMOS.map(([id, label]) => (
          <TouchableOpacity
            key={id}
            className={`rounded-xl px-3 py-2 ${active === id ? 'bg-slate-900' : 'bg-slate-200'}`}
            onPress={() => setActive(id)}
          >
            <Text
              className={`text-xs font-semibold ${active === id ? 'text-white' : 'text-slate-800'}`}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View className="flex-1">{renderDemo()}</View>
    </>
  );
}
