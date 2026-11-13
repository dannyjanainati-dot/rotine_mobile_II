import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { PRIORIDADES } from '../mocks/dadosMock';
import { Botao } from '../components/Botao';

export function DetalhesTarefaScreen({ route, navigation }) {
  const { tarefa } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>{tarefa.titulo}</Text>
        <Text style={styles.info}>Categoria: {tarefa.categoria}</Text>
        <Text style={styles.info}>Prioridade: {PRIORIDADES[tarefa.prioridade].label}</Text>
        <Text style={styles.info}>Prazo: {tarefa.prazo}</Text>
        <Text style={styles.info}>Status: {tarefa.concluida ? '✅ Concluída' : '⏳ Pendente'}</Text>

        <Text style={styles.descLabel}>Descrição:</Text>
        <Text style={styles.desc}>{tarefa.descricao}</Text>
      </View>

      <Botao
        titulo={tarefa.concluida ? 'Reabrir Tarefa' : 'Marcar como Concluída'}
        corFundo="#28A745"
        onPress={() => {
          Alert.alert('Status alterado', 'Tarefa atualizada com sucesso!');
          navigation.goBack();
        }}
      />

      <Botao
        titulo="Editar Tarefa"
        corFundo="#007BFF"
        onPress={() => navigation.navigate('NovaTarefa', { tarefa })}
      />

      <Botao
        titulo="Excluir Tarefa"
        corFundo="#DC3545"
        onPress={() => {
          Alert.alert('Excluída', 'Tarefa removida da lista.');
          navigation.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F9', padding: 16 },
  card: { backgroundColor: '#FFF', borderRadius: 10, padding: 20, marginBottom: 20, elevation: 2 },
  titulo: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 12 },
  info: { fontSize: 15, color: '#555', marginBottom: 6 },
  descLabel: { fontSize: 15, fontWeight: 'bold', color: '#333', marginTop: 14, marginBottom: 4 },
  desc: { fontSize: 15, color: '#666', lineHeight: 22 },
});
