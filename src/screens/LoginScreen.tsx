import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (login.length > 4 && password.length > 4) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro', 'Login e senha devem ter mais de 4 caracteres');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Login"
        placeholderTextColor="#aaa"
        onChangeText={setLogin}
        value={login}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Entrar" onPress={handleLogin} color="#6200ee" />
      <Button
        title="Cadastrar-se"
        onPress={() => navigation.navigate('Register')}
        color="#03dac5"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
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

export default LoginScreen;
