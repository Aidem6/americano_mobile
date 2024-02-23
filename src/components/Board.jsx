import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function Board() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Board</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, {flexGrow: 1}]}
          onPress={() => console.log('heelp')}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {flexGrow: 2}]}
          onPress={() => console.log('check')}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>Check</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {flexGrow: 2}]}
          onPress={() => console.log('bet')}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>Bet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  highlight: {
    fontWeight: '700',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    paddingVertical: 10,
    gap: 20,
  },
  button: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#00ADB5',
    borderRadius: 8,
  },
  buttonText: {
    color: '#222831',
    textAlign: 'center',
    paddingLeft : 10,
    paddingRight : 10,
    fontWeight: '700',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft : 10,
    paddingRight : 10,
    fontWeight: '700',
  }
});

export default Board;
