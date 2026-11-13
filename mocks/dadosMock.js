// mocks/dadosMock.js
export const CATEGORIAS = [
  '🏡 Casa',
  '🧹 Limpeza',
  '👕 Lavanderia',
  '🗄️ Organização',
  '🛒 Compras',
  '📚 Estudos',
  '📅 Pessoal',
];

export const PRIORIDADES = {
  alta: { label: '🔴 Alta', cor: '#FF4D4D' },
  media: { label: '🟡 Média', cor: '#E6B800' },
  baixa: { label: '🟢 Baixa', cor: '#28A745' },
};

export const TAREFAS_INICIAIS = [
  {
    id: '1',
    titulo: 'Fazer compras do mês',
    descricao: 'Comprar arroz, feijão, frutas e produtos de limpeza.',
    categoria: '🛒 Compras',
    prioridade: 'alta',
    prazo: 'Hoje, 18:00',
    concluida: false,
  },
  {
    id: '2',
    titulo: 'Finalizar Entrega 2 de Mobile',
    descricao: 'Implementar todas as telas navegáveis e componentes reutilizáveis.',
    categoria: '📚 Estudos',
    prioridade: 'alta',
    prazo: 'Hoje, 22:00',
    concluida: false,
  },
  {
    id: '3',
    titulo: 'Lavar roupas',
    descricao: 'Separar roupas brancas e coloridas antes de colocar na máquina.',
    categoria: '👕 Lavanderia',
    prioridade: 'media',
    prazo: 'Amanhã',
    concluida: true,
  },
];
