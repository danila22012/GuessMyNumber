import { StyleSheet, Text } from 'react-native';
import { colorPalette } from '../../theme/colors';

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: colorPalette.secondary_500,
    fontSize: 24,
  },
});
