import { StyleSheet, TextInput, View, Alert } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import { useState } from 'react';
import { colorPalette } from '../../theme/colors';
import Title from '../../components/Title';
import CardWrapper from '../../components/CardWrapper';
import InstructionText from '../../components/InstructionText';

export default function StartGamePage({ onPickNumber }) {
  const [value, setValue] = useState('');

  function valueChangeHandler(text) {
    setValue(text);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(value);
    if (chosenNumber > 0 && chosenNumber < 100) {
      onPickNumber(chosenNumber);
    } else {
      Alert.alert(
        'Invalid number',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okay', style: 'default', onPress: resetInputHandler }]
      );
    }
  }

  function resetInputHandler() {
    setValue('');
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my number</Title>
      <CardWrapper>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          value={value}
          onChangeText={valueChangeHandler}
          maxLength={2}
          style={styles.numberInput}
          keyboardType='number-pad'
          autoCapitalize='none'
          autoCorrect={false}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>
              Start game
            </PrimaryButton>
          </View>
        </View>
      </CardWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: 'center',
    fontSize: 32,
    borderBottomColor: colorPalette.secondary_500,
    borderBottomWidth: 2,
    color: colorPalette.secondary_500,
    marginVertical: 8,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  buttonContainer: {
    flex: 1,
  },
});
