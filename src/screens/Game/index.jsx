import React, { useState, useContext, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  InteractionManager,
  ScrollView,
} from 'react-native';
import Board from '../../components/Board';
import CardList from '../../components/CardList';
import { SocketContext } from '../../../socket';

function Game() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#010710' : '#fff',
  };
  const [ gameData, setGameData ] = useState({ players: [{
    id: 'playerId1',
    name: 'Player 1',
    cards: [],
    isYourTurn: true,
  },{
    id: 'playerId2',
    name: 'Player 2',
    cards: [],
    isYourTurn: false,
  },{
    id: 'playerId3',
    name: 'Player 3',
    cards: [],
    isYourTurn: false,
  },{
    id: 'playerId4',
    name: 'Player 4',
    cards: [],
    isYourTurn: false,
  }] });
  const [ whooseTurn, setWhooseTurn ] = useState(0);
  const [ logs, setLogs ] = useState('');
  const scrollViewRef = useRef();

  const {socket, sid} = useContext(SocketContext);
  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      // Handle game start event
      socket.on('game_start', function(data) {
        try {
          let players = data.players.map((playerId, index) => {
            const newPlayerData = {
              id: playerId,
              name: playerId.slice(-4),
              cards: [],
              isYourTurn: index === 0 ? true : false,
            }
            if (playerId === sid) {
              newPlayerData['isMe'] = true;
            }
            return newPlayerData;
          });
          setGameData({
            players: players,
          })
          // TODO: set who's turn is it
        }
        catch (err) {
          console.error(err);
        }
        setLogs(oldLogs => ([ ...oldLogs, '\nGame Started! players: ' + data.players]));
        scrollViewRef.current.scrollToEnd({ animated: true });
      });
  
      // Handle game update event
      socket.on('game_update', function(data) {
        console.log('Game Update: ' + JSON.stringify(data));
        // Additional logic to display game update details
        setLogs(oldLogs => ([ ...oldLogs, '\nGame Update: ' + data.text]));
        scrollViewRef.current.scrollToEnd({ animated: true });
      });
  
      // Handle game end event
      socket.on('game_end', function(data) {
        console.log('Game Ended: ' + data.result);
        // Additional logic to display game end details
        setLogs(oldLogs => ([ ...oldLogs, '\Game Ended: ' + data.result]));
        scrollViewRef.current.scrollToEnd({ animated: true });
      });
  
      socket.on('message', function(data) {
        // Assuming the message is in the 'text' property of the data object
        var message = data.text;
        console.log('Log: ' + message);
        setLogs(oldLogs => ([ ...oldLogs, '\nLog: ' + message]));
        scrollViewRef.current.scrollToEnd({ animated: true });
      });
    });
    // Remove all the listeners and
    return () => {
      // socket.emit('auction:leave', {auctionId: 'mongoAuctionId'}); //closing current particular auction room
      socket.removeAllListeners();
    };
  }, []);

  const chooseFigure = (newFigure, figureName) => {
    console.log(figureName)
    socket.emit('bet', {'bet': newFigure});
    const newGameData = JSON.parse(JSON.stringify(gameData));
    newGameData.players[whooseTurn].cards = newFigure;
    newGameData.players[whooseTurn].isYourTurn = false;
    newGameData.players[(whooseTurn + 1) % gameData.players.length].isYourTurn = true;
    setWhooseTurn((whooseTurn + 1) % gameData.players.length);
    setGameData(newGameData);
  }

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <View style={{ height: '40%' }}>
          <Board gameData={gameData} />
        </View>
        {/* <ScrollView
          ref={scrollViewRef}
          style={{ height: '5%' }}
        >
          <Text style={{ color: isDarkMode ? '#fff' : '#010710' }}>{logs}</Text>
        </ScrollView> */}
        <View style={{ flex: 1 }}>
          <CardList chooseFigure={chooseFigure} />
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkThemeButtonBackground : styles.lightThemeButtonBackground]}
            onPress={() => socket.emit('play')}
            underlayColor='#fff'>
            <Text style={[styles.buttonText, isDarkMode ? styles.darkThemeText : styles.lightThemeText]}>PLAY</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkThemeButtonBackground : styles.lightThemeButtonBackground]}
            onPress={() => socket.emit('bet', {'bet': 'check'})}
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
