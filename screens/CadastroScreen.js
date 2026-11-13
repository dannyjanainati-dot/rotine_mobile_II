import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Input } from '../components/Input';
import { Botao } from '../components/Botao';

export function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleCadastro() {
    Alert.alert('Sucesso', 'Conta criada! (Dados mockados)');
    navigation.replace('Home');
  }

  return (
    <View style={styles.container}>
      <Input label="Nome completo" placeholder="Ex: Maria Silva" value={nome} onChangeText={setNome} />
      <Input label="E-mail" placeholder="seu@email.com" value={email} onChangeText={setEmail} />
      <Input label="Senha" placeholder="Crie uma senha" value={senha} onChangeText={setSenha} secureTextEntry />

      <Botao titulo="Criar Conta" onPress={handleCadastro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F9', padding: 24, justifyContent: 'center' },
});
