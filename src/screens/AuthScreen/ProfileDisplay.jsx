import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useCookies } from 'react-cookie';

const ProfileDisplay = () => {
  
  const [token] = useCookies(['myToken']);
  const [group] = useCookies(['myGroup']);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = () => {
    // Fetch profile data from the API
    fetch('http://192.168.0.106:8000/api/main/patient-profiles/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.access_token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
            console.log(data);
          const profile = data[0];
          setProfile(profile);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (!profile) {
    return (
      <View style={styles.container}>
        <Text>Loading profile...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Information</Text>
      <Text style={styles.label}>Full Name:</Text>
      <Text style={styles.value}>{profile.full_name}</Text>
      <Text style={styles.label}>Gender:</Text>
      <Text style={styles.value}>{profile.gender}</Text>
      <Text style={styles.label}>Date of Birth:</Text>
      <Text style={styles.value}>{profile.dob}</Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>{profile.email}</Text>
      <Text style={styles.label}>Phone Number:</Text>
      <Text style={styles.value}>{profile.phone_number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    marginBottom: 16,
  },
});



export default ProfileDisplay;
