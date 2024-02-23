import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function Card({ index, value, color, reversed }) {
  const isDarkMode = useColorScheme() === 'dark';
  const leftPosition = index * 35 + 5 + '%'

  return (
    <View style={[styles.container, {
      left: leftPosition,
      alignItems: reversed ? 'flex-start' : 'flex-end',
      transform: [{ rotate: reversed ? '180deg' : '0deg' }] }]}>
      <View style={[styles.cardTextContainer, {  }]}>
        <Text style={styles.cardText}>{value}</Text>
        <Text style={styles.cardText}>{color}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    aspectRatio: .625,
    backgroundColor: '#5C6470',
    borderWidth: 0.5,
    borderColor: '#00ADB5',
    borderRadius: 8,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  cardTextContainer: {
    width: '40%',
    paddingTop: 4,
  },
  cardText: {
    fontWeight: '700',
    fontSize: 14,
    color: '#00ADB5',
    alignContent: 'center',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default Card;
