import { StyleSheet, View } from 'react-native';
import { colorPalette } from '../../theme/colors';

export default function CardWrapper({ children }) {
  return <View style={styles.cardWrapper}>{children}</View>;
}

const styles = StyleSheet.create({
  cardWrapper: {
    alignItems: 'center',
    backgroundColor: colorPalette.primary_700,
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    //shadow for androids
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
