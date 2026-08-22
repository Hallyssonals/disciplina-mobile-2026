import { Image, StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/perfil.jpg')}
        style={styles.profileImage}
      />

      <Text style={styles.name}>Hallysson Silva</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12,
  },
});