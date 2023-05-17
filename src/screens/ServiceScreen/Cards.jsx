import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 16,
    width: '100%',

  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3180e7',
    
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ffff',
    paddingTop: 16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    opacity: 0.9,
    paddingTop: 16,
  },
  icon: {
    marginBottom: 8,
  },
});

const Cards = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.0.106:8000/api/main/service-models/'); // Replace with your API endpoint
      const data = await response.json();
      setServiceData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/blood.png')}
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.7, marginTop: 10 }}
      >
        <ScrollView>
          <View style={styles.container}>
            {serviceData.map((service) => (
              <View key={service.id} style={styles.card}>
                <FontAwesome5 name="hand-holding-medical" size={24} color="#3180e7" style={styles.icon} />
                <Text style={styles.title}>{service.test_name}</Text>
                <Text style={styles.price}>BDT. {service.price}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Cards;
