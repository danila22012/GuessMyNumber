import {
  StyleSheet,
  View,
  Alert,
  useWindowDimensions,
  FlatList,
} from 'react-native';
import Title from '../../components/Title';
import { colorPalette } from '../../theme/colors';
import { useEffect, useState } from 'react';
import NumberWrapper from '../../components/NumberWrapper';
import PrimaryButton from '../../components/PrimaryButton';
import CardWrapper from '../../components/CardWrapper';
import InstructionText from '../../components/InstructionText';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../../components/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 0;
let maxBoundary = 100;

export default function GamePage({ userNumber, onGameOver }) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(0, 100, userNumber)
  );
  const [guessRounds, setGuessRounds] = useState([currentGuess]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    minBoundary = 0;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direciton) {
    if (
      (direciton === 'lower' && currentGuess < userNumber) ||
      (direciton === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", 'You know that this is wrong...', [
        { text: 'Sorry...', style: 'cancel' },
      ]);
      return;
    }
    if (direciton === 'lower') {
      maxBoundary = currentGuess;
    }
    if (direciton === 'greater') {
      minBoundary = currentGuess;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevState) => [...prevState, newRndNumber]);
  }

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess]);

  let Content = (
    <>
      <NumberWrapper>{currentGuess}</NumberWrapper>
      <CardWrapper>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('greater')}>
              <Ionicons name='md-add' size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name='md-remove' size={24} />
            </PrimaryButton>
          </View>
        </View>
      </CardWrapper>
    </>
  );

  if (width > 600) {
    Content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('greater')}>
              <Ionicons name='md-add' size={24} />
            </PrimaryButton>
          </View>
          <NumberWrapper>{currentGuess}</NumberWrapper>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name='md-remove' size={24} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      {Content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          keyExtractor={(_, index) => index}
          renderItem={(data) => (
            <GuessLogItem
              guess={data.item}
              roundNumber={guessRounds.length - data.index}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  instructionText: {
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: colorPalette.secondary_500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: colorPalette.secondary_500,
    padding: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  buttonsContainerWide: { flexDirection: 'row', alignItems: 'center' },

  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
