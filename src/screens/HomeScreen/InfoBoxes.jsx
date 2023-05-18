import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoBoxes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.card, styles.topLeftCard]}>
          <Text style={styles.title}>Current Appointments</Text>
          <Text style={styles.value}>123</Text>
        </View>
        <View style={[styles.card, styles.topRightCard]}>
          <Text style={styles.title}>Passed Appointments</Text>
          <Text style={styles.value}>456</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={[styles.card, styles.bottomLeftCard]}>
          <Text style={styles.title}>Total Tests</Text>
          <Text style={styles.value}>789</Text>
        </View>
        <View style={[styles.card, styles.bottomRightCard]}>
          <Text style={styles.title}>Total Feedbacks</Text>
          <Text style={styles.value}>187</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  card: {
    flex: 1,
    height: 100,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#3180e7',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  topLeftCard: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 0,
    backgroundColor: 'lightblue',
  },
  topRightCard: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 0,
    backgroundColor: 'lightblue',
  },
  bottomLeftCard: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 0,
    backgroundColor: 'lightblue',
  },
  bottomRightCard: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 0,
    backgroundColor: 'lightblue',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default InfoBoxes;
