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
import Board from '../../components/Board';

function Game({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#222831' : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
        <View style={styles.container}>
          <Board />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
            underlayColor='#fff'>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  highlight: {
    fontWeight: '700',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  darkThemeText: {
    color: '#fff',
  },
  lightThemeText: {
    color: '#000',
  },
  button:{
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#00ADB5',
    borderRadius: 8,
  },
  buttonText:{
    color: '#222831',
    textAlign: 'center',
    paddingLeft : 10,
    paddingRight : 10,
    fontWeight: '700'
  }
});

export default Game;
