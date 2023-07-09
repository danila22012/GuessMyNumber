import { StyleSheet, Text, View } from 'react-native';
import { colorPalette } from '../../theme/colors';

export default function NumberWrapper({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colorPalette.secondary_500,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colorPalette.secondary_500,
    fontSize: 36,
    fontFamily: 'open-sans-bold',
  },
});
