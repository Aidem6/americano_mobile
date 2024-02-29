import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Card from './Card';

function CardList({ chooseFigure }) {
  const isDarkMode = useColorScheme() === 'dark';

  const cardList = [
    {
      name: 'high_card_9',
      cards: [
        {
          rank: "J",
        },
      ]
    },
    {
      name: 'A',
      cards: [
        {
          rank: "A",
          suit: "♥"
        },
      ]
    },
    {
      name: 'pairJ',
      cards: [
        {
          rank: "J",
          suit: "♥"
        },
        {
          rank: "J",
          suit: "♠"
        },
      ]
    },
    {
      name: 'pairK',
      cards: [
        {
          rank: "K",
          suit: "♥"
        },
        {
          rank: "K",
          suit: "♠"
        },
      ]
    },
    {
      name: 'pairA',
      cards: [
        {
          rank: "A",
          suit: "♥"
        },
        {
          rank: "A",
          suit: "♠"
        },
      ]
    },
  ]

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardDeck}>
        {cardList.map((figure) =>
          <TouchableOpacity
            onPress={() => chooseFigure(figure.cards)}
            key={figure.name}
            style={{ flexDirection: "row", height: 100, justifyContent: 'center', backgroundColor: isDarkMode ? '#010710' : '#fff' }}
          >
            {figure.cards.map((card) =>
              <View
                key={card.value + card.color}
                style={{ margin: 10}}
              >
                <Card
                  index={0}
                  value={card.value} color={card.color}
                />
              </View>
            )}
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
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
    padding: 20,
  },
  cardDeck: {
    height: 600,
  },
});

export default CardList;
