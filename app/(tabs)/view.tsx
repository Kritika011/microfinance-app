// import { router } from '@/.expo/types/router';
import AppHeader from '@/components/AppHeader';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoanOverview() {
  const loan = {
    name: 'HP - LAPTOP',
    accountNumber: 'P57VDP31592762',
    loanAmount: 62600,
    paid: 37515,
    remaining: 25085,
    loanStart: '30 May 2025',
    tenureMonths: 18,
    interestRate: 21.74,
    emiPaid: 11,
    emiPending: 7,
    nextEmi: 3848,
    daysLeft: 21
  };

  const progress = loan.paid / loan.loanAmount;
  const router = useRouter();

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
    {/* // <ScrollView style={styles.container}> */}
      {/* Header */}
      <View style={styles.header}>
       
        <Text style={styles.headerText}>{loan.name}</Text>
        <Text style={styles.status}>Active</Text>
      </View>

      {/* Next EMI */}
      <View style={styles.emiAlert}>
        <Text style={styles.emiAlertText}>
          Next EMI due in {loan.daysLeft} days: ₹{loan.nextEmi}
        </Text>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Pay now</Text>
        </TouchableOpacity>
      </View>

      {/* Loan Amount & Progress */}
      <View style={styles.loanBox}>
        <Text style={styles.loanLabel}>Loan amount</Text>
        <Text style={styles.loanAmount}>₹{loan.loanAmount.toLocaleString()}</Text>

        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { flex: progress }]} />
          <View style={{ flex: 1 - progress }} />
        </View>

        <View style={styles.progressLabels}>
          <Text style={styles.paid}>Paid ₹{loan.paid.toLocaleString()}</Text>
          <Text style={styles.remaining}>Remaining ₹{loan.remaining.toLocaleString()}</Text>
        </View>

        {/* Loan details */}
       {/* Loan details */}
<View style={styles.details}>
  <View style={styles.row}>
    <Text style={styles.leftText}>Loan start date</Text>
    <Text style={styles.rightText}>{loan.loanStart}</Text>
  </View>

  <View style={styles.row}>
    <Text style={styles.leftText}>Tenure</Text>
    <Text style={styles.rightText}>{loan.tenureMonths} months</Text>
  </View>

  <View style={styles.row}>
    <Text style={styles.leftText}>Interest rate (p.a.)</Text>
    <Text style={styles.rightText}>{loan.interestRate}%</Text>
  </View>

  <View style={styles.row}>
    <Text style={styles.leftText}>EMIs paid</Text>
    <Text style={styles.rightText}>{loan.emiPaid}</Text>
  </View>

  <View style={styles.row}>
    <Text style={styles.leftText}>EMIs pending</Text>
    <Text style={styles.rightText}>{loan.emiPending}</Text>
  </View>
</View>


        <TouchableOpacity
              onPress={() => router.push('/loan')} // navigate to Documents page
            //   style={styles.button}
             style={styles.viewDetailsButton}>
          <Text style={{ color: '#007bff' }}>View more details &gt;</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      {/* <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="rupee" size={24} color="#007bff" />
          <Text>Make loan payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="bank" size={24} color="#007bff" />
          <Text>Change bank account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="file-text" size={24} color="#007bff" />
          <Text>View No Dues Certificate</Text>
        </TouchableOpacity>
      </View> */}

      {/* Documents Section */}
     {/* Documents Section */}
<View style={styles.documents}>
  <Text style={styles.sectionTitle}>Documents & Statements</Text>

  <TouchableOpacity style={styles.docCard}>
    <Ionicons name="document-text-outline" size={20} color="#ec9c6a" />
    <Text style={styles.docText}>First EMI break-up</Text>
    <Ionicons name="download-outline" size={18} color="#ec9c6a" />
  </TouchableOpacity>

  <TouchableOpacity style={styles.docCard}>
    <Ionicons name="document-text-outline" size={20} color="#ec9c6a" />
    <Text style={styles.docText}>Statement of account</Text>
    <Ionicons name="download-outline" size={18} color="#ec9c6a" />
  </TouchableOpacity>
</View>

    {/* </ScrollView> */}
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#fff' },
  details: {
  marginTop: 10,
},

row: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginVertical: 6,
},

leftText: {
  color: '#666',
  fontSize: 14,
},

rightText: {
  color: '#111',
  fontSize: 14,
  fontWeight: '600',
},

documents: {
  marginTop: 10,
},

sectionTitle: {
  fontWeight: '700',
  fontSize: 16,
  marginBottom: 12,
  color: '#fff',
},

docCard: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'rgba(255,255,255,0.08)',
  padding: 14,
  borderRadius: 10,
  marginBottom: 10,
},

docText: {
  flex: 1,
  marginLeft: 10,
  color: '#fff',
  fontSize: 14,
},

  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
  headerText: { fontSize: 18, fontWeight: 'bold',color: '#fff' },
  status: { color: 'green', fontWeight: '600' },
  emiAlert: { backgroundColor: '#fff4e5', padding: 15, borderRadius: 8, marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  emiAlertText: { color: '#b85c00', fontWeight: '500' },
  payButton: { backgroundColor: '#ff6700', paddingVertical: 5, paddingHorizontal: 15, borderRadius: 5 },
  payButtonText: { color: '#fff', fontWeight: '600' },
  loanBox: { backgroundColor: '#f9f9f9', padding: 15, borderRadius: 10, marginBottom: 20 },
  loanLabel: { color: '#555' },
  loanAmount: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  progressBarBackground: { flexDirection: 'row', height: 8, backgroundColor: '#ddd', borderRadius: 5, overflow: 'hidden', marginVertical: 10 },
  progressBarFill: { backgroundColor: '#4caf50' },
  progressLabels: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  paid: { color: '#4caf50' },
  remaining: { color: '#555' },
  // details: { marginVertical: 10 },
  viewDetailsButton: { marginTop: 5 },
  quickActions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  actionButton: { alignItems: 'center', width: '30%' },
  // documents: {},
  // sectionTitle: { fontWeight: 'bold', fontSize: 16, marginBottom: 10 },
  docButton: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 }
});
