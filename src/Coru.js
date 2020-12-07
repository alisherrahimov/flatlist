import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

export default function Coru({item}) {
  console.log(item);
  return (
    <View style={styles.View}>
      <Image
        source={item.image1}
        style={{width: 300, height: 300}}
        borderRadius={100}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    backgroundColor: '#fff',
    width: width,
    height: height / 2,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
