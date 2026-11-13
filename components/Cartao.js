import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function Cartao({ titulo, subtitulo, onPress }) {
  return (
    <TouchableOpacity style={styles.cartao} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>{titulo}</Text>
        {subtitulo ? <Text style={styles.subtitulo}>{subtitulo}</Text> : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  conteudo: {
    flex: 1,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  subtitulo: {
    fontSize: 13,
    color: '#666666',
    marginTop: 4,
  },
});
