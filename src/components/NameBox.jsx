import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function NameBox({ name }) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: 30,
    backgroundColor: '#5C6470',
    borderWidth: 0.5,
    borderColor: '#00ADB5',
    borderRadius: 8,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeftWidth: 0,
  },
  nameContainer: {
    height: '100%',
    aspectRatio: 1,
    transform: [{ rotate: '90deg'}],
    justifyContent: 'flex-start',
  },
  nameText: {
    height: 40,
    fontWeight: '700',
    fontSize: 16,
    paddingTop: 6,
    color: '#00ADB5',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NameBox;
