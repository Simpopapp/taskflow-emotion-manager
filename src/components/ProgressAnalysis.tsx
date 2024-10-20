import React from 'react';
import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const ProgressAnalysis = ({ tasks, moodHistory }) => {
  // Simulando dados para o gráfico
  const data = [
    { name: 'Seg', tarefas: 4, humor: 3 },
    { name: 'Ter', tarefas: 3, humor: 4 },
    { name: 'Qua', tarefas: 5, humor: 3 },
    { name: 'Qui', tarefas: 2, humor: 2 },
    { name: 'Sex', tarefas: 6, humor: 4 },
    { name: 'Sáb', tarefas: 4, humor: 5 },
    { name: 'Dom', tarefas: 3, humor: 4 },
  ];

  return (
    <Card className="p-4">
      <h2 className="text-xl font-semibold mb-4">Análise de Progresso</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="tarefas" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="humor" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};