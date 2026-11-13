// navigation/AppNavigator.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '../screens/LoginScreen';
import { CadastroScreen } from '../screens/CadastroScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { NovaTarefaScreen } from '../screens/NovaTarefaScreen';
import { DetalhesTarefaScreen } from '../screens/DetalhesTarefaScreen';
import { PerfilScreen } from '../screens/PerfilScreen';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ title: 'Criar Conta' }} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Minhas Tarefas',
            headerBackVisible: false,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                <Text style={{ color: '#007BFF', fontWeight: 'bold', fontSize: 15 }}>Perfil</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="NovaTarefa" component={NovaTarefaScreen} options={{ title: 'Gerenciar Tarefa' }} />
        <Stack.Screen name="DetalhesTarefa" component={DetalhesTarefaScreen} options={{ title: 'Detalhes da Tarefa' }} />
        <Stack.Screen name="Perfil" component={PerfilScreen} options={{ title: 'Meu Perfil' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
