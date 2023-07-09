import { StyleSheet, Text, View } from 'react-native';
import { colorPalette } from '../../theme/colors';

export default function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: colorPalette.primary_700,
    borderWidth: 4,
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    backgroundColor: colorPalette.secondary_500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: 'open-sans',
  },
});
