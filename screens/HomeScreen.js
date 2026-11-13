import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { TAREFAS_INICIAIS, PRIORIDADES } from '../mocks/dadosMock';
import { Cartao } from '../components/Cartao';
import { Botao } from '../components/Botao';

export function HomeScreen({ navigation }) {
  const [tarefas, setTarefas] = useState(TAREFAS_INICIAIS);
  const [filtro, setFiltro] = useState('todas');

  const tarefasFiltradas = tarefas.filter((item) => {
    if (filtro === 'pendentes') return !item.concluida;
    if (filtro === 'concluidas') return item.concluida;
    return true;
  });

  const pendentes = tarefas.filter((t) => !t.concluida).length;
  const concluidas = tarefas.filter((t) => t.concluida).length;

  return (
    <View style={styles.container}>
      <View style={styles.resumoRow}>
        <View style={styles.resumoCard}>
          <Text style={styles.numero}>{pendentes}</Text>
          <Text style={styles.label}>Pendentes</Text>
        </View>
        <View style={styles.resumoCard}>
          <Text style={[styles.numero, { color: '#28A745' }]}>{concluidas}</Text>
          <Text style={styles.label}>Concluídas</Text>
        </View>
      </View>

      <View style={styles.filtrosRow}>
        {['todas', 'pendentes', 'concluidas'].map((f) => (
          <TouchableOpacity
            key={f}
            style={[styles.filtroBtn, filtro === f && styles.filtroAtivo]}
            onPress={() => setFiltro(f)}
          >
            <Text style={[styles.filtroTxt, filtro === f && styles.filtroTxtAtivo]}>
              {f.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={tarefasFiltradas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Cartao
            titulo={`${item.concluida ? '✅ ' : ''}${item.titulo}`}
            subtitulo={`${item.categoria} • ${PRIORIDADES[item.prioridade].label} • ${item.prazo}`}
            onPress={() => navigation.navigate('DetalhesTarefa', { tarefa: item })}
          />
        )}
      />

      <Botao titulo="+ Nova Tarefa" onPress={() => navigation.navigate('NovaTarefa')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F9', padding: 16 },
  resumoRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  resumoCard: { flex: 1, backgroundColor: '#FFF', padding: 16, borderRadius: 10, alignItems: 'center', marginHorizontal: 4, elevation: 2 },
  numero: { fontSize: 22, fontWeight: 'bold', color: '#007BFF' },
  label: { fontSize: 13, color: '#666', marginTop: 4 },
  filtrosRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 },
  filtroBtn: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 20, backgroundColor: '#E0E0E0' },
  filtroAtivo: { backgroundColor: '#007BFF' },
  filtroTxt: { fontSize: 12, fontWeight: 'bold', color: '#333' },
  filtroTxtAtivo: { color: '#FFF' },
});
