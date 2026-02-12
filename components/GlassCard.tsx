import { StyleSheet, View } from 'react-native';

export function GlassCard({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
     backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 10,
    padding: 18,
    borderWidth: 2.5,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 30,
    elevation: 0,
  },
});
