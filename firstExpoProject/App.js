import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Title from './components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title text={"Todo App"} />
      <FirstComponent />
      <SecondComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
