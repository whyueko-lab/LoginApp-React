import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, ScrollView } from 'react-native';

export default function ResultScreen({ route, navigation, onSaveResult, savedResults }) {
  const { minValue } = route.params;
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    if (!isSaved) {
      onSaveResult(minValue); // Simpan ke daftar hasil
      setIsSaved(true);
      Alert.alert('Berhasil', 'Nilai terkecil berhasil disimpan!');
    } else {
      Alert.alert('Sudah Disimpan', 'Nilai ini sudah tersimpan sebelumnya.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Nilai terkecil adalah:</Text>
      <Text style={styles.result}>{minValue}</Text>

      <View style={styles.buttonGroup}>
        <Button title="Kembali ke Input" onPress={() => navigation.goBack()} />
        <View style={{ height: 10 }} />
        <Button title="Simpan" onPress={handleSave} />
        <View style={{ height: 10 }} />
        <Button title="Logout" color="red" onPress={() => navigation.replace('Login')} />
      </View>

      {savedResults.length > 0 && (
        <View style={styles.historyContainer}>
          <Text style={styles.historyTitle}>📘 Riwayat Nilai Tersimpan:</Text>
          {savedResults.map((value, index) => (
            <Text key={index} style={styles.historyItem}>• {value}</Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
  result: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'blue',
    marginVertical: 20,
  },
  buttonGroup: {
    width: '70%',
    marginBottom: 20,
  },
  historyContainer: {
    width: '100%',
    marginTop: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
  },
  historyTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
  historyItem: {
    fontSize: 14,
    color: '#333',
  },
});
