import { Image, StyleSheet } from "react-native";

type DadoProps = {
  valor: number;
};

const imagensDados = {
  1: require("../assets/dados/dado1.png"),
  2: require("../assets/dados/dado2.png"),
  3: require("../assets/dados/dado3.png"),
  4: require("../assets/dados/dado4.png"),
  5: require("../assets/dados/dado5.png"),
  6: require("../assets/dados/dado6.png"),
};

export default function Dado({ valor }: DadoProps) {
  const imagem = imagensDados[valor as keyof typeof imagensDados];

  return <Image source={imagem} style={styles.dado} />;
}

const styles = StyleSheet.create({
  dado: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});