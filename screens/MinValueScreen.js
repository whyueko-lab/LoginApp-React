import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function MinValueScreen({ navigation }) {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [num4, setNum4] = useState('');

  const handleFindMin = () => {
    if (!num1 || !num2 || !num3 || !num4) {
      Alert.alert('Kesalahan', 'Semua nilai harus diisi!');
      return;
    }

    const numbers = [parseFloat(num1), parseFloat(num2), parseFloat(num3), parseFloat(num4)];
    const minValue = Math.min(...numbers);

    navigation.navigate('Hasil', { minValue });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Masukkan 4 Nilai</Text>

      <TextInput style={styles.input} keyboardType="numeric" placeholder="Nilai 1" value={num1} onChangeText={setNum1} />
      <TextInput style={styles.input} keyboardType="numeric" placeholder="Nilai 2" value={num2} onChangeText={setNum2} />
      <TextInput style={styles.input} keyboardType="numeric" placeholder="Nilai 3" value={num3} onChangeText={setNum3} />
      <TextInput style={styles.input} keyboardType="numeric" placeholder="Nilai 4" value={num4} onChangeText={setNum4} />

      <Button title="Cari Nilai Terkecil" onPress={handleFindMin} />
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
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});
