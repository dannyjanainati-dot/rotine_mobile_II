import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from '../components/Input';
import { Botao } from '../components/Botao';

export function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>📋 Rotine Mobile</Text>
      <Text style={styles.subtitulo}>Organize suas tarefas diárias</Text>

      <Input label="E-mail" placeholder="seu@email.com" value={email} onChangeText={setEmail} />
      <Input label="Senha" placeholder="******" value={senha} onChangeText={setSenha} secureTextEntry />

      <Botao titulo="Entrar" onPress={() => navigation.replace('Home')} />

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.link}>
        <Text style={styles.linkTexto}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F9', padding: 24, justifyContent: 'center' },
  logo: { fontSize: 28, fontWeight: 'bold', color: '#007BFF', textAlign: 'center', marginBottom: 8 },
  subtitulo: { fontSize: 15, color: '#666', textAlign: 'center', marginBottom: 32 },
  link: { marginTop: 16, alignItems: 'center' },
  linkTexto: { color: '#007BFF', fontSize: 15, fontWeight: '600' },
});
