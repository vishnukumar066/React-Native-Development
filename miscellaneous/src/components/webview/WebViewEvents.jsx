import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function WebViewEvents({uri = 'https://reactnative.dev/'}) {
  const [events, setEvents] = useState([]);

  const log = (name, payload) => {
    setEvents(current => [
      `${name}: ${JSON.stringify(payload ?? {})}`,
      ...current,
    ].slice(0, 20));
  };

  return (
    <View className="flex-1">
      <WebView
        className="flex-1"
        source={{uri}}
        onLoadStart={({nativeEvent}) => log('onLoadStart', nativeEvent)}
        onLoad={({nativeEvent}) => log('onLoad', nativeEvent)}
        onLoadEnd={({nativeEvent}) => log('onLoadEnd', nativeEvent)}
        onLoadProgress={({nativeEvent}) => log('onLoadProgress', nativeEvent)}
        onNavigationStateChange={state => log('onNavigationStateChange', state)}
        onHttpError={({nativeEvent}) => log('onHttpError', nativeEvent)}
        onError={({nativeEvent}) => log('onError', nativeEvent)}
        onScroll={({nativeEvent}) => log('onScroll', {
          x: nativeEvent.contentOffset?.x,
          y: nativeEvent.contentOffset?.y,
        })}
        onOpenWindow={({nativeEvent}) => log('onOpenWindow', nativeEvent)}
        onContentProcessDidTerminate={({nativeEvent}) =>
          log('onContentProcessDidTerminate', nativeEvent)
        }
        onRenderProcessGone={({nativeEvent}) =>
          log('onRenderProcessGone', nativeEvent)
        }
      />

      <View className="max-h-56 border-t border-slate-200 bg-slate-950 p-3">
        <ScrollView>
          {events.map((event, index) => (
            <Text key={`${event}-${index}`} className="mb-1 text-xs text-white">
              {event}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
