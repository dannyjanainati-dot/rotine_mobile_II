import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { CATEGORIAS, PRIORIDADES } from '../mocks/dadosMock';
import { Input } from '../components/Input';
import { Botao } from '../components/Botao';

export function NovaTarefaScreen({ route, navigation }) {
  const tarefaEdicao = route.params?.tarefa;

  const [titulo, setTitulo] = useState(tarefaEdicao ? tarefaEdicao.titulo : '');
  const [descricao, setDescricao] = useState(tarefaEdicao ? tarefaEdicao.descricao : '');
  const [prazo, setPrazo] = useState(tarefaEdicao ? tarefaEdicao.prazo : '');
  const [categoria, setCategoria] = useState(tarefaEdicao ? tarefaEdicao.categoria : CATEGORIAS[0]);
  const [prioridade, setPrioridade] = useState(tarefaEdicao ? tarefaEdicao.prioridade : 'media');

  function salvar() {
    Alert.alert('Salvo', tarefaEdicao ? 'Tarefa atualizada!' : 'Nova tarefa cadastrada!');
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      <Input label="Título da Tarefa" placeholder="Ex: Limpar a cozinha" value={titulo} onChangeText={setTitulo} />
      <Input label="Descrição" placeholder="Detalhes da atividade..." value={descricao} onChangeText={setDescricao} multiline />
      <Input label="Prazo" placeholder="Ex: Hoje, 18:00" value={prazo} onChangeText={setPrazo} />

      <Text style={styles.secao}>Categoria</Text>
      <View style={styles.chipsRow}>
        {CATEGORIAS.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.chip, categoria === cat && styles.chipAtivo]}
            onPress={() => setCategoria(cat)}
          >
            <Text style={[styles.chipTxt, categoria === cat && styles.chipTxtAtivo]}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.secao}>Prioridade</Text>
      <View style={styles.chipsRow}>
        {Object.keys(PRIORIDADES).map((key) => (
          <TouchableOpacity
            key={key}
            style={[styles.chip, prioridade === key && styles.chipAtivo]}
            onPress={() => setPrioridade(key)}
          >
            <Text style={[styles.chipTxt, prioridade === key && styles.chipTxtAtivo]}>
              {PRIORIDADES[key].label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Botao titulo={tarefaEdicao ? 'Salvar Alterações' : 'Cadastrar Tarefa'} onPress={salvar} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F9', padding: 16 },
  secao: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 8, marginTop: 6 },
  chipsRow: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 16 },
  chip: { backgroundColor: '#FFF', borderWidth: 1, borderColor: '#DDD', borderRadius: 20, paddingVertical: 8, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 },
  chipAtivo: { backgroundColor: '#007BFF', borderColor: '#007BFF' },
  chipTxt: { fontSize: 13, color: '#333' },
  chipTxtAtivo: { color: '#FFF', fontWeight: 'bold' },
});
