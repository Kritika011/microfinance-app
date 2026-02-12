import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  return (
    <LinearGradient
      colors={['#0B1020', '#101B3A', '#1A237E']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* Top branding */}
      <View style={styles.header}>
        <Text style={styles.appName}>MicroFinance</Text>
        <Text style={styles.tagline}>Smart • Secure • Simple</Text>
      </View>

      {/* Glass Login Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>
          Login using your registered mobile number
        </Text>

        {/* Mobile Input */}
        <View style={styles.inputBox}>
          <Ionicons name="call-outline" size={20} color="#fff" />
          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor="rgba(255,255,255,0.6)"
            keyboardType="phone-pad"
            style={styles.input}
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/otp')}
        >
          <Text style={styles.buttonText}>Send OTP</Text>
          <Ionicons name="arrow-forward" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        RBI Compliant • Secure Login
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },

  header: {
    marginTop: 60,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  tagline: {
    color: 'rgba(255,255,255,0.7)',
    marginTop: 6,
  },

  card: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 10,
    padding: 30,
    borderWidth: 2.5,
    borderColor: 'rgba(255,255,255,0.1)',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 30,
    elevation: 0,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  subtitle: {
    marginTop: 6,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 20,
  },

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    backgroundColor: 'rgba(255,255,255,0.08)',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
  },

  button: {
    backgroundColor: '#4F6DFF',
    paddingVertical: 16,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  footer: {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.5)',
    marginBottom: 20,
  },
});
