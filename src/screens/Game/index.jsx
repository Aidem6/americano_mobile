import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Board from '../../components/Board';
import CardList from '../../components/CardList';

function Game() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#010710' : '#fff',
  };

  const [ gameData, setGameData ] = useState({
    players: [
      {
        id: 123,
        name: "player",
        cards: [
          {
            value: "A",
            color: "♥"
          },
          {
            value: "10",
            color: "♥"
          },
          {
            value: "J",
            color: "♥"
          },
          {
            value: "K",
            color: "♥"
          },
          {
            value: "Q",
            color: "♥"
          },
        ]
      },
      {
        id: 1234,
        name: "player2",
        cards: [
          {
            value: "A",
            color: "♥"
          },
          {
            value: "J",
            color: "♥"
          },
        ]
      },
      {
        id: 12345,
        name: "player3",
        cards: [
          {
            value: "A",
            color: "♥"
          },
          {
            value: "10",
            color: "♥"
          },
          {
            value: "J",
            color: "♥"
          },
        ]
      },
      {
        id: 1236,
        name: "player4",
        cards: [
          {
            value: "A",
            color: "♥"
          },
          {
            value: "10",
            color: "♥"
          },
          {
            value: "J",
            color: "♥"
          },
          {
            value: "K",
            color: "♥"
          },
          {
            value: "Q",
            color: "♥"
          },
        ]
      },
      {
        id: 12347,
        name: "player5",
        cards: [
          {
            value: "A",
            color: "♥"
          },
          {
            value: "J",
            color: "♥"
          },
        ]
      },
      {
        id: 123458,
        name: "player6",
        cards: [
          {
            value: "A",
            color: "♥"
          },
          {
            value: "10",
            color: "♥"
          },
          {
            value: "J",
            color: "♥"
          },
        ]
      },
    ]
  })

  const chooseFigure = (newFigure) => {
    const newGameData = JSON.parse(JSON.stringify(gameData));
    newGameData.players[2].cards = newFigure;
    setGameData(newGameData);
  }

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <View style={{ height: '60%' }}>
          <Board gameData={gameData} />
        </View>
        <View style={{ flex: 1 }}>
          <CardList chooseFigure={chooseFigure} />
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkThemeButtonBackground : styles.lightThemeButtonBackground]}
            onPress={() => console.log('heelp')}
            underlayColor='#fff'>
            <Text style={[styles.buttonText, isDarkMode ? styles.darkThemeText : styles.lightThemeText]}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkThemeButtonBackground : styles.lightThemeButtonBackground]}
            onPress={() => console.log('check')}
            underlayColor='#fff'>
            <Text style={[styles.buttonText, isDarkMode ? styles.darkThemeText : styles.lightThemeText]}>Check</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkThemeButtonBackground : styles.lightThemeButtonBackground]}
            onPress={() => console.log('bet')}
            underlayColor='#fff'>
            <Text style={[styles.buttonText, isDarkMode ? styles.darkThemeText : styles.lightThemeText]}>Bet</Text>
          </TouchableOpacity>
        </View>
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
    borderRadius: 8,
  },
  darkThemeButtonBackground: {
    backgroundColor: '#49DDDD',
  },
  lightThemeButtonBackground: {
    backgroundColor: '#222831',
  },
  buttonText: {
    textAlign: 'center',
    paddingLeft : 10,
    paddingRight : 10,
    fontWeight: '700',
  },
  darkThemeText: {
    color: '#010710',
  },
  lightThemeText: {
    color: '#fff',
  },
});

export default Game;
