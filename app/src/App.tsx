import { StyleSheet, Text, View } from 'react-native';
import { Button, Theme } from 'tamagui';
import SendMessage from './components/SendMessage';

const App = () => {
  return (
    <View>
      <SendMessage />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App
