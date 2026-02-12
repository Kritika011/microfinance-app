import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type AppHeaderProps = {
  title?: string;
  titleImage?: any; // pass require('path/to/image') or {uri}
  showProfile?: boolean; // show profile icon instead of back
  onProfilePress?: () => void;
  rightIcon?: keyof typeof Ionicons.glyphMap; // notification icon
  onRightPress?: () => void;
};

export default function AppHeader({
  title,
  titleImage,
  showProfile = false,
  onProfilePress,
  rightIcon,
  onRightPress,
}: AppHeaderProps) {
  return (
    <View style={styles.container}>
      {/* Left: Profile Icon */}
      {showProfile ? (
        <TouchableOpacity onPress={onProfilePress} style={styles.left}>
          <Ionicons name="person-circle-outline" size={28} color="#fff" />
        </TouchableOpacity>
      ) : (
        <View style={styles.left} /> // placeholder
      )}

      {/* Center: Title or Image */}
      <View style={styles.center}>
        {titleImage ? (
          <Image source={titleImage} style={styles.titleImage} resizeMode="contain" />
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}
      </View>

      {/* Right: Notification Icon */}
      {rightIcon ? (
        <TouchableOpacity onPress={onRightPress} style={styles.right}>
          <Ionicons name={rightIcon as keyof typeof Ionicons.glyphMap} size={24} color="#fff" />
        </TouchableOpacity>
      ) : (
        <View style={styles.right} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#0B1020',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    borderBottomWidth: 1,
  },
  left: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  titleImage: {
    width: 120,
    height: 40,
  },
  right: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
