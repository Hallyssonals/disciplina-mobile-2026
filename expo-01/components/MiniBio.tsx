import { StyleSheet, Text, View } from 'react-native';
import Profile from './Profile';

export default function MiniBio() {
  return (
    <View style={styles.container}>
      <Profile />

      <Text style={styles.bio}>
        Sou estudante sistemas para internet e estou aprendendo desenvolvimento de
        aplicativos móveis com React Native e Expo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },

  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 24,
  },
});