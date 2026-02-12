import AppHeader from '@/components/AppHeader';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';




export default function Dashboard() {
  const featureBoxes = [
    { title: 'Personal Loan', color: '#FFA500', icon: <FontAwesome5 name="money-bill-wave" size={30} color="#fff" /> },
    { title: 'Electronics on EMI', color: '#FF6347', icon: <Ionicons name="tv-outline" size={30} color="#fff" /> },
    { title: 'Health Cover', color: '#8A2BE2', icon: <MaterialIcons name="health-and-safety" size={30} color="#fff" /> },
    { title: 'Home Loan', color: '#20B2AA', icon: <FontAwesome5 name="home" size={30} color="#fff" /> },
    { title: 'Gold Loan', color: '#FFD700', icon: <MaterialIcons name="emoji-events" size={30} color="#fff" /> },
  ];

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

    {/* <ScrollView style={styles.container}> */}
      
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Bajaj Finance</Text>
      </View> */}

      <View style={styles.loanBanner}>
        <Text style={styles.loanText}>Personal Loan Up to ₹55 Lakh</Text>
        <Text style={styles.subText}>Instant disbursal</Text>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyText}>Apply Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.featuresContainer}>
        {featureBoxes.map((box, index) => (
          <TouchableOpacity key={index} style={[styles.featureBox, { backgroundColor: box.color }]}>
            {box.icon}
            <Text style={styles.featureText}>{box.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    {/* </ScrollView> */}
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1020', // Dark background like your screenshot
    padding: 10,
  },
  header: {
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loanBanner: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  loanText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    color: '#fff',
    marginVertical: 5,
  },
  applyButton: {
    marginTop: 10,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  applyText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureBox: {
    width: '48%',
    height: 120,
    borderRadius: 10,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureText: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
});
