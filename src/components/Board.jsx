import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import NameBox from './NameBox';
import Player from './Player';

function Board() {
  const isDarkMode = useColorScheme() === 'dark';

  const game = {
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
    ]
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{ flex: 1, gap: 20, paddingVertical: 20 }}>
          {game.players.map(player => <Player key={player.id} player={player} />)}
        </View>
        <View style={{ flex: 1, gap: 20, paddingVertical: 20 }}>
          {game.players.map(player => <Player reversed key={player.id} player={player} />)}
        </View>
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
  text: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft : 10,
    paddingRight : 10,
    fontWeight: '700',
  }
});

export default Board;
