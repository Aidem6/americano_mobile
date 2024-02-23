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

function Home({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#222831' : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          {/* <Text style={[isDarkMode ? styles.darkThemeText : styles.lightThemeText, styles.highlight]}>Home Screen</Text> */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Game')}
            underlayColor='#fff'>
            <Text style={styles.buttonText}>Game</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
});

export default Home;