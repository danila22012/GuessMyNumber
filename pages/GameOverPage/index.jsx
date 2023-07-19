import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import Title from '../../components/Title';
import { colorPalette } from '../../theme/colors';
import PrimaryButton from '../../components/PrimaryButton';

export default function GameOverPage({
  userNumber,
  guessRounds,
  onStartNewGame,
}) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }

  if (height < 450) {
    imageSize = 120;
  } else if (height < 380) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require('../../assets/images/success.png')}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{guessRounds}</Text>{' '}
          rounds to guess the number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
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
