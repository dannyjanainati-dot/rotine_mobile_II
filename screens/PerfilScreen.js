import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Botao } from '../components/Botao';

export function PerfilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.avatar}>👤</Text>
        <Text style={styles.nome}>Usuário Teste</Text>
        <Text style={styles.email}>usuario@email.com</Text>
      </View>

      <Botao
        titulo="Sair da Conta (Logout)"
        corFundo="#DC3545"
        onPress={() => navigation.replace('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F9', padding: 20, justifyContent: 'center' },
  card: { backgroundColor: '#FFF', borderRadius: 12, padding: 24, alignItems: 'center', marginBottom: 24, elevation: 2 },
  avatar: { fontSize: 50, marginBottom: 12 },
  nome: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  email: { fontSize: 15, color: '#666', marginTop: 4 },
});
