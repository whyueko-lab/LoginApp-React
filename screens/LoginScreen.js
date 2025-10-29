import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const VALID_USERNAME = 'admin';
  const VALID_PASSWORD = '12345';

  const handleLogin = () => {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      navigation.replace('Cari Nilai Terkecil');
    } else {
      Alert.alert('Login Gagal', 'Username atau Password salah!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Aplikasi</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
});
