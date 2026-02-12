import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0B1020' }} edges={['top']}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#0B1020',
            borderTopColor: 'rgba(255,255,255,0.1)',
          },
          tabBarActiveTintColor: '#ec9c6a',
          tabBarInactiveTintColor: 'rgba(255,255,255,0.5)',
        }}
      >
        {/* HOME */}
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />

        {/* SERVICE */}
        <Tabs.Screen
          name="service"
          options={{
            title: 'Loans',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="briefcase-outline" size={size} color={color} />
            ),
          }}
        />

        {/* PROFILE */}
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />

        {/* 🔒 HIDDEN SCREEN (keeps bottom nav) */}
        <Tabs.Screen
          name="view"
          options={{
            href: null, // 👈 THIS IS THE KEY
          }}
        />
        <Tabs.Screen
          name="loan"
          options={{
            href: null, // 👈 THIS IS THE KEY
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
