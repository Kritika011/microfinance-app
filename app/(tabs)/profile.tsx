import AppHeader from '@/components/AppHeader';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Profile() {
  const router = useRouter();
  const ActionRow = ({ icon, text, danger, onPress }: any) => (
  <TouchableOpacity style={styles.actionRow} onPress={onPress}>
    <Ionicons
      name={icon}
      size={20}
      color={danger ? '#ff5252' : '#ec9c6a'}
    />
    <Text style={[styles.actionText, danger && { color: '#ff5252' }]}>
      {text}
    </Text>
    <Ionicons name="chevron-forward-outline" size={18} color="#aaa" />
  </TouchableOpacity>
);

  return (
    <>
      <AppHeader
        title="Micro Finance"
        showProfile={true}
        onProfilePress={() => console.log('Profile pressed')}
        rightIcon="notifications-outline"
        onRightPress={() => console.log('Notification pressed')}
      />

      <LinearGradient
        colors={['#0B1020', '#101B3A', '#1A237E']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <ScrollView showsVerticalScrollIndicator={false}>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarBox}>
            <Ionicons name="person-circle-outline" size={90} color="#ec9c6a" />
          </View>

          <Text style={styles.name}>Rahul Sharma</Text>
          <Text style={styles.subText}>Customer ID: MF102938</Text>
        </View>

        {/* Personal Info */}
        <View style={styles.card}>
          <InfoRow icon="call-outline" label="Mobile Number" value="+91 98765 43210" />
          <InfoRow icon="mail-outline" label="Email" value="rahul.sharma@email.com" />
          <InfoRow icon="location-outline" label="Address" value="Kolkata, West Bengal" />
        </View>

        {/* Account Info */}
        <View style={styles.card}>
          <InfoRow icon="card-outline" label="Account Type" value="Personal Loan" />
          <InfoRow icon="calendar-outline" label="Member Since" value="May 2023" />
          <InfoRow icon="shield-checkmark-outline" label="KYC Status" value="Verified" success />
        </View>

        {/* Actions */}
        <View style={styles.card}>
          <ActionRow icon="create-outline" text="Edit Profile" />
          <ActionRow icon="lock-closed-outline" text="Change Password" />
          <ActionRow icon="help-circle-outline" text="Help & Support" />
          <ActionRow
  icon="log-out-outline"
  text="Logout"
  danger
  onPress={() => router.replace('/login')}
/>
        </View>
       </ScrollView>
      </LinearGradient>
    </>
  );
}

/* ---------- Reusable Components ---------- */

const InfoRow = ({ icon, label, value, success }: any) => (
  <View style={styles.infoRow}>
    <Ionicons name={icon} size={20} color="#ec9c6a" />
    <View style={{ flex: 1, marginLeft: 10 }}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={[styles.infoValue, success && { color: '#4caf50' }]}>{value}</Text>
    </View>
  </View>
);

const ActionRow = ({ icon, text, danger }: any) => (
  <TouchableOpacity style={styles.actionRow}>
    <Ionicons
      name={icon}
      size={20}
      color={danger ? '#ff5252' : '#ec9c6a'}
    />
    <Text style={[styles.actionText, danger && { color: '#ff5252' }]}>
      {text}
    </Text>
    <Ionicons name="chevron-forward-outline" size={18} color="#aaa" />
  </TouchableOpacity>
);

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  profileCard: {
    alignItems: 'center',
    marginBottom: 20,
  },

  avatarBox: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 60,
    padding: 10,
    marginBottom: 10,
  },

  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },

  subText: {
    color: '#ccc',
    fontSize: 13,
    marginTop: 4,
  },

  card: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },

  infoLabel: {
    color: '#aaa',
    fontSize: 12,
  },

  infoValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },

  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },

  actionText: {
    flex: 1,
    marginLeft: 12,
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});
