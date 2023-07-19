import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { colorPalette } from '../../theme/colors';

export default function NumberWrapper({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colorPalette.secondary_500,
    borderRadius: 8,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colorPalette.secondary_500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: 'open-sans-bold',
  },
});
