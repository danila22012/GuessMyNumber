import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import StartGamePage from './pages/StartGamePage';
import GamePage from './pages/GamePage';
import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useState } from 'react';
import { colorPalette } from './theme/colors';
import GameOverPage from './pages/GameOverPage';
import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setRoundsNumber] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function pickerNumberHandler(number) {
    setUserNumber(number);
    setGameIsOver(false);
  }

  function gameOverHandler(guessRounds) {
    setGameIsOver(true);
    setRoundsNumber(guessRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setRoundsNumber(0);
  }

  let screen = <StartGamePage onPickNumber={pickerNumberHandler} />;

  if (userNumber) {
    screen = <GamePage userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverPage
        guessRounds={guessRounds}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[colorPalette.primary_600, colorPalette.secondary_500]}
      style={styles.appContainer}
      onLayout={onLayoutRootView}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.appContainer}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
