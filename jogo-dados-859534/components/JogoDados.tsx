import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Dado from "./Dado";

export default function JogoDados() {
  const [rodada, setRodada] = useState(1);

  const [dadosJogador1, setDadosJogador1] = useState([1, 1]);
  const [dadosJogador2, setDadosJogador2] = useState([1, 1]);

  const [jogadorAtual, setJogadorAtual] = useState(1);

  const [resultado1, setResultado1] = useState("");
  const [resultado2, setResultado2] = useState("");

  const [pontosJogador1, setPontosJogador1] = useState(0);
  const [pontosJogador2, setPontosJogador2] = useState(0);

  const [fimDeJogo, setFimDeJogo] = useState(false);

  function sortearDado() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function jogarJogador1() {
    const novosDados = [sortearDado(), sortearDado()];

    setDadosJogador1(novosDados);
    setResultado1("");
    setResultado2("");

    setJogadorAtual(2);
  }

  function jogarJogador2() {
    const novosDados = [sortearDado(), sortearDado()];

    setDadosJogador2(novosDados);

    const somaJogador1 = dadosJogador1[0] + dadosJogador1[1];
    const somaJogador2 = novosDados[0] + novosDados[1];

    let novosPontos1 = pontosJogador1;
    let novosPontos2 = pontosJogador2;

    if (somaJogador1 > somaJogador2) {
      setResultado1("Ganhou");
      setResultado2("Perdeu");
      novosPontos1++;
      setPontosJogador1(novosPontos1);
    } else if (somaJogador2 > somaJogador1) {
      setResultado1("Perdeu");
      setResultado2("Ganhou");
      novosPontos2++;
      setPontosJogador2(novosPontos2);
    } else {
      setResultado1("Empatou");
      setResultado2("Empatou");
    }

    if (rodada === 5) {
      setFimDeJogo(true);
    } else {
      setRodada(rodada + 1);
      setJogadorAtual(1);
    }
  }

  function jogarNovamente() {
    setRodada(1);

    setDadosJogador1([1, 1]);
    setDadosJogador2([1, 1]);

    setJogadorAtual(1);

    setResultado1("");
    setResultado2("");

    setPontosJogador1(0);
    setPontosJogador2(0);

    setFimDeJogo(false);
  }

  function resultadoFinal() {
    if (pontosJogador1 > pontosJogador2) {
      return "Jogador 1 venceu a partida!";
    }

    if (pontosJogador2 > pontosJogador1) {
      return "Jogador 2 venceu a partida!";
    }

    return "A partida terminou empatada!";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogo de Dados</Text>

      <Text style={styles.rodada}>Rodada {rodada} de 5</Text>

      <View style={styles.jogadores}>
        {/* JOGADOR 1 */}
        <View style={styles.jogador}>
          <Text style={styles.nomeJogador}>Jogador 1</Text>

          <View style={styles.dados}>
            <Dado valor={dadosJogador1[0]} />
            <Dado valor={dadosJogador1[1]} />
          </View>

          <Text style={styles.resultado}>{resultado1}</Text>

          <TouchableOpacity
            style={[
              styles.botao,
              (jogadorAtual !== 1 || fimDeJogo) &&
                styles.botaoDesabilitado,
            ]}
            onPress={jogarJogador1}
            disabled={jogadorAtual !== 1 || fimDeJogo}
          >
            <Text style={styles.textoBotao}>Jogar</Text>
          </TouchableOpacity>
        </View>

        {/* JOGADOR 2 */}
        <View style={styles.jogador}>
          <Text style={styles.nomeJogador}>Jogador 2</Text>

          <View style={styles.dados}>
            <Dado valor={dadosJogador2[0]} />
            <Dado valor={dadosJogador2[1]} />
          </View>

          <Text style={styles.resultado}>{resultado2}</Text>

          <TouchableOpacity
            style={[
              styles.botao,
              (jogadorAtual !== 2 || fimDeJogo) &&
                styles.botaoDesabilitado,
            ]}
            onPress={jogarJogador2}
            disabled={jogadorAtual !== 2 || fimDeJogo}
          >
            <Text style={styles.textoBotao}>Jogar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.placar}>
        Placar: {pontosJogador1} x {pontosJogador2}
      </Text>

      {fimDeJogo && (
        <View style={styles.final}>
          <Text style={styles.resultadoFinal}>
            {resultadoFinal()}
          </Text>

          <TouchableOpacity
            style={styles.botaoNovamente}
            onPress={jogarNovamente}
          >
            <Text style={styles.textoBotao}>
              Jogar Novamente
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  rodada: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 30,
  },

  jogadores: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  jogador: {
    alignItems: "center",
    flex: 1,
  },

  nomeJogador: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  dados: {
    flexDirection: "row",
    justifyContent: "center",
  },

  resultado: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
    height: 25,
  },

  botao: {
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },

  botaoDesabilitado: {
    backgroundColor: "#AAAAAA",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  placar: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
  },

  final: {
    alignItems: "center",
    marginTop: 30,
  },

  resultadoFinal: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  botaoNovamente: {
    backgroundColor: "#4CAF50",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
});