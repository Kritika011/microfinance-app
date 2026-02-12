import AppHeader from '@/components/AppHeader';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoanDetails() {
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
          
          {/* Loan Details Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Loan details</Text>

            <DetailRow label="Total loan Outstanding" value="₹22,500" />
            <DetailRow label="Loan account number" value="P57VPCD57383102" />
            <DetailRow label="Loan disbursal date" value="21 Oct 2025" />
            <DetailRow label="Downpayment" value="₹15,000" />
            <DetailRow label="Rate of interest p.a." value="0%" />
            <DetailRow label="EMI start date" value="02 Dec 2025" />
            <DetailRow label="Next EMI due" value="₹3,750" info />
            <DetailRow label="Next EMI due date" value="02 Feb 2026" info />
            <DetailRow label="Last EMI paid on" value="02 Jan 2026" />
            <DetailRow label="EMI end date" value="02 Jul 2026" />
            <DetailRow label="Loan closure date" value="NA" />
          </View>

          {/* Fees & Charges Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Fees and charges</Text>

            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>Types of fees</Text>
              <Text style={styles.tableHeaderText}>Applicable charges</Text>
            </View>

            <FeeRow label="Convenience fees 1st EMI" value="₹236" />
            <FeeRow label="MFR subvention IRR NDED" value="₹2070" />
            <FeeRow label="DLR subvention IRR DED" value="₹797" />
            <FeeRow label="Advance EMI" value="₹15000" />
            <FeeRow label="PF RECBL FRM MFR-IRR-NDED" value="₹399" />

            <TouchableOpacity style={styles.learnMore}>
              <Text style={styles.learnMoreText}>Learn more about fees and charges</Text>
              <Text style={styles.watchVideo}>Watch Video</Text>
            </TouchableOpacity>
          </View>

          {/* Agreement Download */}
          <View style={styles.downloadBox}>
            <Text style={styles.downloadText}>
              View your agreement to know about the charges you agreed
            </Text>

            <TouchableOpacity style={styles.downloadBtn}>
              <Ionicons name="download-outline" size={18} color="#ec9c6a" />
              <Text style={styles.downloadBtnText}>Download</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </LinearGradient>
    </>
  );
}

/* ---------- Reusable Rows ---------- */

const DetailRow = ({ label, value, info }: any) => (
  <View style={styles.row}>
    <View style={styles.rowLeft}>
      <Text style={styles.label}>{label}</Text>
      {info && <Ionicons name="information-circle-outline" size={14} color="#aaa" />}
    </View>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const FeeRow = ({ label, value }: any) => (
  <View style={styles.feeRow}>
    <Text style={styles.feeLabel}>{label}</Text>
    <Text style={styles.feeValue}>{value}</Text>
  </View>
);

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  card: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 12,
    padding: 15,
    marginBottom: 16,
  },

  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },

  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  label: {
    color: '#cfd3ff',
    fontSize: 13,
  },

  value: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },

  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  tableHeaderText: {
    color: '#bbb',
    fontSize: 13,
    fontWeight: '600',
  },

  feeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },

  feeLabel: {
    color: '#e0e0ff',
    fontSize: 13,
  },

  feeValue: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },

  learnMore: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  learnMoreText: {
    color: '#ccc',
    fontSize: 12,
  },

  watchVideo: {
    color: '#ec9c6a',
    fontSize: 12,
    fontWeight: '600',
  },

  downloadBox: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  downloadText: {
    color: '#ddd',
    fontSize: 12,
    width: '70%',
  },

  downloadBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  downloadBtnText: {
    color: '#ec9c6a',
    fontWeight: '600',
  },
});
