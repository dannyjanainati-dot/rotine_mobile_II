import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Botao } from './components/Botao';
import { Cartao } from './components/Cartao';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Teste dos Componentes</Text>

      <Cartao
        titulo="Estudar React Native"
        subtitulo="📚 Estudos • 🔴 Alta • Hoje"
        onPress={() => Alert.alert('Cartão clicado!')}
      />

      <Botao
        titulo="+ Nova Tarefa"
        onPress={() => Alert.alert('Botão clicado!')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F9',
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
});
