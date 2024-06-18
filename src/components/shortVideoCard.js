import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import * as Icon from 'react-native-feather';

export default function ShortVideoCard({item}) {
  return (
    <View style={styles.container}>
      <Image source={item?.image} style={styles.image} />
      <View style={styles.overlay}>
        <Icon.MoreVertical stroke={'white'} strokeWidth={1.4} height={20} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.viewCount}>{item?.viewCount} views</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 256,
    width: 160,
    marginRight: 12,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    height: '70%',
    width: '100%',
    borderRadius: 16,
  },
  overlay: {
    position: 'absolute',
    top: 12,
    right: 4,
    alignItems: 'flex-end',
  },
  textContainer: {
    padding: 8,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textShadowColor: 'black',
    textShadowRadius: 4,
  },
  viewCount: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    textShadowColor: 'black',
    textShadowRadius: 2,
  },
});
