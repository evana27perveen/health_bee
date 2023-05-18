import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { useCookies } from 'react-cookie';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#3180e7',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  icon: {
    marginBottom: 4,
  },
  dropdownContainer: {
    position: 'absolute',
    bottom: 60,
    right: 0,
    backgroundColor: '#3180e7',
    padding: 10,
    zIndex: 999,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 40,
    marginBottom: 2,
    marginRight: 15,
  },
  dropdownItem: {
    color: 'white',
    fontSize: 16,
    padding: 8,
    fontWeight: 'bold',
  },
});

const BottomNavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [token, setToken, removeToken] = useCookies(['myToken']);
  const [group, setGroup, removeGroup] = useCookies(['myGroup']);

  const navigation = useNavigation();

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
   
    removeToken('access_token');
    removeGroup('group');

    console.log('Logged out successfully');

    navigation.navigate('Login');
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={25} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity >
          <MaterialIcons name="history-edu" size={25} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity >
          <Entypo name="new-message" size={25} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Services')}>
          <MaterialIcons name="medical-services" size={25} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleDropdown}>
          <Ionicons name="settings" size={25} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>

      {isDropdownOpen && (
        <View style={styles.dropdownContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.dropdownItem}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.dropdownItem}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default BottomNavBar;
