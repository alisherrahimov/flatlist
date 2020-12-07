import React from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Coru from './src/Coru';
const {width, height} = Dimensions.get('screen');
const Data = [
  {
    id: 1,
    image1: require('./img/11.png'),
  },
  {
    id: 3,
    image1: require('./img/4261994.jpg'),
  },
  {
    id: 4,
    image1: require('./img/4319859.jpg'),
  },
  {
    id: 5,
    image1: require('./img/4333587.jpg'),
  },
];
StatusBar.setBackgroundColor('rgba(0,0,0,0)');
StatusBar.setBarStyle('dark-content');
StatusBar.setTranslucent(true);
export default function App() {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <FlatList
        style={{height: height / 5, flex: 0.5, width: width}}
        pagingEnabled={true}
        horizontal
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        data={Data}
        pointerEvents="box-only"
        keyExtractor={(data) => data.id.toString()}
        key={(data) => data.id}
        scrollEventThrottle={16}
        decelerationRate="fast"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        renderItem={({item}) => {
          return <Coru item={item} />;
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          width: width,
          backgroundColor: '#fff',
          alignContent: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          height: 20,
        }}>
        {Data.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 5,
                width: 20,
                backgroundColor: '#8532a8',
                margin: 5,
                borderRadius: 20,
              }}
            />
          );
        })}
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              marginRight: 60,
              marginBottom: 20,
              width: width / 3.5,
              height: 50,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#8532a8',
            }}>
            <Text style={{color: '#fff', fontSize: 16}}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: 60,
              width: width / 3.5,
              height: 50,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#8532a8',
            }}>
            <Text style={{color: '#fff', fontSize: 16}}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
