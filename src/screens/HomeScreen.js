import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {themeColors} from '../theme';
import * as Icon from 'react-native-feather';
import {categories, shortVideos} from '../constants';
import {fetchTrendingVideos} from '../api/youtube';
import {StatusBar} from 'react-native';
import ShortVideoCard from '../components/shortVideoCard';
import VideoCard from '../components/videoCard';

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetchTrendingVideos();
    setVideos(data);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="light-content" />

        {/* Logo and profile icons */}
        <SafeAreaView style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/icons/youtubeIcon.png')}
              style={styles.logo}
            />
            <Text style={styles.logoText}>YouTube</Text>
          </View>
          <View style={styles.iconsContainer}>
            <Icon.Cast stroke="white" strokeWidth={1.2} height={22} />
            <Icon.Bell stroke="white" strokeWidth={1.2} height={22} />
            <Icon.Search stroke="white" strokeWidth={1.2} height={22} />
            <Image
              source={require('../../assets/images/yusufyaman.jpeg')}
              style={styles.avatar}
            />
          </View>
        </SafeAreaView>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}>
          {categories.map((category, index) => {
            const isActive = category === activeCategory;
            const textClass = isActive
              ? styles.activeCategoryText
              : styles.categoryText;
            const backgroundStyle = isActive
              ? styles.activeCategoryBackground
              : styles.categoryBackground;

            return (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveCategory(category)}
                style={[styles.categoryButton, backgroundStyle]}>
                <Text style={textClass}>{category}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Suggested Video */}
        {videos && videos[4] && <VideoCard video={videos[4]} />}

        {/* Short Videos */}
        <View style={styles.shortVideosContainer}>
          <View style={styles.shortsHeader}>
            <Image
              source={require('../../assets/icons/shortsIcon.png')}
              style={styles.shortsIcon}
            />
            <Text style={styles.shortsText}>Shorts</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.shortVideosList}>
            {shortVideos.map((item, index) => (
              <ShortVideoCard item={item} key={index} />
            ))}
          </ScrollView>
        </View>

        {/* Videos */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.videosContainer}>
          {videos.map((video, index) => (
            <VideoCard video={video} key={index} />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.bg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 8,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  logo: {
    height: 28,
    width: 40,
  },
  logoText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 6,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 28,
    width: 28,
    borderRadius: 14,
    marginLeft: 12,
  },
  categoriesContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  categoryButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  categoryText: {
    color: 'white',
    fontSize: 16,
  },
  activeCategoryText: {
    color: 'black',
    fontSize: 16,
  },
  categoryBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  activeCategoryBackground: {
    backgroundColor: 'white',
  },
  shortVideosContainer: {
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 4,
    borderBottomColor: '#8B8B8B',
    borderTopWidth: 4,
    borderTopColor: '#8B8B8B',
  },
  shortsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginBottom: 8,
  },
  shortsIcon: {
    height: 24,
    width: 20,
  },
  shortsText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 6,
  },
  shortVideosList: {
    paddingHorizontal: 8,
  },
  videosContainer: {
    paddingBottom: 20,
  },
});
