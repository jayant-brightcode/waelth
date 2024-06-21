import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Text, StatusBar, Dimensions } from 'react-native';
import Video from 'react-native-video';
import { useRoute } from '@react-navigation/native';

const VideoPlayerScreen = () => {


  const route = useRoute();
  const { data } = route.params

  console.log(data)


  const [showTitle, setShowTitle] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const { width, height } = Dimensions.get('window');
    if (width > height) {
      setIsLandscape(true);
    } else {
      setIsLandscape(false);
    }

    const onChange = ({ window: { width, height } }) => {
      if (width > height) {
        setIsLandscape(true);
      } else {
        setIsLandscape(false);
      }
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    // Hide status bar for full screen effect
    StatusBar.setHidden(true);

    return () => {
      subscription?.remove();
      // Reset status bar visibility
      StatusBar.setHidden(false);
    };
  }, []);

  const handlePress = () => {
    setShowTitle(!showTitle);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={[styles.videoContainer, isLandscape && styles.landscapeVideoContainer]}>
          <Video
            source={{uri:data}}
            style={styles.video}
            resizeMode="cover"
            controls
          />
          {showTitle && <Text style={styles.title}>INVESTOR CARE BLUEPRINT</Text>}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  videoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  landscapeVideoContainer: {
    flexDirection: 'row',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  title: {
    position: 'absolute',
    top: 30,
    left: 20,
    color: 'white',
    fontSize: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
});

export default VideoPlayerScreen;
