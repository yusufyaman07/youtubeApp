import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import * as Icon from 'react-native-feather';
import {formatViews} from '../utils/numbers';

export default function VideoCard({video}) {
  return (
    <View style={styles.container}>
      <Image
        source={video && video.thumbnail}
        style={styles.thumbnail}
        resizeMode="cover"
      />

      <View style={styles.overlay}>
        <View style={styles.lengthBackground}>
          <Text style={styles.lengthText}>{video && video.lengthText}</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Image
          source={video && video.channelThumbnail}
          style={styles.channelThumbnail}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{video && video.title}</Text>
          <Text style={styles.channelText}>
            {video &&
              (video.channelTitle.length > 20
                ? video.channelTitle.slice(0, 20) + '...'
                : video.channelTitle)}{' '}
            • {formatViews(video?.viewCount)} views • {video?.publishedText}
          </Text>
        </View>
        <View style={styles.moreIcon}>
          <Icon.MoreVertical stroke="white" strokeWidth={2} height={15} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    overflow: 'hidden',
  },
  thumbnail: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
    padding: 5,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 8,
  },
  lengthBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  lengthText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  channelThumbnail: {
    height: 36,
    width: 36,
    borderRadius: 18,
    marginRight: 8,
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  channelText: {
    color: '#8B8B8B',
    fontSize: 12,
  },
  moreIcon: {
    alignSelf: 'flex-start',
  },
});
