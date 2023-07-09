import { Image, StyleSheet, Text, View } from 'react-native';
import Title from '../../components/Title';
import { colorPalette } from '../../theme/colors';
import PrimaryButton from '../../components/PrimaryButton';

export default function GameOverPage({
  userNumber,
  guessRounds,
  onStartNewGame,
}) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{' '}
        <Text style={styles.highlight}>{guessRounds}</Text> rounds to guess
        the number <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 4,
    borderColor: colorPalette.primary_700,
    overflow: 'hidden',
    marginVertical: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: colorPalette.primary_500,
  },
});
