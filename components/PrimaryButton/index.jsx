import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colorPalette } from '../../theme/colors';

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOutterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : [styles.buttonInnerContainer]
        }
        android_ripple={{ color: colorPalette.primary_600 }}
        onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOutterContainer: {
    borderRadius: 28,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: colorPalette.primary_500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
