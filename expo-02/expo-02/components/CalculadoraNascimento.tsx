import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function CalculadoraNascimento() {
  const [idade, setIdade] = useState('');
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);

  function calcularAnoNascimento() {
    const idadeNumero = Number(idade);
    const diaNumero = Number(dia);
    const mesNumero = Number(mes);

    if (idade === '' || dia === '' || mes === '') {
  alert('Preencha todos os campos.');
  return;
}

if (idadeNumero < 0) {
  alert('Digite uma idade válida.');
  return;
}

if (mesNumero < 1 || mesNumero > 12) {
  alert('O mês deve estar entre 1 e 12.');
  return;
}

if (diaNumero < 1 || diaNumero > 31) {
  alert('O dia deve estar entre 1 e 31.');
  return;
}

    const dataAtual = new Date();

    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDate();

    let anoNascimento = anoAtual - idadeNumero;

    const aniversarioJaPassou =
      mesNumero < mesAtual ||
      (mesNumero === mesAtual && diaNumero <= diaAtual);

    if (!aniversarioJaPassou) {
      anoNascimento = anoNascimento - 1;
    }

    setResultado(anoNascimento);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Ano de Nascimento</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o dia do nascimento"
        keyboardType="numeric"
        value={dia}
        onChangeText={setDia}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o mês do nascimento"
        keyboardType="numeric"
        value={mes}
        onChangeText={setMes}
      />

      <Button title="Calcular" onPress={calcularAnoNascimento} />

      {resultado !== null && (
        <Text style={styles.resultado}>
          Seu ano de nascimento é: {resultado}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
    borderRadius: 5,
  },

  resultado: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
});