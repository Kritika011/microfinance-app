import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

export function AppBackground({ children }: { children: React.ReactNode }) {
  return (
    <LinearGradient
      colors={['#0B1020', '#101B3A', '#1A237E']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
