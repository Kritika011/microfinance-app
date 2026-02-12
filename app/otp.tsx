import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Alert, Animated, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function OtpScreen() {
  const [otp, setOtp] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;
  const [timer, setTimer] = useState(60);
const [canResend, setCanResend] = useState(false);


  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
useEffect(() => {
  Animated.parallel([
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }),
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }),
  ]).start();

  const interval = setInterval(() => {
    setTimer(prev => {
      if (prev <= 1) {
        clearInterval(interval);
        setCanResend(true);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(interval);
}, []);
const resendOtp = () => {
  Alert.alert('OTP Sent', 'New OTP is 123456');
  setTimer(60);
  setCanResend(false);
};

  const verifyOtp = () => {
    if (otp === '123456') {
      router.replace('/(tabs)');
    } else {
      Alert.alert('Invalid OTP', 'Use OTP: 123456');
    }
  };

  return (
    <LinearGradient
      colors={['#0B1020', '#101B3A', '#1A237E']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* Back Button */}
      <TouchableOpacity style={styles.back} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Animated Card */}
      <Animated.View
        style={[
          styles.card,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.subtitle}>
          Enter the 6-digit OTP sent to your mobile
        </Text>

        {/* OTP Input */}
        <TextInput
  value={otp}
  onChangeText={setOtp}
  maxLength={6}
  keyboardType="number-pad"
  placeholder="123456"
  placeholderTextColor="rgba(255,255,255,0.6)"
  style={styles.otpInput}
/>

        {/* Verify Button */}
        <TouchableOpacity style={styles.button} onPress={verifyOtp}>
          <Text style={styles.buttonText}>Verify & Continue</Text>
          <Ionicons name="checkmark-circle" size={20} color="#fff" />
        </TouchableOpacity>

        {/* Hint */}
        

{!canResend ? (
  <Text style={styles.timerText}>
    Resend OTP in 00:{timer < 10 ? `0${timer}` : timer}
  </Text>
) : (
  <TouchableOpacity onPress={resendOtp}>
    <Text style={styles.resendText}>Resend OTP</Text>
  </TouchableOpacity>
)}

      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },

  back: {
    position: 'absolute',
    top: 60,
    left: 24,
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
    marginBottom: 24,
  },

  otpInput: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 16,
    paddingVertical: 16,
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: 10,
    color: '#FFFFFF',
    marginBottom: 24,
  },

  button: {
    backgroundColor: '#4F6DFF',
    paddingVertical: 16,
    borderRadius: 18,
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

  hint: {
    textAlign: 'center',
    marginTop: 14,
    color: 'rgba(255,255,255,0.5)',
    fontSize: 13,
  },
  timerText: {
  textAlign: 'center',
  color: 'rgba(255,255,255,0.6)',
  marginTop: 15,
  marginBottom: 0,
  fontSize: 14,
},

resendText: {
  textAlign: 'center',
  color: '#4F6DFF',
  marginTop: 15,
  marginBottom: 0,
  fontSize: 15,
  fontWeight: '600',
},

});
