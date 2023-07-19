import { StyleSheet, Text, View } from 'react-native';
import { colorPalette } from '../../theme/colors';

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    padding: 12,
    maxWidth: '80%',
  },
});
