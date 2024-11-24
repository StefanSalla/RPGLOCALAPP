import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PlaceItem = ({ place, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View>
        <Text style={styles.name}>{place.name}</Text>
        <Text style={styles.hours}>{place.hours}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  hours: {
    color: '#aaa',
    fontSize: 14,
  },
});

export default PlaceItem;
