import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@rpg_places';

export const savePlaces = async (places: any) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(places));
  } catch (error) {
    console.error('Erro ao salvar locais:', error);
  }
};

export const loadPlaces = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Erro ao carregar locais:', error);
    return [];
  }
};
