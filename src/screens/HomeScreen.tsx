import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert, TextInput } from 'react-native';
import { savePlaces, loadPlaces } from '../utils/storage';
import PlaceItem from '../components/PlaceItem';

const HomeScreen = ({ navigation }) => {
  const [places, setPlaces] = useState([]);
  const [newPlaceName, setNewPlaceName] = useState('');
  const [newPlaceHours, setNewPlaceHours] = useState('');

  useEffect(() => {
    const fetchPlaces = async () => {
      const storedPlaces = await loadPlaces();
      setPlaces(storedPlaces);
    };
    fetchPlaces();
  }, []);

  const handleAddPlace = () => {
    if (!newPlaceName || !newPlaceHours) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    const newPlace = {
      id: Date.now().toString(),
      name: newPlaceName,
      hours: newPlaceHours,
      location: { latitude: -23.55052, longitude: -46.633308 }, // Local fictício
    };

    const updatedPlaces = [...places, newPlace];
    setPlaces(updatedPlaces);
    savePlaces(updatedPlaces);

    setNewPlaceName('');
    setNewPlaceHours('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Locais de RPG</Text>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PlaceItem
            place={item}
            onPress={() => navigation.navigate('Map', { location: item.location })}
          />
        )}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome do local"
        placeholderTextColor="#aaa"
        value={newPlaceName}
        onChangeText={setNewPlaceName}
      />
      <TextInput
        style={styles.input}
        placeholder="Horário de funcionamento"
        placeholderTextColor="#aaa"
        value={newPlaceHours}
        onChangeText={setNewPlaceHours}
      />
      <Button title="Adicionar Local" onPress={handleAddPlace} color="#6200ee" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
});

export default HomeScreen;
