import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const VALID_USERNAME = 'admin';
  const VALID_PASSWORD = '12345';

  const handleLogin = () => {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      setLoginSuccess(true);
      setTimeout(() => {
        navigation.replace('Cari Nilai Terkecil');
      }, 2000); // pindah screen setelah 2 detik
    } else {
      Alert.alert('Login Gagal', 'Username atau Password salah!');
    }
  };

  return (
    <View style={styles.container}>
      {loginSuccess ? (
        <View style={styles.successContainer}>
          <Text style={styles.successText}>✅ Login Berhasil</Text>
          <Text style={styles.welcomeText}>Selamat Datang Kembali, {username}!</Text>
        </View>
      ) : (
        <>
          <Text style={styles.title}>Aplikasi UTS 411222044</Text>
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
        </>
      )}
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
  successContainer: {
    alignItems: 'center',
  },
  successText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 18,
    color: '#333',
  },
});
