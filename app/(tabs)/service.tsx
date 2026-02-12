import AppHeader from '@/components/AppHeader';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const loansData = [
  {
    id: '1',
    type: 'HP - LAPTOP',
    accountNumber: 'P57VPDP31592762',
    amount: 62600,
    status: 'Active'
  },
  {
    id: '2',
    type: 'MITSUBISHI - AIR CONDITIONER',
    accountNumber: 'P57VPCD57383102',
    amount: 45000,
    status: 'Active'
  }
];

export default function LoansScreen() {
  const [filter, setFilter] = useState('All');
  const router = useRouter();
  const filteredLoans = loansData.filter(loan => filter === 'All' || loan.status === filter);

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
    {/* <View style={styles.container}> */}
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#555" />
        <Text style={styles.searchText}>Search across Bajaj Finserv</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {['All', 'Active', 'Closed'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, filter === tab && styles.activeTab]}
            onPress={() => setFilter(tab)}
          >
            <Text style={[styles.tabText, filter === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Loan Cards */}
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {filteredLoans.map(loan => (
          <View key={loan.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.loanType}>{loan.type}</Text>
              <Text style={styles.loanAmount}>₹{loan.amount.toLocaleString()}</Text>
            </View>
            <Text style={styles.accountNumber}>Loan account number: {loan.accountNumber}</Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button}>
                <Ionicons name="document-text-outline" size={18} color="#007AFF" />
                <Text style={styles.buttonText}>Repayment Schedule</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Ionicons name="document-text-outline" size={18} color="#007AFF" />
                <Text style={styles.buttonText}>Statement of Account</Text>
              </TouchableOpacity>
            </View>

             <TouchableOpacity
      onPress={() => router.push('/view')} // navigate to Documents page
    //   style={styles.button}
    >
      <Text style={styles.viewDocs}>View Details &gt;</Text>
    </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    {/* </View> */}
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8', padding: 10 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10
  },
  searchText: { marginLeft: 8, color: '#555' },
  tabs: { flexDirection: 'row', marginBottom: 10 },
  tab: { flex: 1, padding: 10, alignItems: 'center', borderRadius: 8, backgroundColor: '#f0ffd3', marginHorizontal: 2 },
  activeTab: { backgroundColor: '#007AFF' },
  tabText: { color: '#555', fontWeight: '500' },
  activeTabText: { color: '#fff' },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  loanType: { fontWeight: '600', fontSize: 16 },
  loanAmount: { fontWeight: '600', fontSize: 16, color: '#007AFF' },
  accountNumber: { color: '#555', marginBottom: 10 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  button: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6F0FF', padding: 8, borderRadius: 8 },
  buttonText: { marginLeft: 5, color: '#007AFF', fontSize: 12 },
  viewDocs: { color: '#041528', fontWeight: '500' }
});
