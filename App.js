import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import MinValueScreen from './screens/MinValueScreen';
import ResultScreen from './screens/ResultScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  // State global untuk menyimpan hasil
  const [savedResults, setSavedResults] = React.useState([]);

  // Fungsi untuk menyimpan hasil baru
  const handleSaveResult = (value) => {
    setSavedResults((prevResults) => [...prevResults, value]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cari Nilai Terkecil" component={MinValueScreen} />
        <Stack.Screen name="Hasil">
          {(props) => (
            <ResultScreen
              {...props}
              onSaveResult={handleSaveResult}
              savedResults={savedResults}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
